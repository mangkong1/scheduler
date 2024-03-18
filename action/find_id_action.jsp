<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>

<%
  String nameValue = request.getParameter("name_box");
  String emailValue = request.getParameter("email_box");

  try {
    if (nameValue.equals("")) {
      throw new Exception("이름을 입력해주세요");
    }
    if (emailValue.equals("")) {
      throw new Exception("이메일을 입력해주세요");
    }

    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "SELECT id FROM user WHERE name = ? AND email = ?";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, nameValue);
    query.setString(2, emailValue);

    ResultSet result = query.executeQuery();

    if (result.next()) {
      String userId = result.getString("id"); // 아이디 값 가져오기
      out.println("<script>");
      out.println("alert('사용자 아이디: " + userId + "');");
      out.println("</script>");
    } else {
      out.println("<script>");
      out.println("alert('사용자를 찾을 수 없습니다');");
      out.println("</script>");
    }
  } catch (Exception e) {
    out.println("<script>");
    out.println("alert('" + e.getMessage() + "');");
    out.println("</script>");
  }
%>

<script>
  window.close();
</script>