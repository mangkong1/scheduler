// let arr = [
//   {
//     id: "xogud1111",
//     pw: "1234",
//     name: "name1111",
//     email: "xogud1111@gmail.com",
//     deaprtment: "기획팀",
//     rank: "팀장",
//   },
//   {
//     id: "xogud2222",
//     pw: "1234",
//     name: "name2222",
//     email: "xogud2222@gmail.com",
//     deaprtment: "기획팀",
//     rank: "팀원",
//   },
//   {
//     id: "xogud3333",
//     pw: "1234",
//     name: "name3333",
//     email: "xogud3333@gmail.com",
//     deaprtment: "디자인팀",
//     rank: "팀장",
//   },
// ];
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
let idCheck = false;
let pwCheck = false;
let pwCorrectCheck = false;
let nameCheck = false;
let emailCheck = false;
let partCheck = false;
let rankCheck = false;

// 아이디 중복확인(프론트 예외처리)
idBox.addEventListener("input", () => {
  if (idBox.value.length < 6 || idBox.value.length > 10) {
    idBox.style.border = "3px solid #e63812";
    idCheckBtn.disabled = true;
    idCheckBtn.style.backgroundColor = "#dadde1";
    idCheck = false;
  } else {
    idBox.style.border = "3px solid #1d66ff";
    idCheckBtn.disabled = false;
    idCheckBtn.style.backgroundColor = "#42b729";
    idCheck = true;
  }
});
// 아이디 중복확인(백엔드 예외처리)
idCheckBtn.addEventListener("click", () => {});

// 비밀번호 일치확인
document.querySelectorAll(".input_pw_box").forEach((input) =>
  input.addEventListener("input", () => {
    if (pwBox.value.length < 8 || pwBox.value.length > 10) {
      pwBox.style.border = "3px solid #e63812";
      pwCheck = false;
    } else {
      pwBox.style.border = "3px solid #1d66ff";
      pwCheck = true;
    }

    if (pwBox.value === pwCheckBox.value) {
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

// 이름 형식 확인
nameBox.addEventListener("input", () => {
  if (nameBox.value.length < 2 || nameBox.value.length > 10) {
    nameBox.style.border = "3px solid #e63812";
    nameCheck = false;
  } else {
    nameBox.style.border = "3px solid #1d66ff";
    nameCheck = true;
  }
});

// 이메일 형식 확인(프론트)
emailBox.addEventListener("input", () => {
  if (!emailRegex.test(emailBox.value)) {
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

//이메일 중복 확인(백)
emailCheckBtn.addEventListener("click", () => {});

// 등록시 input값 배열에 넣기
document.querySelector("#signup_btn").addEventListener("click", () => {
  if (idCheck === false) {
    alert("올바른 아이디를 입력해주세요");
  } else if (pwCheck === false) {
    alert("올바른 비밀번호를 입력해주세요");
  } else if (pwCorrectCheck === false) {
    alert("올바른 비밀번호를 입력해주세요");
  } else if (nameCheck === false) {
    alert("올바른 이름을 입력해주세요");
  } else if (emailCheck === false) {
    alert("올바른 이메일을 입력해주세요");
  } else {
    alert("회원가입이 완료되었습니다.");
    location.href = "login.jsp";
  }

  // const idValue = document.querySelector("#id_box").value;
  // const pwValue = document.querySelector("#pw_box").value;
  // const nameValue = document.querySelector("#name_box").value;
  // const emailValue = document.querySelector("#email_box").value;
  // const partValue = document.querySelector("#part_select").value;
  // const rankValue = document.querySelector("#rank_select").value;
  // // 프론트엔드 예외처리 자리로 좋다
  // arr.push({
  //   // 새로운 객체 생성 후 arr 배열에 추가
  //   id: idValue,
  //   pw: pwValue,
  //   name: nameValue,
  //   email: emailValue,
  //   department: partValue,
  //   rank: rankValue,
  // });
});
