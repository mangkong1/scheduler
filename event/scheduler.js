// 현재연도에 맞춰 출력 후 연도 바꾸는 버튼 기능
const yearElement = document.querySelector("#year");
let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear + "년";

document.querySelector("#prev_year_btn").addEventListener("click", () => {
  currentYear--;
  yearElement.textContent = currentYear + "년";
});

document.querySelector("#next_year_btn").addEventListener("click", () => {
  currentYear++;
  yearElement.textContent = currentYear + "년";
});

// 현재월에 맞춰 출력 후 선택하면서 바꾸는 선택창
const monthElement = document.querySelector("#month");

for (let i = 1; i <= 12; i++) {
  const monthList = document.createElement("option");
  monthList.textContent = i + "월";
  monthElement.appendChild(monthList); // getMonth는 0부터 시작 0에는 1월, 1에는 2월 배정
}
monthElement.selectedIndex = new Date().getMonth(); // selectedIndex는 select요소에서 현재 선택된 옵션의 인덱스 나타냄

// 월 선택에 따라 일 출력 조절
const calenderList = document.querySelector("#calender_list");

function setCalenderList(month) {
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
    calenderList.appendChild(dayContainer);
  }
}

setCalenderList(monthElement.value);

monthElement.addEventListener("change", (e) => {
  setCalenderList(e.target.value); // 이벤트가 발생한 요소의 현재값을 함수에 넣음
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
