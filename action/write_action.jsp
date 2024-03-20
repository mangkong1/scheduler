<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
  String userIdx = (String) session.getAttribute("userIdx");
  String yearValue = request.getParameter("year");
  String monthValue = request.getParameter("month");
  String dayValue = request.getParameter("day");
  String startTimeValue = request.getParameter("start_time");
  String endTimeValue = request.getParameter("end_time");
  String contentValue = request.getParameter("content");
  String dateValue = yearValue + "-" + monthValue + "-" + dayValue;

  try {
    if (!yearValue.matches("\\d{4}") || !monthValue.matches("0[1-9]|1[0-2]") || !dayValue.matches("0[1-9]|[12]\\d|3[01]") || !dateValue.matches("\\d{4}-\\d{2}-\\d{2}")) {
      throw new Exception("날짜 형식이 올바르지 않습니다");
    }
    if (!startTimeValue.matches("^([01]\\d|2[0-3]):[0-5]\\d$")) {
      throw new Exception("시작 시간 형식이 올바르지 않습니다");
    }
    if (!endTimeValue.matches("^([01]\\d|2[0-3]):[0-5]\\d$")) {
      throw new Exception("종료 시간 형식이 올바르지 않습니다");
    }
    if (startTimeValue.compareTo(endTimeValue) >= 0) {
      throw new Exception("시작 시간이 종료 시간보다 빨라야 합니다");
    }
    if (contentValue.length() > 100) {
      throw new Exception("일정내용은 최대 100자 입니다");
    }

    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "INSERT INTO work (user_idx, date, start_time, end_time, content) VALUES (?, ?, ?, ?, ?)";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, userIdx);
    query.setString(2, dateValue);
    query.setString(3, startTimeValue);
    query.setString(4, endTimeValue);
    query.setString(5, contentValue);

    query.executeUpdate();
    response.sendRedirect("../page/scheduler.jsp?year=" + yearValue + "&month=" + monthValue);
  } catch (Exception e) {
    out.println("<script>");
    out.println("alert('" + e.getMessage() + "');");
    out.println("</script>");
  }
%>

<script>
  window.close();
</script>