<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
  String idValue = request.getParameter("id_box");
  String pwValue = request.getParameter("pw_box");
  String pwCheckValue = request.getParameter("pw_check_box");
  String nameValue = request.getParameter("name_box");
  String emailValue = request.getParameter("email_box");
  String partValue = request.getParameter("part_box");
  String rankValue = request.getParameter("rank_box");
  String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

  if (!idValue.matches("^.{6,10}$")) {
    out.println("올바른 아이디를 입력해주세요");
  } else if (!pwValue.matches("^.{8,10}$")) {
    out.println("올바른 비밀번호를 입력해주세요");
  } else if (!pwValue.equals(pwCheckValue)) {
    out.println("올바른 비밀번호를 입력해주세요");
  } else if (!nameValue.matches("^[가-힣a-zA-Z]{2,10}$")) {
    out.println("올바른 이름을 입력해주세요");
  } else if (!emailValue.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
    out.println("올바른 이메일을 입력해주세요");
  } else if (partValue.equals("")) {
    out.println("올바른 부서를 선택해주세요");
  } else if (rankValue.equals("")) {
    out.println("올바른 직급을 선택해주세요");
  } else {
    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "INSERT INTO user (id, pw, name, email, part, rank) VALUES (?, ?, ?, ?, ?, ?)";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, idValue);
    query.setString(2, pwValue);
    query.setString(3, nameValue);
    query.setString(4, emailValue);
    query.setString(5, partValue);
    query.setString(6, rankValue);

    query.executeUpdate();

    response.sendRedirect("../page/login.jsp");
  }
%>