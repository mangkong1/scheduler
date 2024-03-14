<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %> 
<%@ page import='java.util.ArrayList' %> 

<%
  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String idValue = request.getParameter("id_value");
  String pwValue = request.getParameter("pw_value");

  String sql = "SELECT * FROM user WHERE id=? AND pw=?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, idValue);
  query.setString(2, pwValue);

  ResultSet result = query.executeQuery();
  result.next();
  result.getString(1);
  result.getString(2);
  result.getString(3);
  result.getString(4);
  result.getString(5);
  result.getString(6);

  ArrayList<ArrayList<String>> list = new ArrayList<ArrayList<String>>();

  while(result.next()){
  ArrayList<String> data = new ArrayList<String>();
  String id = result.getString(1);
  String pw = result.getString(2);
  String name = result.getString(3);
  String email = result.getString(4);
  String part = result.getString(5);
  String rank = result.getString(6);

  data.add("\"" + id + "\""); // 여기에서 string처리 하지 않으면 날데이터로 바뀌어서 날아감, 읽을 수 없어짐 , 강제적으로 큰따옴표 붙여줌
  data.add("\"" + pw + "\""); // 여기 잘 기억하기!
  data.add("\"" + name + "\""); 
  data.add("\"" + email + "\"");
  data.add("\"" + part + "\""); 
  data.add("\"" + rank + "\"");
  list.add(data);
  }
%>

<script>
  // location="../page/scheduler.jsp"

  var list = <%=list%> //이건 익숙한 js list이다
  console.log(list) // list변수로 따로 지정해서 console.log 사용해줌
</script>