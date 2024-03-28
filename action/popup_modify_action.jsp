<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
  String workIdx = request.getParameter("work_idx");
  String startTimeValue = request.getParameter("start_time");
  String endTimeValue = request.getParameter("end_time");
  String contentValue = request.getParameter("content");

  try {
    if (!startTimeValue.matches("([0-1][0-9]|2[0-3]):([0-5][0-9])")) {
      throw new Exception("올바른 시작시간을 입력해주세요");
    }
    if (!endTimeValue.matches("([0-1][0-9]|2[0-3]):([0-5][0-9])")) {
      throw new Exception("올바른 종료시간을 입력해주세요");
    }
    if (startTimeValue.compareTo(endTimeValue) >= 0) {
      throw new Exception("시간 순서가 올바르지 않습니다");
    }
    if (contentValue.length() > 100) {
      throw new Exception("일정 내용은 100자 이하로 작성해주세요");
    }
    Class.forName("com.mysql.jdbc.Driver");
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

    String sql = "UPDATE work SET start_time=?, end_time=?, content=? WHERE idx=?";
    PreparedStatement query = connect.prepareStatement(sql);

    query.setString(1, startTimeValue);
    query.setString(2, endTimeValue);
    query.setString(3, contentValue);
    query.setString(4, workIdx);

    int rowsAffected = query.executeUpdate();

    if (rowsAffected > 0) {
      out.println("<script>");
      out.println("alert('일정 수정 성공!');");
      out.println("window.close()");
      out.println("</script>");
    } else {
      out.println("<script>");
      out.println("alert('회원정보를 수정할 수 없습니다');");
      out.println("window.close()");
      out.println("</script>");
    }
  } catch (Exception e) {
    out.println("<script>");
    out.println("alert('" + e.getMessage() + "');");
    out.println("</script>");
  }
%>