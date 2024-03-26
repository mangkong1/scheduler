<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>

<%
  String idx = (String) session.getAttribute("userIdx");
  String id = "";
  String pw = "";
  String name = "";
  String email = "";
  String part = "";
  String rank = "";

  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "SELECT * FROM user WHERE idx=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, idx);

  ResultSet result = query.executeQuery();
  while(result.next()) {
    id = result.getString("id");
    pw = result.getString("pw");
    name = result.getString("name");
    email = result.getString("email");
    part = result.getString("part");
    rank = result.getString("rank");
  }
%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/mypage_modify.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="mypage_modify_section">
        <h1 id="mypage_modify_title">마이페이지</h1>

        <div>
          <input class="input_pw_box" id="pw_box" type="password" placeholder="비밀번호" value="<%= pw %>" onInput="checkPw()"/>
          <span class="constraint_message">비밀번호는 8~10자로 입력해주세요</span>
        </div>

        <div>
          <input class="input_pw_box" id="pw_check_box" type="password" placeholder="비밀번호 확인" value="<%= pw %>" onInput="checkPw()"/>
          <span class="constraint_message" id="pw_usable">비밀번호가 일치합니다</span>
          <span class="constraint_message" id="pw_unusable">비밀번호가 일치하지 않습니다</span>
        </div>        

        <div>
          <input class="input_box" id="name_box" type="text" placeholder="이름" value="<%= name %>" onInput="checkName()"/>
          <span class="constraint_message">이름은 2~10자로 입력해주세요</span>
        </div>

        <div class="check_container">
          <input class="input_box_small" id="email_box" type="text" placeholder="이메일" value="<%= email %>" onInput="checkEmail()"/>
          <input class="check_btn" id="email_check_btn" type="button" value="중복확인" onClick="checkDuplicateEmail()"/>
        </div>
        
        <select class="select_box" id="part_select">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option selected disabled hidden><%= part %></option>
          <option disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        
        <select class="select_box" id="rank_select">
          <option selected disabled hidden><%= rank %></option>
          <option disabled>직급</option>
          <option>팀장</option>
          <option>팀원</option>
        </select>
        
        <div id="mypage_btn_container">
          <button id="register_btn" onClick="register()">등록</button>
          <button id="cancel_btn" onClick="cancel()">취소</button>
        </div>
      </section>
    </main>
    <script src="../event/mypage_modify.js"></script>
  </body>
</html>
