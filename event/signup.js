const idBox = document.querySelector("#id_box");
const idCheckBtn = document.querySelector("#id_check_btn");
const pwBox = document.querySelector("#pw_box");
const pwCheckBox = document.querySelector("#pw_check_box");
const pwUsable = document.querySelector("#pw_usable");
const pwUnusable = document.querySelector("#pw_unusable");
const nameBox = document.querySelector("#name_box");
const emailBox = document.querySelector("#email_box");
const emailCheckBtn = document.querySelector("#email_check_btn");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const partSelect = document.querySelector("#part_select");
const rankSelect = document.querySelector("#rank_select");
const signupForm = document.querySelector("#signup_form");
idCheckBtn.disabled = true;
emailCheckBtn.disabled = true;
let idCheck = false;
let pwCheck = false;
let pwCorrectCheck = false;
let nameCheck = false;
let emailCheck = false;
let partCheck = false;
let rankCheck = false;
let idDuplicateCheck = false;
let emailDuplicateCheck = false;

// 아이디 중복확인(프론트 예외처리)
idBox.addEventListener("input", () => {
  if (idBox.value === "") {
    idBox.style.border = "";
    idCheckBtn.disabled = true;
    idCheckBtn.style.backgroundColor = "var(--lightgray)";
    idCheck = false;
  } else if (idBox.value.length < 6 || idBox.value.length > 10) {
    idBox.style.border = "3px solid var(--red)";
    idCheckBtn.disabled = true;
    idCheckBtn.style.backgroundColor = "var(--lightgray)";
    idCheck = false;
  } else {
    idBox.style.border = "3px solid var(--blue)";
    idCheckBtn.disabled = false;
    idCheckBtn.style.backgroundColor = "var(--green)";
    idCheckBtn.style.cursor = "pointer";
    idCheck = true;
  }
});

// 비밀번호 일치확인
document.querySelectorAll(".input_pw_box").forEach((input) =>
  input.addEventListener("input", () => {
    if (pwBox.value === "") {
      pwBox.style.border = "";
      pwCheck = false;
    } else if (pwBox.value.length < 8 || pwBox.value.length > 10) {
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
  })
);

// 이름 형식 확인
nameBox.addEventListener("input", () => {
  if (nameBox.value === "") {
    nameBox.style.border = "";
    nameCheck = false;
  } else if (nameBox.value.length < 2 || nameBox.value.length > 10) {
    nameBox.style.border = "3px solid var(--red)";
    nameCheck = false;
  } else {
    nameBox.style.border = "3px solid var(--blue)";
    nameCheck = true;
  }
});

// 이메일 형식 확인(프론트)
emailBox.addEventListener("input", () => {
  if (emailBox.value === "") {
    emailBox.style.border = "";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "var(--lightgray)";
    emailCheck = false;
  } else if (emailBox.value.length > 30) {
    emailBox.style.border = "3px solid var(--red)";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "var(--lightgray)";
    emailCheck = false;
  } else if (!emailRegex.test(emailBox.value)) {
    emailBox.style.border = "3px solid var(--red)";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "var(--lightgray)";
    emailCheck = false;
  } else {
    emailBox.style.border = "3px solid var(--blue)";
    emailCheckBtn.disabled = false;
    emailCheckBtn.style.backgroundColor = "var(--green)";
    emailCheck = true;
  }
});

// 아이디 중복확인(백엔드 예외처리)
idCheckBtn.addEventListener("click", () => {
  let idBox = document.getElementById("id_box").value;
  window.open("../action/id_check_action.jsp?id_box=" + idBox, "", "width=400, height=300");
});

// 이메일 중복 확인(백)
emailCheckBtn.addEventListener("click", () => {
  let emailBox = document.getElementById("email_box").value;
  window.open("../action/email_check_action.jsp?email_box=" + emailBox, "", "width=400, height=300");
});

window.addEventListener("message", (e) => {
  if (e.data.isIdDuplicate !== undefined) {
    // isIdDuplicate 프로퍼티가 정의되어 있으면 아이디 중복 여부를 판단
    if (e.data.isIdDuplicate) {
      alert("아이디가 중복됩니다");
      idDuplicateCheck = false;
    } else {
      alert("아이디가 사용가능합니다");
      idDuplicateCheck = true;
      idCheckBtn.disabled = true;
      idCheckBtn.style = "";
      idCheckBtn.style.backgroundColor = "var(--lightgray)";
    }
  } else if (e.data.isEmailDuplicate !== undefined) {
    // isEmailDuplicate 프로퍼티가 정의되어 있으면 이메일 중복 여부를 판단
    if (e.data.isEmailDuplicate) {
      alert("이메일이 중복됩니다");
      emailDuplicateCheck = false;
    } else {
      alert("이메일이 사용가능합니다");
      emailDuplicateCheck = true;
      emailCheckBtn.disabled = true;
      emailCheckBtn.style = "";
      emailCheckBtn.style.backgroundColor = "var(--lightgray)";
    }
  }
});

// 부서와 직급 선택시 상태 변경
partSelect.addEventListener("input", () => {
  if (partSelect.value === "") {
    partSelect.style.border = "";
    partSelect.style.color = "";
    partCheck = false;
  } else {
    partSelect.style.border = "3px solid var(--blue)";
    partSelect.style.color = "black";
    partCheck = true;
  }
});

rankSelect.addEventListener("input", () => {
  if (rankSelect.value === "") {
    rankSelect.style.border = "";
    rankSelect.style.color = "";
    rankCheck = false;
  } else {
    rankSelect.style.border = "3px solid var(--blue)";
    rankSelect.style.color = "black";
    rankCheck = true;
  }
});

// 회원가입 누를 때 예외처리(프론트)
document.querySelector("#signup_btn").addEventListener("click", () => {
  if (idCheck === false) {
    alert("올바른 아이디를 입력해주세요");
  } else if (idDuplicateCheck === false) {
    alert("아이디 중복확인을 해주세요");
  } else if (pwCheck === false) {
    alert("올바른 비밀번호를 입력해주세요");
  } else if (pwCorrectCheck === false) {
    alert("올바른 비밀번호를 입력해주세요");
  } else if (nameCheck === false) {
    alert("올바른 이름을 입력해주세요");
  } else if (emailCheck === false) {
    alert("올바른 이메일을 입력해주세요");
  } else if (emailDuplicateCheck === false) {
    alert("이메일 중복확인을 해주세요");
  } else if (partCheck === false) {
    alert("올바른 부서를 입력해주세요");
  } else if (rankCheck === false) {
    alert("올바른 직급을 입력해주세요");
  } else {
    document.querySelector("#signup_form").submit();
  }
});
