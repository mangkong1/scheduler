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
        <input id="pw_box" type="password" />
        <input id="pw_check_box" type="password" />
        <input id="name_box" type="text" />
        <input id="email_box" type="text" />
        <select id="part_box">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        <select id="rank_box">
          <option disabled>직급</option>
          <option>팀장</option>
          <option>팀원</option>
        </select>
        <input id="register_btn" type="submit" value="등록" />
        <button>취소</button>
      </section>
    </main>
    <script src="../event/mypage_modify.js"></script>
  </body>
</html>
