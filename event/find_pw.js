let idBox = document.querySelector("#id_box");
let emailBox = document.querySelector("#email_box");

idCheck = false;
emailCheck = false;

idBox.addEventListener("input", () => {
  let idValue = idBox.value;
  if (idValue === "") {
    idBox.style.border = "";
    idCheck = false;
  } else {
    idBox.style.border = "3px solid var(--blue)";
    idCheck = true;
  }
});

emailBox.addEventListener("input", () => {
  let emailValue = emailBox.value;
  if (emailValue === "") {
    emailBox.style.border = "";
    emailCheck = false;
  } else {
    emailBox.style.border = "3px solid var(--blue)";
    emailCheck = true;
  }
});

document.querySelector("#find_pw_btn").addEventListener("click", () => {
  let idValue = idBox.value;
  let emailValue = emailBox.value;
  try {
    if (idCheck === false) {
      throw "이름을 입력해주세요";
    }
    if (emailCheck === false) {
      throw "이메일을 입력해주세요";
    }
    window.open("../action/find_pw_action.jsp?id_box=" + idValue + "&email_box=" + emailValue);
    location.href = "../page/login.jsp";
  } catch (e) {
    alert(e);
  }
});
