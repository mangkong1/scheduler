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
  String partValue = request.getParameter("part_select");
  String rankValue = request.getParameter("rank_select");

  try {
    if (!idValue.matches("^.{6,10}$")) {
      throw new Error("올바른 아이디를 입력해주세요");
    }
    if (!pwValue.matches("^.{8,10}$")) {
      throw new Error("올바른 비밀번호를 입력해주세요");
    }
    if (!pwValue.equals(pwCheckValue)) {
      throw new Error("올바른 비밀번호를 입력해주세요");
    }
    if (!nameValue.matches("^[a-zA-Z가-힣0-9]{2,10}$")) {
      throw new Error("올바른 이름을 입력해주세요");
    }
    if (!emailValue.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
      throw new Error("올바른 이메일을 입력해주세요");
    }
    if (partValue.equals("")) {
      throw new Error("올바른 부서를 선택해주세요");
    }
    if (rankValue.equals("")) {
      throw new Error("올바른 직급을 선택해주세요");
    }
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

    out.println("<script>");
    out.println("window.close();");
    out.println("</script>");
  } catch (e) {
    alert(e.message);
  }
%>