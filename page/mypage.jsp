<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <main>
      <section>
        <h1>마이페이지</h1>
        <table>
          <tr>
            <td>아이디</td>
            <td id="id_value">xogud5053</td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td id="pw_value">1234</td>
          </tr>
          <tr>
            <td>이름</td>
            <td id="name_value">김태형</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td id="email_value">xogud5053@gmail.com</td>
          </tr>
          <tr>
            <td>부서</td>
            <td id="part_value">기획팀</td>
          </tr>
          <tr>
            <td>직급</td>
            <td id="rank_value">팀장</td>
          </tr>
        </table>
        <input id="mypage_modify_btn" type="submit" value="수정">
        <input id="delete_btn" type="submit" value="탈퇴">
      </section>
    </main>
    <script src="../event/mypage.js"></script>
  </body>
</html>
