document.querySelector("#find_pw_btn").addEventListener("click", () => {
  const idValue = document.querySelector("#id_box").value;
  const emailValue = document.querySelector("#email_box").value;

  if (idValue === "") {
    alert("아이디를 입력해 주세요");
  } else if (emailValue === "") {
    alert("이메일을 입력해 주세요");
  } else {
    location.href = "scheduler.jsp";
  }
});
