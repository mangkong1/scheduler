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
    <link rel="stylesheet" href="../style/mypage.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="mypage_section">
        <h1 id="mypage_title">마이페이지</h1>

        <table id="mypage_table">
          <tr>
            <td class="key_box">아이디</td>
            <td class="value_box" id="id_value"><%= id %></td>
          </tr>
          <tr>
            <td class="key_box">비밀번호</td>
            <td class="value_box" id="pw_value"><%= pw %></td>
          </tr>
          <tr>
            <td class="key_box">이름</td>
            <td class="value_box" id="name_value"><%= name %></td>
          </tr>
          <tr>
            <td class="key_box">이메일</td>
            <td class="value_box" id="email_value"><%= email %></td>
          </tr>
          <tr>
            <td class="key_box">부서</td>
            <td class="value_box" id="part_value"><%= part %></td>
          </tr>
          <tr>
            <td class="key_box">직급</td>
            <td class="value_box" id="rank_value"><%= rank %></td>
          </tr>
        </table>
        
        <div id="mypage_btn_container">
          <input id="mypage_modify_btn" type="submit" value="수정" onclick="location.href='../page/mypage_modify.jsp'">
          <input id="delete_btn" type="submit" value="탈퇴">
        </div>
      </section>
    </main>
  </body>
</html>
