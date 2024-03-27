<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
    String idx = (String) session.getAttribute("userIdx");
    
    try {
        Class.forName("com.mysql.jdbc.Driver");
        Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

        String sql = "DELETE FROM user WHERE idx = ?";
        PreparedStatement query = connect.prepareStatement(sql);
        query.setString(1, idx);

        // 쿼리 실행 및 삭제된 행의 수 가져오기
        int rowsAffected = query.executeUpdate();
        
        if (rowsAffected > 0) {
            session.invalidate(); // 세션 무효화
            out.println("<script>");
            out.println("alert('계정이 삭제되었습니다')");
            out.println("</script>");
            response.sendRedirect("../page/login.jsp");
        } else {
            out.println("<script>");
            out.println("alert('삭제 실패')");
            out.println("window.close()");
            out.println("</script>");
        }
    } catch (Exception e) {
        e.printStackTrace();
        out.println("<script>");
        out.println("alert('오류가 발생했습니다')");
        out.println("window.close()");
        out.println("</script>");
    }
%>
