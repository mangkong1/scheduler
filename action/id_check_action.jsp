<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>

<%
  String idValue = request.getParameter("id_box");

  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "SELECT * FROM user WHERE id = ?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, idValue);

  ResultSet result = query.executeQuery(); // 준비한 sql쿼리 실행

  boolean isIdDuplicate = false;

  if (result.next()) {
    isIdDuplicate = true;
  }

  out.println("<script>");
  out.println("if(window.opener) {");
  out.println("  window.opener.postMessage({ isIdDuplicate: " + isIdDuplicate + " }, '*');");
  out.println("}");
  out.println("window.close();"); // 창 닫기
  out.println("</script>");
%>

<script>
  window.close();
</script>