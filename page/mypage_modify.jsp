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
        <input type="password" />
        <input type="password" />
        <input type="text" />
        <input type="text" />
        <select placeholder="부서">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        <select placeholder="직급">
          <option disabled>부서</option>
          <option>팀장</option>
          <option>팀원</option>
        </select>
        <input type="submit" value="등록" />
        <button>취소</button>
      </section>
    </main>
  </body>
</html>
