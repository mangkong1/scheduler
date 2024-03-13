<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/write_modal.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="write_modal_section">
        <h1 id="write_modal_title">글쓰기</h1>

        <input class="input_box" id="date_box" type="text" placeholder="날짜 ex) 2024-03-03" />
        <input class="input_box" id="start_time_box" type="text" placeholder="시작시간 ex) 16:00" />
        <input class="input_box" id="end_time_box" type="text" placeholder="종료시간 ex) 17:00" />
        <input class="input_box_big" id="content_box" type="text" placeholder="일정 내용" />
        
        <div id="write_modal_container">
          <input id="register_btn" type="submit" value="등록" /> 
          <button id="close_btn">취소</button>
        </div>
      </section>
    </main>
    <%-- <script src='../event/write_register.js'></script> --%>
  </body>
</html>