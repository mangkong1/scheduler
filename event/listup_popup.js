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

// 중복되는 코드가 많아 함수로 정의
function createContent(id, text) {
  const listupText = document.createElement("h1");
  listupText.id = id;
  listupText.textContent = text;
  listupText.classList.add("article_content");
  return listupText;
}

function createInput(id, type, value, placeholder) {
  const input = document.createElement("input");
  input.id = id;
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  return input;
}

function createButton(id, type, value) {
  const button = document.createElement("input");
  button.id = id;
  button.type = type;
  button.value = value;
  return button;
}

for (i = 0; i < arr.length; i++) {
  const listupContent = document.createElement("article");
  listupContent.id = i;
  const name = createContent("name", arr[i].name);
  const startTime = createContent("start_time", "<%= start_time %>");
  const endTime = createContent("end_time", "<%= end_time %>");
  const content = createContent("content", "<%= content %>");
  const btnContainer = document.createElement("div");
  btnContainer.classList = "btn_container";
  const modifyBtn = createButton("modify_btn", "submit", "수정"); // 확인 버튼 클릭시의 조건문이
  const deleteBtn = createButton("delete_btn", "submit", "삭제");
  btnContainer.appendChild(modifyBtn);
  btnContainer.appendChild(deleteBtn);
  // 직급이 팀장일 때 이름포함 정보 생성
  if (arr2.rank === "팀장") {
    listupContent.appendChild(name);
    listupContent.appendChild(startTime);
    listupContent.appendChild(endTime);
    listupContent.appendChild(content);
    listupContent.appendChild(document.createElement("hr"));
    // 직급이 팀원일 때 이름 빼고 생성
  } else if (arr2.rank === "팀원" && arr[i].id === arr2.id) {
    listupContent.appendChild(startTime);
    listupContent.appendChild(endTime);
    listupContent.appendChild(content);
    listupContent.appendChild(document.createElement("hr"));
  }

  // 본인 id일치하면 수정, 삭제 버튼 생성
  if (arr2.id === arr[i].id) {
    // 삭제 버튼 클릭했을 때
    deleteBtn.addEventListener("click", (e) => {
      // 생성도 동시에 하면서 이벤트 넣어줌
      e.target.closest("article").remove(); // sql로 삭제문을 넣어줄 테니 데이터 삭제하는 코드는 안필요하지 않나?
      alert("리스트가 삭제되었습니다!");
    });

    // 수정 버튼 클릭했을 때 input 요소 생성
    modifyBtn.addEventListener("click", (e) => {
      const article = e.target.closest("article");
      const startTime = article.querySelector("#start_time").textContent;
      const endTime = article.querySelector("#end_time").textContent;
      const content = article.querySelector("#content").textContent;
      const confirmBtn = createButton("confirm_btn", "submit", "확인");
      const cancelBtn = createButton("cancel_btn", "submit", "취소");
      const startTimeInput = createInput("start_time_input", "text", startTime, "시작 시간");
      const endTimeInput = createInput("end_time_input", "text", endTime, "종료 시간");
      const contentInput = createInput("content_input", "text", content, "내용");

      const timeRegex = /([0-1][0-9]|2[0-3]):([0-5][0-9])/;
      let startTimeCheck = true;
      let endTimeCheck = true;
      let contentCheck = true;

      startTimeInput.addEventListener("input", () => {
        if (startTimeInput.value === "") {
          startTimeInput.style.border = "";
          startTimeCheck = false;
        } else if (!timeRegex.test(startTimeInput.value)) {
          startTimeInput.style.border = "3px solid var(--red)";
          startTimeCheck = false;
        } else {
          startTimeInput.style.border = "3px solid var(--blue)";
          startTimeCheck = true;
        }
      });

      endTimeInput.addEventListener("input", () => {
        if (endTimeInput.value === "") {
          endTimeInput.style.border = "";
          endTimeCheck = false;
        } else if (!timeRegex.test(endTimeInput.value)) {
          endTimeInput.style.border = "3px solid var(--red)";
          endTimeCheck = false;
        } else if (endTimeInput.value < startTimeInput.value) {
          endTimeInput.style.border = "3px solid var(--red)";
          endTimeCheck = false;
        } else {
          endTimeInput.style.border = "3px solid var(--blue)";
          endTimeCheck = true;
        }
      });

      contentInput.addEventListener("input", () => {
        if (contentInput.value === "") {
          contentInput.style.border = "";
          contentCheck = false;
        } else if (contentInput.value.length > 100) {
          contentInput.style.border = "3px solid var(--red)";
          contentCheck = false;
        } else {
          contentInput.style.border = "3px solid var(--blue)";
          contentCheck = true;
        }
      });

      confirmBtn.addEventListener("click", () => {
        if (startTimeCheck === false) {
          alert("올바른 시작시간을 입력해주세요");
        } else if (endTimeCheck === false) {
          alert("올바른 종료시간을 입력해주세요");
        } else if (contentCheck === false) {
          alert("올바른 일정 내용을 입력해주세요");
        } else {
          // location.href = `scheduler.jsp?year=${new Date().getFullYear()}&month=${
          //   new Date().getMonth() + 1
          // }`;
        }
      });

      article.querySelector("#start_time").replaceWith(startTimeInput); // 수정할 내용을 input요소로 변경
      article.querySelector("#end_time").replaceWith(endTimeInput);
      article.querySelector("#content").replaceWith(contentInput);

      modifyBtn.replaceWith(confirmBtn); // 수정 버튼을 확인 버튼으로 교체
      deleteBtn.replaceWith(cancelBtn); // 삭제 버튼을 취소 버튼으로 교체

      // 확인 버튼 클릭시 입력값 content로 변경
      confirmBtn.addEventListener("click", () => {
        const newStartTime = createContent("start_time", article.querySelector("#start_time_input").value);
        const newEndTime = createContent("end_time", article.querySelector("#end_time_input").value);
        const newContent = createContent("content", article.querySelector("#content_input").value);

        startTimeInput.replaceWith(newStartTime); // input 요소를 content로 교체
        endTimeInput.replaceWith(newEndTime);
        contentInput.replaceWith(newContent);

        article.querySelector("#confirm_btn").replaceWith(modifyBtn); // 확인 버튼을 수정 버튼으로
        article.querySelector("#cancel_btn").replaceWith(deleteBtn); // 취소 버튼을 삭제 버튼으로
      });

      // 취소 버튼 클릭시 새로고침
      cancelBtn.addEventListener("click", () => {
        location.reload();
      });
    });
    listupContent.appendChild(btnContainer);
  }

  listup.appendChild(listupContent); // 시멘틱 태그 법칙을 위해서 한번 만들어봄
}

listup.querySelectorAll("article").forEach((article) => {
  // article 요소의 id 값을 가져옴
  const articleId = parseInt(article.id);

  // 랜덤한 RGB 값 생성
  // 6자리 랜덤 색상 코드 생성
  const randomColor =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  // article의 자식 h1 태그에 스타일을 적용하여 글자색 변경
  article.querySelectorAll("h1").forEach((e) => {
    e.style.color = randomColor;
  });
});

//지워도됨
