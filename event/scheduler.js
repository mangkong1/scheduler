document.querySelector("#write_btn").addEventListener("click", () => {
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
