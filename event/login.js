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

// idValue와 pwValue를 전역변수로 외부에서 선언할 때 작동안함...왜?
// 만약 전역변수로 선언한다면 html이 처음 실행될 때 값이 지정되므로
// 빈 값으로 나온다 (console.log하면 금방 알 수 있었음!)
// find 메서드를 이용해 콜백함수를 각 요소에 대해 실행하고 조건이 맞으면 true 반환
document.querySelector("#login_btn").addEventListener("click", () => {
  const idValue = document.querySelector("#id_box").value;
  const pwValue = document.querySelector("#pw_box").value;
  const user = arr.find((user) => user.id === idValue && user.pw === pwValue);
  if (user) {
    location.href = "scheduler.jsp";
  } else {
    alert("아이디 혹은 비밀번호가 일치하지 않습니다");
    location.reload();
  }
});

document.querySelector("#move_find_id").addEventListener("click", () => {
  location.href = "find_id.jsp";
});

document.querySelector("#move_find_pw").addEventListener("click", () => {
  location.href = "find_pw.jsp";
});

document.querySelector("#move_signup").addEventListener("click", () => {
  location.href = "signup.jsp";
});
