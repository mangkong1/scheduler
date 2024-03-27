function setPrevYear() {
  selectYear--;
  year.textContent = selectYear + "년";
  history.pushState(null, "", `scheduler.jsp?year=${selectYear}&month=${selectMonth}`);
  today();
  setCalenderList(selectYear, selectMonth); // 연도가 변경되면 해당 연도에 맞는 캘린더 리스트를 렌더링
}

function setNextYear() {
  selectYear++;
  year.textContent = selectYear + "년";
  history.pushState(null, "", `scheduler.jsp?year=${selectYear}&month=${selectMonth}`);
  today();
  setCalenderList(selectYear, selectMonth); // 연도가 변경되면 해당 연도에 맞는 캘린더 리스트를 렌더링
}

function setMonth() {
  for (let i = 1; i <= 12; i++) {
    const monthList = document.createElement("option");
    monthList.textContent = i + "월";
    month.appendChild(monthList); // getMonth는 0부터 시작 0에는 1월, 1에는 2월 배정
  }

  month.selectedIndex = selectMonth - 1; // selectedIndex는 select요소에서 현재 선택된 옵션의 인덱스 나타냄
  setCalenderList(selectYear, selectMonth); // 첫화면에 3월이 뜨도록 하는 기능

  month.addEventListener("change", (e) => {
    selectMonth = parseInt(e.target.value);
    setCalenderList(selectYear, selectMonth); // 이벤트가 발생한 요소의 현재값을 함수에 넣음
    history.pushState(null, "", `scheduler.jsp?year=${selectYear}&month=${selectMonth}`);
    today();
  });
}

function today() {
  // 현재 날짜에 해당하는 요소에 테두리 표시
  const currentYear = String(new Date().getFullYear());
  const currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const currentDate = String(new Date().getDate());

  document.querySelectorAll(".day").forEach((e) => {
    if (e.dataset.year === currentYear && e.dataset.month === currentMonth && e.dataset.day === currentDate) {
      e.style.border = "3px solid var(--blue)";
    }
  });
}

function logout() {
  location.href = "login.jsp";
}

function moveMypage() {
  location.href = "mypage.jsp";
}

window.onload = () => {
  year.textContent = selectYear + "년";
  setMonth();
  setCalenderList(selectYear, selectMonth);
  today();
};
