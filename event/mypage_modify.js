const pwBox = document.querySelector("#pw_box");
const pwCheckBox = document.querySelector("#pw_check_box");
const nameBox = document.querySelector("#name_box");
const emailBox = document.querySelector("#email_box");
const emailCheckBtn = document.querySelector("#email_check_btn");
const partSelect = document.querySelector("#part_select");
const rankSelect = document.querySelector("#rank_select");
let idCheck = true;
let pwCheck = true;
let pwCorrectCheck = true;
let nameCheck = true;
let emailCheck = true;

// 비밀번호 일치여부 메세지 출력
function checkPw() {
  const pwRegex = /^[a-zA-Z가-힣0-9]{8,10}$/;
  const pwUsable = document.querySelector("#pw_usable");
  const pwUnusable = document.querySelector("#pw_unusable");

  if (pwBox.value === "") {
    pwBox.style.border = "";
    pwCheck = false;
  } else if (!pwRegex.test(pwBox.value)) {
    pwBox.style.border = "3px solid var(--red)";
    pwCheck = false;
  } else {
    pwBox.style.border = "3px solid var(--blue)";
    pwCheck = true;
  }

  if (pwCheckBox.value === "") {
    pwCheckBox.style.border = "";
    pwUnusable.style.display = "none";
    pwCorrectCheck = false;
  } else if (pwBox.value === pwCheckBox.value) {
    pwUsable.style.display = "block";
    pwUnusable.style.display = "none";
    pwCheckBox.style.border = "3px solid var(--blue)";
    pwCorrectCheck = true;
  } else {
    pwUsable.style.display = "none";
    pwUnusable.style.display = "block";
    pwCheckBox.style.border = "3px solid var(--red)";
    pwCorrectCheck = false;
  }
}

// 입력값 배열로 전달
function checkName() {
  const nameRegex = /^[a-zA-Z가-힣0-9]{2,10}$/;
  if (nameBox.value === "") {
    nameBox.style.border = "";
    nameCheck = false;
  } else if (!nameRegex.test(nameBox.value)) {
    nameBox.style.border = "3px solid var(--red)";
    nameCheck = false;
  } else {
    nameBox.style.border = "3px solid var(--blue)";
    nameCheck = true;
  }
}

function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailBox.value === "") {
    emailBox.style.border = "";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "var(--lightgray)";
    emailCheckBtn.style.cursor = "";
    emailCheckBtn.style.color = "white";
    emailCheck = false;
  } else if (!emailRegex.test(emailBox.value)) {
    emailBox.style.border = "3px solid var(--red)";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "var(--lightgray)";
    emailCheckBtn.style.color = "white";
    emailCheckBtn.style.cursor = "";
    emailCheck = false;
  } else {
    emailBox.style.border = "3px solid var(--blue)";
    emailCheckBtn.disabled = false;
    emailCheckBtn.style.backgroundColor = "var(--green)";
    emailCheckBtn.style.cursor = "pointer";
    emailCheck = true;
  }
}

function checkDuplicateEmail() {
  window.open("../action/email_check_action.jsp?email_box=" + emailBox.value, "", "width=400, height=300");
}

function register() {
  let pwValue = pwBox.value;
  let nameValue = nameBox.value;
  let emailValue = emailBox.value;
  let partValue = partSelect.value;
  let rankValue = rankSelect.value;

  try {
    if (pwCheck === false) {
      throw new Error("올바른 비밀번호를 입력해주세요");
    }
    if (pwCorrectCheck === false) {
      throw new Error("올바른 비밀번호를 입력해주세요");
    }
    if (nameCheck === false) {
      throw new Error("올바른 이름을 입력해주세요");
    }
    if (emailCheck === false) {
      throw new Error("올바른 이메일을 입력해주세요");
    }
    let url = "../action/mypage_modify_action.jsp?";
    url += "pw_box=" + pwValue;
    url += "&name_box=" + nameValue;
    url += "&email_box=" + emailValue;
    url += "&part_select=" + partValue;
    url += "&rank_select=" + rankValue;
    window.open(url, "_self");
  } catch (e) {
    alert(e.message);
  }
}

function cancel() {
  location.href = "mypage.jsp";
}
