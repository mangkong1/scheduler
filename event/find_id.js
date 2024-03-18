let nameBox = document.querySelector("#name_box");
let emailBox = document.querySelector("#email_box");

nameCheck = false;
emailCheck = false;

nameBox.addEventListener("input", () => {
  let nameValue = nameBox.value;
  if (nameValue === "") {
    nameBox.style.border = "";
    nameCheck = false;
  } else {
    nameBox.style.border = "3px solid var(--blue)";
    nameCheck = true;
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

document.querySelector("#find_id_btn").addEventListener("click", () => {
  let nameValue = nameBox.value;
  let emailValue = emailBox.value;
  try {
    if (nameCheck === false) {
      throw "이름을 입력해주세요";
    }
    if (emailCheck === false) {
      throw "이메일을 입력해주세요";
    }
    window.open("../action/find_id_action.jsp?name_box=" + nameValue + "&email_box=" + emailValue);
    location.href = "../page/login.jsp";
  } catch (e) {
    alert(e);
  }
});
