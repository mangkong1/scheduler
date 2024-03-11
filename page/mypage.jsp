<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/mypage.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="mypage_section">
        <h1 id="mypage_title">마이페이지</h1>

        <table id="mypage_table">
          <tr>
            <td class="key_box">아이디</td>
            <td class="value_box" id="id_value">xogud5053</td>
          </tr>
          <tr>
            <td class="key_box">비밀번호</td>
            <td class="value_box" id="pw_value">1234</td>
          </tr>
          <tr>
            <td class="key_box">이름</td>
            <td class="value_box" id="name_value">김태형</td>
          </tr>
          <tr>
            <td class="key_box">이메일</td>
            <td class="value_box" id="email_value">xogud5053@gmail.com</td>
          </tr>
          <tr>
            <td class="key_box">부서</td>
            <td class="value_box" id="part_value">기획팀</td>
          </tr>
          <tr>
            <td class="key_box">직급</td>
            <td class="value_box" id="rank_value">팀장</td>
          </tr>
        </table>
        
        <div id="mypage_btn_container">
          <input id="mypage_modify_btn" type="submit" value="수정">
          <input id="delete_btn" type="submit" value="탈퇴">
        </div>
      </section>
    </main>
    <script src="../event/mypage.js"></script>
  </body>
</html>
