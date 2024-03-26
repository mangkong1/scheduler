<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>

<%
    // 세션에서 userIdx 값을 가져옴
    String idx = (String) session.getAttribute("userIdx");
    
    try {
        // MySQL 데이터베이스 연결
        Class.forName("com.mysql.jdbc.Driver");
        Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

        // 사용자 테이블에서 해당 idx 값을 가진 사용자 삭제 쿼리 작성
        String sql = "DELETE FROM user WHERE idx = ?";
        PreparedStatement query = connect.prepareStatement(sql);
        query.setString(1, idx);

        // 쿼리 실행 및 삭제된 행의 수 가져오기
        int rowsAffected = query.executeUpdate();
        
        // 삭제가 성공한 경우
        if (rowsAffected > 0) {
            // 세션 무효화
            session.invalidate();
            // 로그인 페이지로 리다이렉트
            response.sendRedirect("../page/login.jsp");
        } else {
            // 삭제 실패 시 알림 표시
            out.println("<script>");
            out.println("alert('삭제 실패')");
            out.println("window.close()");
            out.println("</script>");
        }
    } catch (Exception e) {
        // 예외 처리
        e.printStackTrace();
        out.println("<script>");
        out.println("alert('오류가 발생했습니다')");
        out.println("window.close()");
        out.println("</script>");
    }
%>
