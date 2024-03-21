<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>

<%
  String yearValue = request.getParameter("year");
  String monthValue = request.getParameter("month");
  String dayValue = request.getParameter("day");
  String dateValue = String.format("%04d-%02d-%02d", Integer.parseInt(yearValue), Integer.parseInt(monthValue), Integer.parseInt(dayValue));
  
  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "SELECT * FROM work WHERE date=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, dateValue);

  ResultSet result = query.executeQuery(); // 준비한 sql쿼리 실행
  if (result.next()) {
    out.println("<script>");
    out.println("alert('있음')");
    out.println("</script>");
  } else {
    out.println("<script>");
    out.println("alert('없음')");
    out.println("</script>");
  }
%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/listup_popup.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="listup">
      </section>
    </main>
    <script src="../event/listup_popup.js"></script>
  </body>
</html>

<script>
  let a = '<%=dateValue%>';
  console.log(a);
</script>

