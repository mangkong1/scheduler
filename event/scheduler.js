const arr = [
  {
    id: "xogud1111",
    name: "김태형",
    year: 2024,
    month: "3월",
    date: 10,
    start_time: "10:00",
    end_time: "13:00",
    content: "광주 출장",
  },
  {
    id: "xogud1111",
    name: "김태형",
    year: 2024,
    month: "3월",
    date: 11,
    start_time: "10:00",
    end_time: "13:00",
    content: "광주 출장",
  },
  {
    id: "xogud1111",
    name: "김태형",
    year: 2024,
    month: "3월",
    date: 15,
    start_time: "10:00",
    end_time: "13:00",
    content: "광주 출장",
  },
];

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

  switch (month) {
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
    dayContainer.dataset.year = year;
    dayContainer.dataset.month = month; // 클래스는 속성을 넣거나 특정작업 수행용, dataset은 동적 작업용
    dayContainer.dataset.date = i; // 클래스로 년,월,일을 했을 때 3월3일같은 경우 겹쳐버린다, 따라서 dataset사용

    const filteredArr = arr.filter(
      (item) => item.year === year && item.month === month && item.date === i
    );
    const count = filteredArr.length;

    if (
      // 현재 날짜 맞춰 테두리 표시
      parseInt(year) === currentYear &&
      parseInt(month) === currentMonth &&
      i === currentDate
    ) {
      // dayContainer의 textContent는 문자열이므로 숫자로 변환
      dayContainer.style.border = "3px solid var(--blue)"; // 테두리 설정, 나중에 css 작업
    }

    if (count > 0) {
      const countElement = document.createElement("div");
      countElement.textContent = count;
      countElement.classList.add("event_count");
      dayContainer.appendChild(countElement);
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
});

document.querySelector("#next_year_btn").addEventListener("click", () => {
  selectYear++;
  yearElement.textContent = selectYear + "년";
  setCalenderList(selectYear, monthElement.value);
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

// 글쓰기 모달창 띄우기
document.querySelector("#write_btn").addEventListener("click", () => {
  const backContainer = document.createElement("div");
  backContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // 투명한 회색 배경
  backContainer.style.position = "absolute"; // 화면에 고정
  backContainer.style.top = "0";
  backContainer.style.left = "0";
  backContainer.style.width = "100%";
  backContainer.style.height = "100%";
  document.body.appendChild(backContainer);

  const writeModal = document.querySelector("#write_modal_section");
  writeModal.style.display = "flex";

  const closeBtn = document.querySelector("#close_btn");
  closeBtn.addEventListener("click", () => {
    backContainer.remove();
    writeModal.style.display = "none";
    const inputElement = writeModal.querySelectorAll(
      ".input_box, .input_box_big"
    );
    inputElement.forEach((input) => {
      input.value = ""; // 입력 요소의 값 초기화
    });
  });
});

document.querySelector("#mypage_btn").addEventListener("click", () => {
  location.href = "mypage.jsp";
});

document.querySelector("#logout_btn").addEventListener("click", () => {
  location.href = "login.jsp";
});
