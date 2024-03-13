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

  switch ((year, month)) {
    case "1월":
    case "3월":
    case "5월":
    case "7월":
    case "8월":
    case "10월":
    case "12월":
      day = 31;
      break;
    case "4월":
    case "6월":
    case "9월":
    case "11월":
      day = 30;
      break;
    case "2월":
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
    dayContainer.dataset.month = selectMonth; // 클래스는 속성을 넣거나 특정작업 수행용, dataset은 동적 작업용
    dayContainer.dataset.date = i; // 클래스로 년,월,일을 했을 때 3월3일같은 경우 겹쳐버린다, 따라서 dataset사용

    if (
      // 현재 날짜 맞춰 테두리 표시
      selectYear === currentYear &&
      selectMonth === currentMonth &&
      i === currentDate
    ) {
      // dayContainer의 textContent는 문자열이므로 숫자로 변환
      dayContainer.style.border = "3px solid var(--blue)"; // 테두리 설정, 나중에 css 작업
    }

    calenderList.appendChild(dayContainer);
  }
}
// 현재연도에 맞춰 출력 후 연도 바꾸는 버튼 기능
yearElement.textContent = selectYear + "년";

document.querySelector("#prev_year_btn").addEventListener("click", () => {
  selectYear--;
  yearElement.textContent = selectYear + "년";
  setCalenderList(selectYear, monthElement.value);
  updateUrl();
});

document.querySelector("#next_year_btn").addEventListener("click", () => {
  selectYear++;
  yearElement.textContent = selectYear + "년";
  setCalenderList(selectYear, monthElement.value);
  updateUrl();
});

// 현재월에 맞춰 출력 후 선택하면서 바꾸는 선택창
for (let i = 1; i <= 12; i++) {
  const monthList = document.createElement("option");
  monthList.textContent = i + "월";
  monthElement.appendChild(monthList); // getMonth는 0부터 시작 0에는 1월, 1에는 2월 배정
}

monthElement.selectedIndex = selectMonth - 1; // selectedIndex는 select요소에서 현재 선택된 옵션의 인덱스 나타냄
setCalenderList(selectYear, monthElement.value);

monthElement.addEventListener("change", (e) => {
  setCalenderList(selectYear, e.target.value); // 이벤트가 발생한 요소의 현재값을 함수에 넣음
});

// URL에서 selectYear와 selectMonth 값을 가져와서 변수에 할당하는 함수
function initializeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search); // url을 가져옴
  selectYear = parseInt(urlParams.get("year")) || selectYear; // URL에 year 값이 없으면 기존 값 사용
  selectMonth = parseInt(urlParams.get("month")) || selectMonth; // URL에 month 값이 없으면 기존 값 사용
}

// yearElement와 monthElement의 변경 이벤트에 URL을 업데이트하는 함수
function updateUrl() {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("year", selectYear);
  currentUrl.searchParams.set("month", selectMonth);
  window.history.replaceState({}, "", currentUrl);
}

// 초기에 URL에서 값을 가져와 변수에 할당
initializeFromUrl();

// yearElement와 monthElement의 변경 이벤트에 updateUrl 함수 연결
yearElement.addEventListener("change", () => {
  selectYear = parseInt(yearElement.textContent);
  updateUrl();
});

monthElement.addEventListener("change", () => {
  selectMonth = parseInt(monthElement.value);
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
      location.href = `scheduler.jsp?year=${new Date().getFullYear()}&month=${
        new Date().getMonth() + 1
      }`;
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

console.log(parseInt(yearElement.textContent), parseInt(monthElement.value));
