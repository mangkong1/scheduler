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
        <section id="login_section">
          <img id="logo_img" src="../img/calender_logo.png" alt="로고" />

          <input class="input_box" id="id_box" type="text" placeholder="아이디" />
          <input class="input_box" id="pw_box" type="password" placeholder="비밀번호" />
          <button id="login_btn" onClick="login()" />로그인</button> 
          <%-- 위와같이 타입을 바꿔 해결 --%>
          
          <div id="move_find_container">
            <a class="move_find" id="move_find_id" onClick="moveFindId()">아이디를 잊으셨나요?</a>
            <a class="move_find" id='move_find_pw' onClick="moveFindPw()">비밀번호를 잊으셨나요?</a>
          </div>
          <hr>
            
          <button id="move_signup" onClick="moveSignup()">새 계정 만들기</button>
        </section>
    </main>
    
    <script>
      // 만약 전역변수로 선언한다면 html이 처음 실행될 때 값이 지정되므로
      // 빈 값으로 나온다 (console.log하면 금방 알 수 있었음!)
      function login() {
        let idValue = document.querySelector("#id_box").value;
        let pwValue = document.querySelector("#pw_box").value;

        // 프론트엔드 예외처리, 빈칸일 때 alert
        if (idValue === "") {
          alert("아이디를 입력해 주세요");
        } else if (pwValue === "") {
          alert("비밀번호를 입력해 주세요");
        } else {
          window.open("../action/login_action.jsp?id_box=" + idValue + "&pw_box=" + pwValue, "_self");
        }
      };

      function moveFindId() {
        location.href = "find_id.jsp";
      };

      function moveFindPw() {
        location.href = "find_pw.jsp";
      };

      function moveSignup() {
        location.href = "signup.jsp";
      };
    </script>
  </body>
</html>
