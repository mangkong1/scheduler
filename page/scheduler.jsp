<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %> 
<%@ page import='java.sql.DriverManager' %>
<%@ page import='java.sql.Connection' %>
<%@ page import='java.sql.PreparedStatement' %>
<%@ page import='java.sql.ResultSet' %>
<%@ page import='java.util.ArrayList' %> 

<%
  String yearValue = request.getParameter("year");
  String monthValue = request.getParameter("month");
  out.println(yearValue);
  out.println(monthValue);

  // monthValue를 두 자리 숫자로 변환합니다.
  String formattedMonthValue = String.format("%02d", Integer.parseInt(monthValue));
  String datePattern = yearValue + "-" + formattedMonthValue + "%";

  Class.forName("com.mysql.jdbc.Driver");
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/calender","stageus","1234");

  String sql = "SELECT date FROM work WHERE date LIKE ?";
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, datePattern);

  ResultSet result = query.executeQuery();
  result.next();
  result.getString(1);

  ArrayList<String> list = new ArrayList<String>(); // 1차원 배열 선언
  while (result.next()) {
    String date = result.getString(1); // 여기서 date 값을 출력하거나 필요한 작업을 수행합니다.
    list.add("\"" + date + "\""); // 데이터를 1차원 배열에 추가
  }
%>

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
        <button class="header_btn" id="logout_btn" onClick="logout()">로그아웃</button>
        <button class="header_btn" id="mypage_btn" onClick="moveMypage()">마이페이지</button>
        <button class="header_btn" id="write_btn" onClick="setWrite()">글쓰기</button>
      </div>
    </header>
    
    <main>
      <section>
        <article id="calender_modify_container">
          <button id="prev_year_btn" onClick="setPrevYear()"></button>
          <button id="next_year_btn" onClick="setNextYear()"></button>
          <h3 id="year"></h3>
          <select id="month"></select>
        </article>

        <article id="calender_list"></article>
      </section>

      <section id="write_modal_section">
        <h1 id="write_modal_title">글쓰기</h1>

        <input class="input_box" id="date_box" type="text" placeholder="날짜 ex) 2024-03-03" onInput="setDate()"/>
        <input class="input_box" id="start_time_box" type="text" placeholder="시작시간 ex) 16:00" onInput="setStartTime()"/>
        <input class="input_box" id="end_time_box" type="text" placeholder="종료시간 ex) 17:00" onInput="setEndTime()"/>
        <textarea class="input_box_big" id="content_box" type="text" placeholder="일정 내용" onInput="setContent()"></textarea>
        
        <div id="write_modal_container">
          <input id="register_btn" type="submit" value="등록" onClick="registerWriteModal()"/> 
          <button id="close_btn" onClick="closeWriteModal()">취소</button>
        </div>
      </section>
    </main>
    <div id="back_container"></div>
    <script>
      const calenderList = document.querySelector("#calender_list"); // 반복문에서 옵션 만든 후 요소 선택
      const year = document.querySelector("#year");
      const month = document.querySelector("#month");
      const getDayContainer = document.querySelectorAll(".day");
      let selectYear = new Date().getFullYear();
      let selectMonth = new Date().getMonth() + 1;
      let selectDate = new Date().getDate();
      let list = <%= list %>;
      console.log(list);

      function setCalenderList(year, month) {
        calenderList.innerHTML = ""; // 초기화하지 않으면 날짜출력이 쌓임
        let day = 0;
        switch (
          month // 월에 따라 day를 다르게 하는 조건문
        ) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            day = 31;
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            day = 30;
            break;
          case 2:
            day = 28;
            break;
          default:
            break;
        }

        for (let i = 1; i <= day; i++) {
          const dayContainer = document.createElement("div");
          dayContainer.textContent = i;
          dayContainer.classList.add("day");
          let dayContainerYear = selectYear;
          let dayContainerMonth = ("0" + selectMonth).slice(-2);
          let dayContainerDay = ("0" + i).slice(-2);
          dayContainer.dataset.year = dayContainerYear;
          dayContainer.dataset.month = dayContainerMonth; // 클래스는 속성을 넣거나 특정작업 수행용, dataset은 동적 작업용
          dayContainer.dataset.day = dayContainerDay; // 클래스로 년,월,일을 했을 때 3월3일같은 경우 겹쳐버린다, 따라서 dataset사용
          calenderList.appendChild(dayContainer);

          const eventCountContainer = document.createElement("div");
          eventCountContainer.id = dayContainerYear + "-" + dayContainerMonth + "-" + dayContainerDay;
          for(let j = 0; j <= list.length; j++) {
            if (eventCountContainer.id === list[j]) {
              eventCountContainer.classList.add("event_count");
              eventCountContainer.textContent++;
              dayContainer.appendChild(eventCountContainer);
            }
          }

          dayContainer.addEventListener("click", () => {
            window.open("listup_popup.jsp?year=" + dayContainer.dataset.year + "&month=" + dayContainer.dataset.month + "&day=" + dayContainer.dataset.day, "", "width=600, height=700");
          }); 
        }
      }
    </script>
    <script src="../event/scheduler.js"></script>
    <script src="../event/write_modal.js"></script>
  </body>
</html>
