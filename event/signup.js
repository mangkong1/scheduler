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

// 아이디 중복확인
document.querySelector("#id_check").addEventListener("click", () => {
  const idValue = document.querySelector("#id_box").value;
  let isCheck = false; // let을 사용해야 변화하는 로직을 만족할 수 있다. const 안됨

  for (let i = 0; i < arr.length; i++) {
    // 입력한 id와 동일한 것을 찾으면 isCheck를 바꾸고 반복문 즉시 종료
    if (arr[i].id === idValue) {
      isCheck = true;
      break;
    }
  }

  if (isCheck) {
    alert("이미 사용 중인 아이디입니다");
  } else {
    alert("사용 가능한 아이디입니다");
    document.querySelector("#id_box").disabled = true;
    document.querySelector("#id_check").disabled = true;
  }
});

// 비밀번호 일치확인
document.querySelector("#pw_check").addEventListener("input", () => {
  const pwValue = document.querySelector("#pw_box").value;
  const pwCheck = document.querySelector("#pw_check").value;
  if (pwValue === pwCheck) {
    document.querySelector("#pw_usable").style.display = "block";
    document.querySelector("#pw_unusable").style.display = "none";
  } else {
    document.querySelector("#pw_unusable").style.display = "block";
    document.querySelector("#pw_usable").style.display = "none";
  }
});

// 이메일 중복확인
document.querySelector("#email_check").addEventListener("click", () => {
  const emailValue = document.querySelector("#email_box").value;
  let isCheck = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].email === emailValue) {
      isCheck = true;
      break;
    }
  }

  if (isCheck) {
    alert("이미 사용 중인 이메일입니다");
  } else {
    alert("사용 가능한 이메일입니다");
    document.querySelector("#email_box").disabled = true;
    document.querySelector("#email_check").disabled = true;
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
