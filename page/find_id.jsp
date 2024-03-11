<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/find_id.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="find_id_section">
        <h1 id="find_id_title">아이디 찾기</h1>
        <input class="input_box" id="name_box" type="text" placeholder="이름" />
        <input class="input_box" id="email_box" type="text" placeholder="이메일" />
        <input id="find_id_btn" type="submit" value="아이디 찾기" />
      </section>
    </main>
    <script src="../event/find_id.js"></script>
  </body>
</html>
