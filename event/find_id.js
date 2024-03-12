document.querySelector("#find_id_btn").addEventListener("click", () => {
  const nameValue = document.querySelector("#name_box").value;
  const emailValue = document.querySelector("#email_box").value;

  if (nameValue === "") {
    alert("이름을 입력해 주세요");
  } else if (emailValue === "") {
    alert("이메일을 입력해 주세요");
  } else {
    location.href = "scheduler.jsp";
  }
});
