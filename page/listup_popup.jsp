<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>
<%@ page import='java.util.ArrayList' %> 

<%
  String yearValue = request.getParameter("year");
  String monthValue = request.getParameter("month");
  String dayValue = request.getParameter("day");
  String dateValue = String.format("%04d-%02d-%02d", Integer.parseInt(yearValue), Integer.parseInt(monthValue), Integer.parseInt(dayValue));
  String start_time =  "";
  String end_time =  "";
  String content =  "";
  
  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "SELECT * FROM work WHERE date=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, dateValue);

  ResultSet result = query.executeQuery(); // 준비한 sql쿼리 실행

  ArrayList<ArrayList<String>> list = new ArrayList<ArrayList<String>>(); // 2차원 리스트

  while (result.next()) {
    ArrayList<String> data = new ArrayList<String>();
    start_time = result.getString("start_time");
    end_time = result.getString("end_time");
    content = result.getString("content");
    data.add("\"" + start_time + "\""); // 여기에서 string처리 하지 않으면 날데이터로 바뀌어서 날아감, 읽을 수 없어짐 , 강제적으로 큰따옴표 붙여줌
    data.add("\"" + end_time + "\""); // 여기 잘 기억하기!
    data.add("\"" + content + "\"");
    list.add(data);
  } 
  
  if (list.isEmpty()) {
    out.println("<script>");
    out.println("alert('없음')");
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

      // 데이터를 반복하여 HTML 요소를 동적으로 생성
      for(i = 0; i < listData.length; i++) {
        let startTime = createContent("start_time", listData[i][0]);
        let endTime = createContent("end_time", listData[i][1]);
        let content = createContent("content", listData[i][2]);

        listup.appendChild(startTime);
        listup.appendChild(endTime);
        listup.appendChild(content);
      }

    </script>
  </body>
</html>

