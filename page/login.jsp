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
        <img style="width:100px" src="../img/calender_logo.png" alt="로고" />
        <input id="id_box" type="text" placeholder="아이디" />
        <input id="pw_box" type="password" placeholder="비밀번호" />
        <input id="move_scheduler" type="submit" value="로그인" />
        <a id='move_find_id'>아이디를 잊으셨나요?</a>
        <a id='move_find_pw'>비밀번호를 잊으셨나요?</a>
        <hr>
        <button id='move_signup'>새 계정 만들기</button>
      </section>
    </main>
    <script src="../event/login.js"></script>
  </body>
</html>
