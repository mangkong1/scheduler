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
let idCheck = true;
let pwCheck = true;
let pwCorrectCheck = true;
let nameCheck = true;
let emailCheck = true;

// 비밀번호 일치여부 메세지 출력
document.querySelectorAll(".input_pw_box").forEach((input) =>
  input.addEventListener("input", () => {
    if (pwBox.value === "") {
      pwBox.style.border = "";
      pwCheck = false;
    } else if (pwBox.value.length < 8 || pwBox.value.length > 10) {
      pwBox.style.border = "3px solid #e63812";
      pwCheck = false;
    } else {
      pwBox.style.border = "3px solid #1d66ff";
      pwCheck = true;
    }

    if (pwCheckBox.value === "") {
      pwCheckBox.style.border = "";
      pwUnusable.style.display = "none";
      pwCorrectCheck = false;
    } else if (pwBox.value === pwCheckBox.value) {
      pwUsable.style.display = "block";
      pwUnusable.style.display = "none";
      pwCheckBox.style.border = "3px solid #1d66ff";
      pwCorrectCheck = true;
    } else {
      pwUsable.style.display = "none";
      pwUnusable.style.display = "block";
      pwCheckBox.style.border = "3px solid #e63812";
      pwCorrectCheck = false;
    }
  })
);

// 입력값 배열로 전달
nameBox.addEventListener("input", () => {
  if (nameBox.value === "") {
    nameBox.style.border = "";
    nameCheck = false;
  } else if (nameBox.value.length < 2 || nameBox.value.length > 10) {
    nameBox.style.border = "3px solid #e63812";
    nameCheck = false;
  } else {
    nameBox.style.border = "3px solid #1d66ff";
    nameCheck = true;
  }
});

emailBox.addEventListener("input", () => {
  if (emailBox.value === "") {
    emailBox.style.border = "";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "#dadde1";
    emailCheck = false;
  } else if (!emailRegex.test(emailBox.value)) {
    emailBox.style.border = "3px solid #e63812";
    emailCheckBtn.disabled = true;
    emailCheckBtn.style.backgroundColor = "#dadde1";
    emailCheck = false;
  } else {
    emailBox.style.border = "3px solid #1d66ff";
    emailCheckBtn.disabled = false;
    emailCheckBtn.style.backgroundColor = "#42b729";
    emailCheck = true;
  }
});

document.querySelector("#register_btn").addEventListener("click", () => {
  if (pwCheck === false) {
    alert("올바른 비밀번호를 입력해주세요");
  } else if (pwCorrectCheck === false) {
    alert("올바른 비밀번호를 입력해주세요");
  } else if (nameCheck === false) {
    alert("올바른 이름을 입력해주세요");
  } else if (emailCheck === false) {
    alert("올바른 이메일을 입력해주세요");
  } else {
    alert("내 정보가 수정되었습니다");
    location.href = "login.jsp";
  }
});

document.querySelector("#cancel_btn").addEventListener("click", () => {
  location.href = "mypage.jsp";
});
