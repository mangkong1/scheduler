const arr = [
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

document.querySelector("#find_id_btn").addEventListener("click", () => {
  const nameValue = document.querySelector("#name_box").value;
  const emailValue = document.querySelector("#email_box").value;
  const user = arr.find(
    (user) => user.name === nameValue && user.email === emailValue
  );
  if (user) {
    alert("아이디는 " + user.id + " 입니다");
    location.href = "login.jsp";
  } else {
    alert("이름 혹은 이메일이 잘못 입력되었습니다");
    location.reload();
  }
});
