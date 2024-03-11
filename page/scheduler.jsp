<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/scheduler.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section>
        <article>
          <img style="width:100px" src="../img/calender_logo.png" alt="로고" />
          <input type="submit" value="로그아웃" />
          <button id="mypage_btn">마이페이지</button>
          <button id="write_btn">글쓰기</button>
        </article>
        <article>
          <button id="prev_year_btn">이전연도</button>
          <button id="next_year_btn">다음연도</button>
          <h3 id="year"></h3>
          <select id="month"></select>
        </article>
        <article id="calender_list"></article>
      </section>
    </main>
    <script src="../event/scheduler.js"></script>
  </body>
</html>
