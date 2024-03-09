const arr = [
  {
    name: "김태형",
    id: "xogud1111",
    start_time: "15:00",
    end_time: "16:00",
    content: "부산 출장",
  },
  {
    name: "김태준",
    id: "xogud2222",
    start_time: "12:00",
    end_time: "13:00",
    content: "월별 보고서 제출",
  },
  {
    name: "김태욱",
    id: "xogud3333",
    start_time: "10:00",
    end_time: "11:30",
    content: "공장 방문 후 필요자재 확인",
  },
];

const arr2 = {
  name: "김태준",
  id: "xogud2222",
  rank: "팀장",
};

const listup = document.querySelector("#listup");

for (i = 0; i < arr.length; i++) {
  const listupContent = document.createElement("article");

  if (arr2.rank === "팀장") {
    const name = document.createElement("h3");
    name.textContent = arr[i].name;
    name.id = "name";

    const startTime = document.createElement("h3");
    startTime.textContent = arr[i].start_time;
    startTime.id = "start_time";

    const endTime = document.createElement("h3");
    endTime.textContent = arr[i].end_time;
    endTime.id = "end_time";

    const content = document.createElement("h3");
    content.textContent = arr[i].content;
    content.id = "content";

    const hr = document.createElement("hr");

    listupContent.appendChild(name);
    listupContent.appendChild(startTime);
    listupContent.appendChild(endTime);
    listupContent.appendChild(content);
    listupContent.appendChild(hr);
  } else if (arr2.rank === "팀원" && arr[i].id === arr2.id) {
    const startTime = document.createElement("h3");
    startTime.textContent = arr[i].start_time;
    startTime.id = "start_time";

    const endTime = document.createElement("h3");
    endTime.textContent = arr[i].end_time;
    endTime.id = "end_time";

    const content = document.createElement("h3");
    content.textContent = arr[i].content;
    content.id = "content";

    const hr = document.createElement("hr");

    listupContent.appendChild(startTime);
    listupContent.appendChild(endTime);
    listupContent.appendChild(content);
    listupContent.appendChild(hr);
  }

  if (arr2.id === arr[i].id) {
    const modifyBtn = document.createElement("input");
    modifyBtn.id = "modify_btn";
    modifyBtn.type = "submit";
    modifyBtn.value = "수정";
    modifyBtn.addEventListener("click", (e) => {
      const article = e.target.closest("article");
      const startTime = article.querySelector("#start_time").textContent;
      const endTime = article.querySelector("#end_time").textContent;
      const content = article.querySelector("#content").textContent;

      // 수정할 내용을 input 요소로 변경
      const startTimeInput = document.createElement("input");
      startTimeInput.type = "text";
      startTimeInput.value = startTime;
      startTimeInput.placeholder = "시작 시간";
      article.querySelector("#start_time").replaceWith(startTimeInput);

      const endTimeInput = document.createElement("input");
      endTimeInput.type = "text";
      endTimeInput.value = endTime;
      endTimeInput.placeholder = "종료 시간";
      article.querySelector("#end_time").replaceWith(endTimeInput);

      const contentInput = document.createElement("input");
      contentInput.type = "text";
      contentInput.value = content;
      contentInput.placeholder = "내용";
      article.querySelector("#content").replaceWith(contentInput);

      // 확인 버튼 생성
      const confirmBtn = document.createElement("input");
      confirmBtn.id = "confirm_btn";
      confirmBtn.type = "button";
      confirmBtn.value = "확인";
      confirmBtn.addEventListener("click", () => {
        // 입력한 값을 h3로 변경
        const newStartTime = document.createElement("h3");
        newStartTime.textContent = startTimeInput.value;
        newStartTime.id = "start_time";

        const newEndTime = document.createElement("h3");
        newEndTime.textContent = endTimeInput.value;
        newEndTime.id = "end_time";

        const newContent = document.createElement("h3");
        newContent.textContent = contentInput.value;
        newContent.id = "content";

        // input 요소를 h3로 교체
        startTimeInput.replaceWith(newStartTime);
        endTimeInput.replaceWith(newEndTime);
        contentInput.replaceWith(newContent);

        // 확인 버튼을 다시 수정 버튼으로 변경
        article.querySelector("#confirm_btn").replaceWith(modifyBtn);
      });

      // 수정 버튼을 확인 버튼으로 교체
      modifyBtn.replaceWith(confirmBtn);
      console.log(arr);
    });

    const deleteBtn = document.createElement("input");
    deleteBtn.id = "delete_btn";
    deleteBtn.type = "submit";
    deleteBtn.value = "삭제";
    deleteBtn.addEventListener("click", (e) => {
      e.target.closest("article").remove(); // sql로 삭제문을 넣어줄 테니 데이터 삭제하는 코드는 안필요하지 않나?
      alert("리스트가 삭제되었습니다!");
    });

    listupContent.appendChild(modifyBtn);
    listupContent.appendChild(deleteBtn);
  }

  listup.appendChild(listupContent);
}
