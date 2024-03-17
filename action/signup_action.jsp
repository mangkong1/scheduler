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
// try {
//   if (idValue.equals("") || idValue.length() < 6 || idValue.length() > 10) {
//     throw "올바른 아이디를 입력해주섿요";
//   } 
//   if (pwValue.equals("") || pwValue.length() < 8 || pwValue.length() > 10) {
//     throw "올바른 비밀번호를 입력해주세요");
//   } if (pwCheckValue.equals("") || !pwValue.equals(pwCheckValue)) {
//     throw "올바른 비밀번호를 입력해주세요");
//   } else if (nameValue.equals("") || nameValue.length() < 2 || nameValue.length() > 10) {
//     out.println("올바른 이름을 입력해주세요");
//   } else if (emailValue.equals("") || emailValue.length() > 30 || !emailValue.matches(emailRegex)) {
//     out.println("올바른 이메일을 입력해주세요");
//   } else if (partValue.equals("")) {
//     out.println("올바른 부서를 선택해주세요");
//   } else if (rankValue.equals("")) {
//     out.println("올바른 직급을 선택해주세요");

// } catch(e){
//   out.println(e);
//   return;
// }

// class.forname("com.mysql.sksksksks")
  if (idValue.equals("") || idValue.length() < 6 || idValue.length() > 10) {
    out.println("올바른 아이디를 입력해주세요");
  } else if (pwValue.equals("") || pwValue.length() < 8 || pwValue.length() > 10) {
    out.println("올바른 비밀번호를 입력해주세요");
  } else if (pwCheckValue.equals("") || !pwValue.equals(pwCheckValue)) {
    out.println("올바른 비밀번호를 입력해주세요");
  } else if (nameValue.equals("") || nameValue.length() < 2 || nameValue.length() > 10) {
    out.println("올바른 이름을 입력해주세요");
  } else if (emailValue.equals("") || emailValue.length() > 30 || !emailValue.matches(emailRegex)) {
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