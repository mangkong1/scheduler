const calenderList = document.querySelector("#calender_list"); // 반복문에서 옵션 만든 후 요소 선택
const yearElement = document.querySelector("#year");
const monthElement = document.querySelector("#month");
const getDayContainer = document.querySelectorAll(".day");
let selectYear = new Date().getFullYear();
let selectMonth = new Date().getMonth() + 1;
let selectDate = new Date().getDate();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; // 갯수가 정해진 배열로 생성하므로 const도 상관없음
const currentDate = new Date().getDate();

// 연,월 선택에 따라 일 출력 조절
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
    dayContainer.dataset.year = selectYear;
    dayContainer.dataset.month = parseInt(monthElement.value); // 클래스는 속성을 넣거나 특정작업 수행용, dataset은 동적 작업용
    dayContainer.dataset.date = i; // 클래스로 년,월,일을 했을 때 3월3일같은 경우 겹쳐버린다, 따라서 dataset사용

    calenderList.appendChild(dayContainer);

    dayContainer.addEventListener("click", () => {
      window.open(`listup_popup.jsp?year=${selectYear}&month=${parseInt(monthElement.value)}&day=${i}`, "", "width=600, height=700");
    });
  }
  today();
}

function today() {
  // 현재 날짜에 해당하는 요소에 테두리 표시
  const day = document.querySelectorAll(".day");
  day.forEach((e) => {
    const year = parseInt(e.dataset.year);
    const month = parseInt(e.dataset.month);
    const date = parseInt(e.dataset.date);

    if (year === currentYear && month === currentMonth && date === currentDate) {
      e.style.border = "3px solid var(--blue)";
    }
  });
}

function updateUrl() {
  const year = selectYear;
  const month = parseInt(monthElement.value);
  history.pushState(null, "", `scheduler.jsp?year=${year}&month=${month}`);
}

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const year = parseInt(urlParams.get("year"));
  const month = parseInt(urlParams.get("month"));

  // 연도와 월에 따라 페이지 업데이트
  yearElement.textContent = year + "년";
  monthElement.selectedIndex = month - 1;
  setCalenderList(year, month);
});

// 현재연도에 맞춰 출력 후 연도 바꾸는 버튼 기능
yearElement.textContent = selectYear + "년";

document.querySelector("#prev_year_btn").addEventListener("click", () => {
  selectYear--;
  yearElement.textContent = selectYear + "년";
  setCalenderList(selectYear, parseInt(monthElement.value));
  updateUrl();
});

document.querySelector("#next_year_btn").addEventListener("click", () => {
  selectYear++;
  yearElement.textContent = selectYear + "년";
  setCalenderList(selectYear, parseInt(monthElement.value));
  updateUrl();
});

// 현재월에 맞춰 출력 후 선택하면서 바꾸는 선택창
for (let i = 1; i <= 12; i++) {
  const monthList = document.createElement("option");
  monthList.textContent = i + "월";
  monthElement.appendChild(monthList); // getMonth는 0부터 시작 0에는 1월, 1에는 2월 배정
}

monthElement.selectedIndex = selectMonth - 1; // selectedIndex는 select요소에서 현재 선택된 옵션의 인덱스 나타냄
setCalenderList(selectYear, selectMonth); // 첫화면에 3월이 뜨도록 하는 기능

monthElement.addEventListener("change", (e) => {
  setCalenderList(selectYear, parseInt(e.target.value)); // 이벤트가 발생한 요소의 현재값을 함수에 넣음
  updateUrl();
});

// 글쓰기 모달창 띄우기
document.querySelector("#write_btn").addEventListener("click", () => {
  const backContainer = document.querySelector("#back_container");
  backContainer.style.display = "flex";

  const writeModal = document.querySelector("#write_modal_section");
  writeModal.style.display = "flex";

  const dateBox = document.querySelector("#date_box");
  const startTimeBox = document.querySelector("#start_time_box");
  const endTimeBox = document.querySelector("#end_time_box");
  const contentBox = document.querySelector("#content_box");
  const dateRegex = /\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/;
  const timeRegex = /([0-1][0-9]|2[0-3]):([0-5][0-9])/;
  const registerBtn = document.querySelector("#register_btn");

  let dateCheck = false;
  let startTimeCheck = false;
  let endTimeCheck = false;
  let contentCheck = false;

  dateBox.addEventListener("input", () => {
    if (dateBox.value === "") {
      dateBox.style.border = "";
      dateCheck = false;
    } else if (!dateRegex.test(dateBox.value)) {
      dateBox.style.border = "3px solid var(--red)";
      dateCheck = false;
    } else {
      dateBox.style.border = "3px solid var(--blue)";
      dateCheck = true;
    }
  });

  startTimeBox.addEventListener("input", () => {
    if (startTimeBox.value === "") {
      startTimeBox.style.border = "";
      startTimeCheck = false;
    } else if (!timeRegex.test(startTimeBox.value)) {
      startTimeBox.style.border = "3px solid var(--red)";
      startTimeCheck = false;
    } else {
      startTimeBox.style.border = "3px solid var(--blue)";
      startTimeCheck = true;
    }
  });

  endTimeBox.addEventListener("input", () => {
    if (endTimeBox.value === "") {
      endTimeBox.style.border = "";
      endTimeCheck = false;
    } else if (!timeRegex.test(endTimeBox.value)) {
      endTimeBox.style.border = "3px solid var(--red)";
      endTimeCheck = false;
    } else if (endTimeBox.value < startTimeBox.value) {
      endTimeBox.style.border = "3px solid var(--red)";
      endTimeCheck = false;
    } else {
      endTimeBox.style.border = "3px solid var(--blue)";
      endTimeCheck = true;
    }
  });

  contentBox.addEventListener("input", () => {
    if (contentBox.value === "") {
      contentBox.style.border = "";
      contentCheck = false;
    } else if (contentBox.value.length > 100) {
      contentBox.style.border = "3px solid var(--red)";
      contentCheck = false;
    } else {
      contentBox.style.border = "3px solid var(--blue)";
      contentCheck = true;
    }
  });

  registerBtn.addEventListener("click", () => {
    if (dateCheck === false) {
      alert("올바른 날짜를 입력해주세요");
    } else if (startTimeCheck === false) {
      alert("올바른 시작시간을 입력해주세요");
    } else if (endTimeCheck === false) {
      alert("올바른 종료시간을 입력해주세요");
    } else if (contentCheck === false) {
      alert("올바른 일정 내용을 입력해주세요");
    } else {
      location.href = `scheduler.jsp?year=${currentYear}&month=${currentMonth}`;
    }
  });

  const closeBtn = document.querySelector("#close_btn");
  closeBtn.addEventListener("click", () => {
    backContainer.style.display = "none";
    writeModal.style.display = "none";
    writeModal.querySelectorAll(".input_box, .input_box_big").forEach((e) => {
      e.value = "";
      e.style = ""; // 입력 요소의 값과 스타일 초기화
    });
  });
});

document.querySelector("#mypage_btn").addEventListener("click", () => {
  location.href = "mypage.jsp";
});

document.querySelector("#logout_btn").addEventListener("click", () => {
  location.href = "login.jsp";
});
