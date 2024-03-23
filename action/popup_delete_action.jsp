<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
  String workIdx = request.getParameter("work_idx");

  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "DELETE FROM work WHERE idx=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, workIdx);

  int rowsAffected = query.executeUpdate();
  if (rowsAffected > 0) {
    out.println("<script>");
    out.println("alert('일정이 삭제되었습니다');");
    out.println("window.close();");
    out.println("</script>");
  }
%>