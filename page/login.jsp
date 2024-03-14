<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/login.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <form action="../action/loginAction.jsp">
        <section id="login_section">
            <img id="logo_img" src="../img/calender_logo.png" alt="로고" />

            <input name="id_value" class="input_box" id="id_box" type="text" placeholder="아이디" />
            <input name="pw_value" class="input_box" id="pw_box" type="password" placeholder="비밀번호" />
            <input id="login_btn" type="submit" value="로그인" />
            
            <div id="move_find_container">
              <a class="move_find" id="move_find_id">아이디를 잊으셨나요?</a>
              <a class="move_find" id='move_find_pw'>비밀번호를 잊으셨나요?</a>
            </div>
            <hr>
            
            <button id='move_signup'>새 계정 만들기</button>
        </section>
      </form>
    </main>
    <script src="../event/login.js"></script>
  </body>
</html>
