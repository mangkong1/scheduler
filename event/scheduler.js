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
      dayContainer.style.border = "1px solid black"; // 테두리 설정, 나중에 css 작업
    }

    if (count > 0) {
      const countElement = document.createElement("div");
      countElement.textContent = count;
      countElement.classList.add("event_count");
      countElement.style.backgroundColor = "green";
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
document.querySelector("#write_btn").addEventListener("click", function () {
  let arr = [
    {
      date: "2024-03-03",
      start_time: "16:00",
      end_time: "17:00",
      content: "부산 출장 갖다오기",
    },
  ];

  fetch("write_modal.jsp") // fetch메서드로 서버 연결해 write_modal 가져옴
    .then((response) => response.text()) // 파일의 응답을 text로 변환
    .then((data) => {
      // 변환된 텍스트 데이터 처리
      const backContainer = document.createElement("div");
      backContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // 투명한 회색 배경
      backContainer.style.position = "absolute"; // 화면에 고정
      backContainer.style.top = "0";
      backContainer.style.left = "0";
      backContainer.style.width = "100%";
      backContainer.style.height = "100%";
      document.body.appendChild(backContainer);

      const modalContainer = document.createElement("div");
      modalContainer.innerHTML = data; // div태그 생성하고 자식요소에 데이터 넣음
      modalContainer.style.position = "absolute"; // 절대 위치
      modalContainer.style.top = "50%"; // 화면 세로 중앙
      modalContainer.style.left = "50%"; // 화면 가로 중앙
      modalContainer.style.transform = "translate(-50%, -50%)";
      modalContainer.style.backgroundColor = "white";
      document.body.appendChild(modalContainer); // 그 div태그를 body자식에 넣음

      modalContainer
        .querySelector("#close_btn")
        .addEventListener("click", () => {
          backContainer.remove();
          modalContainer.remove(); // write_modal 내부의 버튼에 이벤트 적용
        });

      modalContainer
        .querySelector("#register_btn")
        .addEventListener("click", () => {
          const dateValue = modalContainer.querySelector("#date_box").value;
          const startTimeValue =
            modalContainer.querySelector("#start_time_box").value;
          const endTimeValue =
            modalContainer.querySelector("#end_time_box").value;
          const contentValue =
            modalContainer.querySelector("#content_box").value;

          arr.push({
            date: dateValue,
            start_time: startTimeValue,
            end_time: endTimeValue,
            content: contentValue,
          });

          alert("데이터 추가!");
          console.log(arr);
        });
    });
});

document.querySelector("#mypage_btn").addEventListener("click", () => {
  location.href = "mypage.jsp";
});
