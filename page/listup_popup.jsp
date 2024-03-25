<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>
<%@ page import='java.util.ArrayList' %> 

<%
  String userIdx = (String) session.getAttribute("userIdx");
  String yearValue = request.getParameter("year");
  String monthValue = request.getParameter("month");
  String dayValue = request.getParameter("day");
  String dateValue = String.format("%04d-%02d-%02d", Integer.parseInt(yearValue), Integer.parseInt(monthValue), Integer.parseInt(dayValue));
  String start_time =  "";
  String end_time =  "";
  String content =  "";
  String name = "";
  String userName = "";
  String work_idx = "";
  
  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String userSql = "SELECT name from user WHERE idx=?";
  PreparedStatement userQuery = connect.prepareStatement(userSql);
  userQuery.setString(1, userIdx);

  ResultSet userResult = userQuery.executeQuery();
  while (userResult.next()) {
    userName = userResult.getString("name");
  }

  String sql = "SELECT work.*, user.name FROM work JOIN user ON work.user_idx = user.idx WHERE work.date=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, dateValue);

  ResultSet result = query.executeQuery(); // 준비한 sql쿼리 실행

  ArrayList<ArrayList<String>> list = new ArrayList<ArrayList<String>>(); // 2차원 리스트

  while (result.next()) {
    ArrayList<String> data = new ArrayList<String>();
    work_idx = result.getString("idx");
    name = result.getString("name");
    start_time = result.getString("start_time");
    end_time = result.getString("end_time");
    content = result.getString("content");
    data.add("\"" + name + "\"");
    data.add("\"" + start_time + "\""); // 여기에서 string처리 하지 않으면 날데이터로 바뀌어서 날아감, 읽을 수 없어짐 , 강제적으로 큰따옴표 붙여줌
    data.add("\"" + end_time + "\""); // 여기 잘 기억하기!
    data.add("\"" + content + "\"");
    list.add(data);
  } 
  
  if (list.isEmpty()) {
    out.println("<script>");
    out.println("alert('일정이 없습니다')");
    out.println("window.close()");
    out.println("</script>");
  }
%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/listup_popup.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="listup">
      </section>
    </main>
    <%-- <script src="../event/listup_popup.js"></script> --%>
    <script>
      const listData = <%= list %>; // ArrayList를 JavaScript 배열로 전달
      const listup = document.querySelector("#listup");
      
      function createContent(id, text) {
        const listupText = document.createElement("h1");
        listupText.id = id;
        listupText.textContent = text;
        listupText.classList.add("article_content");
        return listupText;
      }
      
      function createInput(id, type, value, placeholder) {
        const input = document.createElement("input");
        input.id = id;
        input.type = type;
        input.value = value;
        input.placeholder = placeholder;
        return input;
      }

      function createButton(id, type, value) {
        const button = document.createElement("input");
        button.id = id;
        button.type = type;
        button.value = value;
        return button;
      }

      function deletePopup() {
        let workIdx = <%= work_idx %>;
        window.open("../action/popup_delete_action.jsp?work_idx=" + workIdx);
      }

      function modifyPopup() {
        let workIdx = <%= work_idx %>;
        window.open("../action/popup_modify_action.jsp?work_idx=" + workIdx);
      }

      // 데이터를 반복하여 HTML 요소를 동적으로 생성
      for(let i = 0; i < listData.length; i++) {
        const article = document.createElement("article");
        const userName = '<%= userName %>';
        article.classList.add(listData[i][0]);
        
        const name = createContent("name", listData[i][0])
        const startTime = createContent("start_time", listData[i][1]);
        const endTime = createContent("end_time", listData[i][2]);
        const content = createContent("content", listData[i][3]);

        article.appendChild(name);
        article.appendChild(startTime);
        article.appendChild(endTime);
        article.appendChild(content);
        article.appendChild(document.createElement("hr"));
        
        if (article.classList.contains(userName)) {
          const btnContainer = document.createElement("div");
          const modifyBtn = createButton("modify_btn", "submit", "수정"); // 확인 버튼 클릭시의 조건문이
          const deleteBtn = createButton("delete_btn", "submit", "삭제");
          btnContainer.classList.add("btn_container");
          btnContainer.appendChild(modifyBtn);
          btnContainer.appendChild(deleteBtn);

          deleteBtn.addEventListener("click", deletePopup);
          modifyBtn.addEventListener("click", modifyPopup);
          article.appendChild(btnContainer);
        }

        listup.appendChild(article);
      }

      const colorMap = {};

      // article의 클래스 이름을 기반으로 색상을 할당합니다.
      listup.querySelectorAll("article").forEach((e) => {
        const articleClass = e.classList[0]; // 첫 번째 클래스 이름을 가져옵니다.
        
        if (!colorMap[articleClass]) { // 해당 클래스 이름이 색상 맵에 이미 존재하는지 확인합니다.
          colorMap[articleClass] = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
        }

        e.querySelectorAll("h1").forEach((h1) => {
          h1.style.color = colorMap[articleClass]; // 클래스 이름에 해당하는 색상을 적용합니다.
        });
      });
    </script>
  </body>
</html>