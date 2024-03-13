<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/mypage_modify.css">
    <link rel="stylesheet" href="../style/global.css">
    <title>Document</title>
  </head>
  <body>
    <main>
      <section id="mypage_modify_section">
        <h1 id="mypage_modify_title">마이페이지</h1>

        <div>
          <input class="input_pw_box" id="pw_box" type="password" placeholder="비밀번호" />
          <span class="constraint_message">비밀번호는 8~10자로 입력해주세요</span>
        </div>

        <div>
          <input class="input_pw_box" id="pw_check_box" type="password" placeholder="비밀번호 확인" />
          <span class="constraint_message" id="pw_usable">비밀번호가 일치합니다</span>
          <span class="constraint_message" id="pw_unusable">비밀번호가 일치하지 않습니다</span>
        </div>        

        <div>
          <input class="input_box" id="name_box" type="text" placeholder="이름" />
          <span class="constraint_message">이름은 2~10자로 입력해주세요</span>
        </div>

        <div class="check_container">
          <input class="input_box_small" id="email_box" type="text" placeholder="이메일" />
          <input class="check_btn" id="email_check_btn" type="submit" value="중복확인" />
        </div>
        
        <select class="select_box" id="part_select">
          <%-- selected disabled hidden에서 필요한 속성만 꺼냄 --%>
          <option disabled>부서</option>
          <option>기획팀</option>
          <option>디자인팀</option>
        </select>
        
        <select class="select_box" id="rank_select">
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
