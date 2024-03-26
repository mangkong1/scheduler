<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>

<%
  String emailValue = request.getParameter("email_box");

  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "SELECT * FROM user WHERE email = ?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, emailValue);

  ResultSet result = query.executeQuery(); // 준비한 sql쿼리 실행

  boolean isEmailDuplicate = false;

  if (result.next()) {
    isEmailDuplicate = true;
  }

  out.println("<script>");
  out.println("alert('이메일을 사용가능합니다')");
  out.println("window.close();"); // 창 닫기
  out.println("</script>");
%>