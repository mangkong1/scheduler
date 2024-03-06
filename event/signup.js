const arr = [
  {
    id: "xogud1111",
    pw: "1234",
    name: "name1111",
    email: "xogud1111@gmail.com",
    deaprtment: "planning",
    rank: "manager",
  },
  {
    id: "xogud2222",
    pw: "1234",
    name: "name2222",
    email: "xogud2222@gmail.com",
    deaprtment: "planning",
    rank: "member",
  },
  {
    id: "xogud3333",
    pw: "1234",
    name: "name3333",
    email: "xogud3333@gmail.com",
    deaprtment: "design",
    rank: "manager",
  },
];

document.querySelector("#id_check").addEventListener("click", () => {
  const idValue = document.querySelector("#id_box").value;
  // let을 사용해야 변화하는 로직을 만족할 수 있다. const 안됨
  let isCheck = false;

  // 입력한 id와 동일한 것을 찾으면 isCheck를 바꾸고 반복문 즉시 종료
  for (let i = 0; i < arr.length; i++) {
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
