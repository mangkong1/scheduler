<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>

<%
  String idValue = request.getParameter("id_box");
  String emailValue = request.getParameter("email_box");

  try {
    if (idValue.equals("")) {
      throw new Exception("이름을 입력해주세요");
    }
    if (emailValue.equals("")) {
      throw new Exception("이메일을 입력해주세요");
    }

    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "SELECT pw FROM user WHERE id = ? AND email = ?";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, idValue);
    query.setString(2, emailValue);

    ResultSet result = query.executeQuery();

    if (result.next()) {
      String userPw = result.getString("pw"); // 비번 값 가져오기
      out.println("<script>");
      out.println("alert('사용자 비밀번호: " + userPw + "');");
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