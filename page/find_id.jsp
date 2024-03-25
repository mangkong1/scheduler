<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/find_id.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="find_id_section">
        <h1 id="find_id_title">아이디 찾기</h1>
        
        <input class="input_box" id="name_box" type="text" placeholder="이름" onInput="checkName()"/>
        <input class="input_box" id="email_box" type="text" placeholder="이메일" onInput="checkEmail()"/>
        
        <input id="find_id_btn" type="submit" value="아이디 찾기" onClick="findId()"/>
      </section>
    </main>
    
    <script>
      let nameBox = document.querySelector("#name_box");
      let emailBox = document.querySelector("#email_box");
      let nameValue = nameBox.value;
      let emailValue = emailBox.value;
      nameCheck = false;
      emailCheck = false;

      function checkName() {
        if (nameValue === "") {
          nameBox.style.border = "";
          nameCheck = false;
        } else {
          nameBox.style.border = "3px solid var(--blue)";
          nameCheck = true;
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

      function findId() {
        try {
          if (nameCheck === false) {
              throw "이름을 입력해주세요";
          }
          if (emailCheck === false) {
            throw "이메일을 입력해주세요";
          }
          window.open("../action/find_id_action.jsp?name_box=" + nameValue + "&email_box=" + emailValue);
          location.href = "../page/login.jsp";
        } catch (e) {
          alert(e);
        }
      }
    </script>
  </body>
</html>
