<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/scheduler.css">
    <link rel="stylesheet" href="../style/global.css">
    <link rel="stylesheet" href="../style/write_modal.css">
    <title>Document</title>
  </head>
  <body>

    <header id="scheduler_header">
      <img id="logo_img" src="../img/calender_logo.png" alt="로고" />
      
      <div id="header_btn_container">
        <input class="header_btn" id="logout_btn" type="submit" value="로그아웃" />
        <button class="header_btn" id="mypage_btn">마이페이지</button>
        <button class="header_btn" id="write_btn">글쓰기</button>
      </div>
    </header>
    <main>
      <section>
        <article id="calender_modify_container">
          <button id="prev_year_btn"></button>
          <button id="next_year_btn"></button>
          <h3 id="year"></h3>
          <select id="month"></select>
        </article>

        <article id="calender_list"></article>
      </section>

      <section id="write_modal_section">
        <h1 id="write_modal_title">글쓰기</h1>

        <input class="input_box" id="date_box" type="text" placeholder="날짜 ex) 2024-03-03" />
        <input class="input_box" id="start_time_box" type="text" placeholder="시작시간 ex) 16:00" />
        <input class="input_box" id="end_time_box" type="text" placeholder="종료시간 ex) 17:00" />
        <textarea class="input_box_big" id="content_box" type="text" placeholder="일정 내용"></textarea>
        
        <div id="write_modal_container">
          <input id="register_btn" type="submit" value="등록" /> 
          <button id="close_btn">취소</button>
        </div>
      </section>


    </main>
    <script src="../event/scheduler.js"></script>
    <div id="back_container"></div>
  </body>
</html>
