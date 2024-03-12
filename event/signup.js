let arr = [
  {
    id: "xogud1111",
    pw: "1234",
    name: "name1111",
    email: "xogud1111@gmail.com",
    deaprtment: "기획팀",
    rank: "팀장",
  },
  {
    id: "xogud2222",
    pw: "1234",
    name: "name2222",
    email: "xogud2222@gmail.com",
    deaprtment: "기획팀",
    rank: "팀원",
  },
  {
    id: "xogud3333",
    pw: "1234",
    name: "name3333",
    email: "xogud3333@gmail.com",
    deaprtment: "디자인팀",
    rank: "팀장",
  },
];
const idBox = document.querySelector("#id_box");
const idCheck = document.querySelector("#id_check");
const pwBox = document.querySelector("#pw_box");
const pwCheck = document.querySelector("#pw_check");
const pwUsable = document.querySelector("#pw_usable");
const pwUnusable = document.querySelector("#pw_unusable");
const nameBox = document.querySelector("#name_box");
const emailBox = document.querySelector("#email_box");
const emailCheck = document.querySelector("#email_check");

// 아이디 중복확인(프론트 예외처리)
idBox.addEventListener("input", () => {
  if (idBox.value.length < 6 || idBox.value.length > 10) {
    idBox.style.border = "3px solid #e63812";
    idCheck.disabled = true;
    idCheck.style.backgroundColor = "#dadde1";
  } else {
    idBox.style.border = "3px solid #1d66ff";
    idCheck.disabled = false;
    idCheck.style.backgroundColor = "#42b729";
  }
});
// 아이디 중복확인(백엔드 예외처리)
idCheck.addEventListener("click", () => {});

// 비밀번호 일치확인
document.querySelectorAll(".input_pw_box").forEach((input) =>
  input.addEventListener("input", () => {
    if (pwBox.value.length < 8 || pwBox.value.length > 10) {
      pwBox.style.border = "3px solid #e63812";
    } else {
      pwBox.style.border = "3px solid #1d66ff";
    }

    if (pwBox.value === pwCheck.value) {
      pwUsable.style.display = "block";
      pwUnusable.style.display = "none";
      pwCheck.style.border = "3px solid #1d66ff";
    } else {
      pwUsable.style.display = "none";
      pwUnusable.style.display = "block";
      pwCheck.style.border = "3px solid #e63812";
    }
  })
);

nameBox.addEventListener("input", () => {
  if (nameBox.value.length < 2 || nameBox.value.length > 10) {
    nameBox.style.border = "3px solid #e63812";
  } else {
    nameBox.style.border = "3px solid #1d66ff";
  }
});

// 이메일 중복확인
emailBox.addEventListener("input", () => {
  if (emailBox.value.length < 3) {
    emailBox.style.border = "3px solid #e63812";
    emailCheck.disabled = true;
    emailCheck.style.backgroundColor = "#dadde1";
  } else {
    emailBox.style.border = "3px solid #1d66ff";
    emailCheck.disabled = false;
    emailCheck.style.backgroundColor = "#42b729";
  }
});

// 등록시 input값 배열에 넣기
document.querySelector("#signup_btn").addEventListener("click", () => {
  const idValue = document.querySelector("#id_box").value;
  const pwValue = document.querySelector("#pw_box").value;
  const nameValue = document.querySelector("#name_box").value;
  const emailValue = document.querySelector("#email_box").value;
  const partValue = document.querySelector("#part_select").value;
  const rankValue = document.querySelector("#rank_select").value;
  // 프론트엔드 예외처리 자리로 좋다
  arr.push({
    // 새로운 객체 생성 후 arr 배열에 추가
    id: idValue,
    pw: pwValue,
    name: nameValue,
    email: emailValue,
    department: partValue,
    rank: rankValue,
  });

  alert("회원가입이 완료되었습니다.");
  console.log(arr);
  // location.href = "login.jsp";
});
