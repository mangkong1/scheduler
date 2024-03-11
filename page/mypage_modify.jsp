<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/mypage_modify.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="mypage_modify_section">
        <h1 id="mypage_modify_title">마이페이지</h1>
        <input class="input_box" id="pw_box" type="password" />
        <input class="input_box" id="pw_check_box" type="password" />
        <span id="pw_usable" style="display:none">비밀번호가 일치합니다</span>
        <span id="pw_unusable" style="display:none">비밀번호가 일치하지 않습니다</span>
        <input class="input_box" id="name_box" type="text" />
        <input class="input_box" id="email_box" type="text" />
        <select class="select_box" id="part_box">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        <select class="select_box" id="rank_box">
          <option disabled>직급</option>
          <option>팀장</option>
          <option>팀원</option>
        </select>
        <div id="mypage_btn_container">
          <input id="register_btn" type="submit" value="등록" />
          <button id="cancel_btn">취소</button>
        </div>
      </section>
    </main>
    <script src="../event/mypage_modify.js"></script>
  </body>
</html>
