<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
  String idx = (String) session.getAttribute("userIdx");

  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "DELETE FROM user WHERE idx=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, idx);

  int rowsAffected = query.executeUpdate();
%>

<script>
  location.href="../page/login.jsp"
</script>