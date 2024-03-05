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
        <input type="text" placeholder="아이디" />
        <input type="submit" value="중복확인" />
        <input type="text" placeholder="비밀번호" />
        <input type="text" placeholder="비밀번호 확인" />
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="이메일" />
        <input type="submit" value="중복확인" />
        <select placeholder="부서">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        <select>
          <option disabled>직급</option>
          <option>팀장</option>
          <option>팀원</option>
        </select>
        <input type="submit" value="회원가입" />
      </section>
    </main>
  </body>
</html>
