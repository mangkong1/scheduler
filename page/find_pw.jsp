<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/find_pw.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="find_pw_section">
        <h1 id="find_pw_title">비밀번호 찾기</h1>
        
        <input class="input_box" id="id_box" type="text" placeholder="아이디" onInput="checkId()"/>
        <input class="input_box" id="email_box" type="text" placeholder="이메일" onInput="checkEmail()"/>
        
        <input id="find_pw_btn" type="submit" value="비밀번호 찾기" onClick="findPw()"/>
      </section>
    </main>
    
    <script>
      let idBox = document.querySelector("#id_box");
      let emailBox = document.querySelector("#email_box");
      let idValue = idBox.value;
      let emailValue = emailBox.value;
      idCheck = false;
      emailCheck = false;

      function checkId() {        
        if (idValue === "") {
          idBox.style.border = "";
          idCheck = false;
        } else {
          idBox.style.border = "3px solid var(--blue)";
          idCheck = true;
        }
      }

      function checkEmail() {
        if (emailValue === "") {
          emailBox.style.border = "";
          emailCheck = false;
        } else {
          emailBox.style.border = "3px solid var(--blue)";
          emailCheck = true;
        }
      }

      function findPw() {
          try {
          if (idCheck === false) {
            throw "이름을 입력해주세요";
          }
          if (emailCheck === false) {
            throw "이메일을 입력해주세요";
          }
          window.open("../action/find_pw_action.jsp?id_box=" + idValue + "&email_box=" + emailValue);
          location.href = "../page/login.jsp";
        } catch (e) {
          alert(e);
        }
      }  
    </script>
  </body>
</html>
