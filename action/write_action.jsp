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

  try {
    if (!idValue.matches("^.{6,10}$")) {
      throw new Exception("");
    }
    if (!idValue.matches("^.{6,10}$")) {}
    if (!idValue.matches("^.{6,10}$")) {}
    if (!idValue.matches("^.{6,10}$")) {}
    if (!idValue.matches("^.{6,10}$")) {}
  }
%>

<script>
  let a = '<%=startTimeValue%>';
  console.log(a);
</script>