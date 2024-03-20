<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
  String idx = (String) session.getAttribute("userIdx");
  String pwValue = request.getParameter("pw_box");
  String pwCheckValue = request.getParameter("pw_check_box");
  String nameValue = request.getParameter("name_box");
  String emailValue = request.getParameter("email_box");
  String partValue = request.getParameter("part_select");
  String rankValue = request.getParameter("rank_select");

  try {
    if (!pwValue.matches("^.{8,10}$")) {
        throw new Exception("비밀번호는 8~10자 이어야 합니다");
    }
    if (pwValue.equals(pwCheckValue))   {
      throw new Exception("비밀번호가 일치하지 않습니다");
    }
    if (!nameValue.matches("^.{2,10}$")) {
      throw new Exception("이름은 2~10자 이어야 합니다");
    }
    if (partValue.equals("부서")) {
      throw new Exception("부서를 선택해주세요");
    }
    if (rankValue.equals("직급")) {
      throw new Exception("직급을 선택해주세요");
    }

    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "UPDATE user SET pw=?, name=?, email=?, part=?, rank=? WHERE idx=?";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, pwValue);
    query.setString(2, nameValue);
    query.setString(3, emailValue);
    query.setString(4, partValue);
    query.setString(5, rankValue);
    query.setString(6, idx);

    int rowsAffected = query.executeUpdate();

    if (rowsAffected > 0) {
      out.println("<script>");
      out.println("alert('회원정보 수정 성공!');");
      out.println("</script>");
      response.sendRedirect("../page/mypage.jsp");
    } else {
      out.println("<script>");
      out.println("alert('회원정보를 수정할 수 없습니다');");
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
