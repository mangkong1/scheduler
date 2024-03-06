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
        <h1>회원가입</h1>
        <input id="id_box" type="text" placeholder="아이디" />
        <input id="id_check" type="submit" value="중복확인" />
        <input id="pw_box" type="text" placeholder="비밀번호" />
        <input id="pw_check" type="text" placeholder="비밀번호 확인" />
        <span id="pw_usable" style="display:none">비밀번호가 일치합니다</span>
        <span id="pw_unusable" style="display:none">비밀번호가 일치하지 않습니다</span>
        <input id="name_box" type="text" placeholder="이름" />
        <input id="email_box" type="text" placeholder="이메일" />
        <input id="email_check" type="submit" value="중복확인" />
        <select id="part_select">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option selected disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        <select id="rank_select">
          <option selected disabled>직급</option>
          <option>팀장</option>
          <option>팀원</option>
        </select>
        <input id="signup_btn" type="submit" value="회원가입" />
      </section>
    </main>
    <script src="../event/signup.js"></script>
  </body>
</html>
