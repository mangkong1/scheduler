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

function modifyPopup(e) {
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

  article.querySelector("#start_time").replaceWith(startTimeInput); // 수정할 내용을 input요소로 변경
  article.querySelector("#end_time").replaceWith(endTimeInput);
  article.querySelector("#content").replaceWith(contentInput);

  const modifyBtn = document.querySelector("#modify_btn");
  const deleteBtn = document.querySelector("#delete_btn");

  modifyBtn.replaceWith(confirmBtn); // 수정 버튼을 확인 버튼으로 교체
  deleteBtn.replaceWith(cancelBtn); // 삭제 버튼을 취소 버튼으로 교체

  // 확인 버튼 클릭시 입력값 content로 변경
  confirmBtn.addEventListener("click", () => {
    try {
      if (startTimeCheck === false) {
        throw new Error("올바른 시작시간을 입력해주세요");
      }
      if (endTimeCheck === false) {
        throw new Error("올바른 종료시간을 입력해주세요");
      }
      if (contentCheck === false) {
        throw new Error("올바른 일정 내용을 입력해주세요");
      }
      const newStartTime = createContent("start_time", article.querySelector("#start_time_input").value);
      const newEndTime = createContent("end_time", article.querySelector("#end_time_input").value);
      const newContent = createContent("content", article.querySelector("#content_input").value);
      const workIdx = article.id;

      startTimeInput.replaceWith(newStartTime); // input 요소를 content로 교체
      endTimeInput.replaceWith(newEndTime);
      contentInput.replaceWith(newContent);

      article.querySelector("#confirm_btn").replaceWith(modifyBtn); // 확인 버튼을 수정 버튼으로
      article.querySelector("#cancel_btn").replaceWith(deleteBtn); // 취소 버튼을 삭제 버튼으로

      window.open("../action/popup_modify_action.jsp?work_idx=" + workIdx + "&start_time=" + newStartTime.textContent + "&end_time=" + newEndTime.textContent + "&content=" + newContent.textContent, "_self");
      console.log(newStartTime);
    } catch (e) {
      alert(e.message);
    }
  });

  // 취소 버튼 클릭시 새로고침
  cancelBtn.addEventListener("click", () => {
    location.reload();
  });
}
