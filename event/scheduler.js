document.querySelector("#write_btn").addEventListener("click", () => {
  fetch("write_modal.jsp") // fetch메서드로 서버 연결해 write_modal 가져옴
    .then((response) => response.text()) // 파일의 응답을 text로 변환
    .then((data) => {
      // 변환된 텍스트 데이터 처리
      const BackContainer = document.createElement("div");
      BackContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // 투명한 회색 배경
      BackContainer.style.position = "fixed"; // 화면에 고정
      BackContainer.style.top = "0";
      BackContainer.style.left = "0";
      BackContainer.style.width = "100%";
      BackContainer.style.height = "100%";
      document.body.appendChild(BackContainer);

      const ModalContainer = document.createElement("div");
      ModalContainer.innerHTML = data; // div태그 생성하고 자식요소에 데이터 넣음
      ModalContainer.style.position = "absolute"; // 절대 위치
      ModalContainer.style.top = "50%"; // 화면 세로 중앙
      ModalContainer.style.left = "50%"; // 화면 가로 중앙
      ModalContainer.style.transform = "translate(-50%, -50%)";
      ModalContainer.style.backgroundColor = "white";
      document.body.appendChild(ModalContainer); // 그 div태그를 body자식에 넣음

      ModalContainer.querySelector("#close_btn").addEventListener(
        "click",
        () => {
          BackContainer.remove();
          ModalContainer.remove(); // write_modal 내부의 버튼에 이벤트 적용
        }
      );
    });
});
