// 글쓰기 모달창 띄우기
const backContainer = document.querySelector("#back_container");
const writeModal = document.querySelector("#write_modal_section");
const dateBox = document.querySelector("#date_box");
const startTimeBox = document.querySelector("#start_time_box");
const endTimeBox = document.querySelector("#end_time_box");
const contentBox = document.querySelector("#content_box");
let dateCheck = false;
let startTimeCheck = false;
let endTimeCheck = false;
let contentCheck = false;

function setWrite() {
  backContainer.style.display = "flex";
  writeModal.style.display = "flex";
}

function setDate() {
  const dateRegex = /\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/;

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
}

function setStartTime() {
  const timeRegex = /([0-1][0-9]|2[0-3]):([0-5][0-9])/;

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
}

function setEndTime() {
  const timeRegex = /([0-1][0-9]|2[0-3]):([0-5][0-9])/;

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
}

function setContent() {
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
}

function registerWriteModal() {
  let [year, month, day] = dateBox.value.split("-");
  let yearValue = year;
  let monthValue = month;
  let dayValue = day;
  let startTimeValue = startTimeBox.value;
  let endTimeValue = endTimeBox.value;
  let contentValue = contentBox.value;
  try {
    if (dateCheck === false) {
      throw new Error("올바른 날짜를 입력해주세요");
    }
    if (startTimeCheck === false) {
      throw new Error("올바른 시작시간을 입력해주세요");
    }
    if (endTimeCheck === false) {
      throw new Error("올바른 종료시간을 입력해주세요");
    }
    if (contentCheck === false) {
      throw new Error("올바른 일정 내용을 입력해주세요");
    }
    let url = "../action/write_action.jsp?";
    url += "year=" + yearValue;
    url += "&month=" + monthValue;
    url += "&day=" + dayValue;
    url += "&start_time=" + startTimeValue;
    url += "&end_time=" + endTimeValue;
    url += "&content=" + contentValue;
    window.open(url, "_self");
  } catch (e) {
    alert(e.message);
  }
}

function closeWriteModal() {
  backContainer.style.display = "none";
  writeModal.style.display = "none";
  writeModal.querySelectorAll(".input_box, .input_box_big").forEach((e) => {
    e.value = "";
    e.style = ""; // 입력 요소의 값과 스타일 초기화
  });
}
