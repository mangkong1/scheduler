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
        <h1>글쓰기</h1>
        <input id="date_box" type="text" placeholder="날짜 ex) 2024-03-03" />
        <input id="start_time_box" type="text" placeholder="시작시간 ex) 16:00" />
        <input id="end_time_box" type="text" placeholder="종료시간 ex) 17:00" />
        <input id="content_box" type="text" placeholder="일정 내용" />
        <input id="register_btn" type="submit" value="등록" />
        <button id="close_btn">취소</button>
      </section>
    </main>
    <%-- <script src='../event/write_register.js'></script> --%>
  </body>
</html>