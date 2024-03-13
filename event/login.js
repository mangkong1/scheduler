// idValue와 pwValue를 전역변수로 외부에서 선언할 때 작동안함...왜?
// 만약 전역변수로 선언한다면 html이 처음 실행될 때 값이 지정되므로
// 빈 값으로 나온다 (console.log하면 금방 알 수 있었음!)
document.querySelector("#login_btn").addEventListener("click", () => {
  const idValue = document.querySelector("#id_box").value;
  const pwValue = document.querySelector("#pw_box").value;

  // 프론트엔드 예외처리, 빈칸일 때 alert
  if (idValue === "") {
    alert("아이디를 입력해 주세요");
  } else if (pwValue === "") {
    alert("비밀번호를 입력해 주세요");
  } else {
    location.href = "scheduler.jsp";
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
