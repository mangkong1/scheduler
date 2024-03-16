<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/signup.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="signup_section"> 
        <h1 id="signup_title">회원가입</h1>
        <form id="signup_form" action="../action/signup_action.jsp">
          <div>
            <div class="check_container">
              <input name="id_box" class="input_box_small" id="id_box" type="text" placeholder="아이디" />
              <input class="check_btn" id="id_check_btn" type="button" value="중복확인" />
            </div>
            <span class="constraint_message">아이디는 6~10자로 입력해주세요</span>
          </div>

          <div>
            <input name="pw_box" class="input_pw_box" id="pw_box" type="text" placeholder="비밀번호" />
            <span class="constraint_message">비밀번호는 8~10자로 입력해주세요</span>
          </div>

          <div>
            <input name="pw_check_box" class="input_pw_box" id="pw_check_box" type="text" placeholder="비밀번호 확인" />
            <span class="constraint_message" id="pw_usable">비밀번호가 일치합니다</span>
            <span class="constraint_message" id="pw_unusable">비밀번호가 일치하지 않습니다</span>
          </div>

          <div>
            <input name="name_box" class="input_box" id="name_box" type="text" placeholder="이름" />
            <span class="constraint_message">이름은 2~10자로 입력해주세요</span>
          </div>

          <div class="check_container">
            <input name="email_box" class="input_box_small" id="email_box" type="text" placeholder="이메일" />
            <input class="check_btn" id="email_check_btn" type="button" value="중복확인" />
          </div>

          <select name="part_box" class="select_box" id="part_select">
            <option value="" selected>부서</option>
            <option value="기획팀">기획팀</option>
            <option value="디자인팀">디자인팀</option>
          </select>

          <select name="rank_box" class="select_box" id="rank_select">
            <option value="" selected>직급</option>
            <option value="팀장">팀장</option>
            <option value="팀원">팀원</option>
          </select>
          
          <input id="signup_btn" type="button" value="회원가입" />
        </form>
      </section>
    </main>
    <script src="../event/signup.js"></script>
  </body>
</html>
