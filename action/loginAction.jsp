<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %> 
<%@ page import='java.util.ArrayList' %>
<%@ page import='java.util.Calendar' %> 

<%
  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String idValue = request.getParameter("id_value");
  String pwValue = request.getParameter("pw_value");

  // 예외처리, 프론트와 백 예외처리는 성질이 다름 (수정할수있다는 약점)
  if (idValue.equals("")) {
    out.println("아이디를 입력해주세요");
  } else if (pwValue.equals("")) {
    out.println("비밀번호를 입력해주세요");
  } else {
    String sql = "SELECT * FROM user WHERE id=? AND pw=?";
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, idValue);
    query.setString(2, pwValue);

    ResultSet result = query.executeQuery();

    if (!result.next()) {
      out.println("로그인 실패!");
    } else {
    ArrayList<ArrayList<String>> list = new ArrayList<ArrayList<String>>();
    ArrayList<String> data = new ArrayList<String>();
    String id = result.getString(2);
    String pw = result.getString(3);
    String name = result.getString(4);
    String email = result.getString(5);
    String part = result.getString(6);
    String rank = result.getString(7);

    data.add("\"" + pw + "\""); // 여기 잘 기억하기!
    data.add("\"" + id + "\""); // 여기에서 string처리 하지 않으면 날데이터로 바뀌어서 날아감, 읽을 수 없어짐 , 강제적으로 큰따옴표 붙여줌
    data.add("\"" + name + "\""); 
    data.add("\"" + email + "\"");
    data.add("\"" + part + "\""); 
    data.add("\"" + rank + "\"");
    list.add(data);

    Calendar cal = Calendar.getInstance();
    int currentYear = cal.get(Calendar.YEAR);
    int currentMonth = cal.get(Calendar.MONTH) + 1;
            
    response.sendRedirect("../page/scheduler.jsp?year=" + currentYear + "&month=" + currentMonth);
    }
  }
%>