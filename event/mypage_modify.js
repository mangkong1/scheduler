let arr = [
  {
    id: "xogud1111",
    pw: "1234",
    name: "name1111",
    email: "xogud1111@gmail.com",
    part: "디자인팀",
    rank: "팀장",
  },
];

const pwBox = document.querySelector("#pw_box");
pwBox.value = arr[0].pw;

const pwCheckBox = document.querySelector("#pw_check_box");
pwCheckBox.value = arr[0].pw;

const nameBox = document.querySelector("#name_box");
nameBox.value = arr[0].name;

const emailBox = document.querySelector("#email_box");
emailBox.value = arr[0].email;

const partBox = document.querySelector("#part_box");
partBox.value = arr[0].part;

const rankBox = document.querySelector("#rank_box");
rankBox.value = arr[0].rank;

// 비밀번호 일치여부 메세지 출력
document.querySelector("#pw_check_box").addEventListener("input", () => {
  const pwValue = document.querySelector("#pw_box").value;
  const pwCheck = document.querySelector("#pw_check_box").value;
  if (pwValue === pwCheck) {
    document.querySelector("#pw_usable").style.display = "block";
    document.querySelector("#pw_unusable").style.display = "none";
  } else {
    document.querySelector("#pw_unusable").style.display = "block";
    document.querySelector("#pw_usable").style.display = "none";
  }
});

// 입력값 배열로 전달
document.querySelector("#register_btn").addEventListener("click", () => {
  const pwValue = document.querySelector("#pw_box").value;
  const nameValue = document.querySelector("#name_box").value;
  const emailValue = document.querySelector("#email_box").value;
  const partValue = document.querySelector("#part_box").value;
  const rankValue = document.querySelector("#rank_box").value;

  arr[0].pw = pwValue;
  arr[0].name = nameValue;
  arr[0].email = emailValue;
  arr[0].part = partValue;
  arr[0].rank = rankValue;

  console.log(arr);
});

document.querySelector("#cancel_btn").addEventListener("click", () => {
  location.href = "mypage.jsp";
});
