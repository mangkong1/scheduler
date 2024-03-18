<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %> 
<%@ page import='java.util.Calendar' %> 

<%
  String idValue = request.getParameter("id_box");
  String pwValue = request.getParameter("pw_box");

  try {
    if (idValue.equals("")) {
      throw new Exception("아이디를 입력해주세요");
    }
    if (pwValue.equals("")) {
      throw new Exception("비밀번호를 입력해주세요");
    }

    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "SELECT * FROM user WHERE id=? AND pw=?";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, idValue);
    query.setString(2, pwValue);

    ResultSet result = query.executeQuery();

    if (result.next()) {
      Calendar cal = Calendar.getInstance();
      int currentYear = cal.get(Calendar.YEAR);
      int currentMonth = cal.get(Calendar.MONTH) + 1;

      session.setAttribute("userIdx", result.getString("idx"));
      response.sendRedirect("../page/scheduler.jsp?year=" + currentYear + "&month=" + currentMonth);
    } else {
      out.println("<script>");
      out.println("alert('아이디 혹은 비밀번호가 틀렸습니다');");
      out.println("location.href='../page/login.jsp';");
      out.println("</script>");
    }
  } catch (Exception e) {
    out.println("<script>");
    out.println("alert('" + e.getMessage() + "');");
    out.println("location.href='../page/login.jsp';");
    out.println("</script>");
  }
%>

<%-- <script>
  let session = <%=userIdx%>;
  console.log(session);
</script> --%>