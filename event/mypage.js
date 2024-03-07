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

document.querySelector("#mypage_modify_btn").addEventListener("click", () => {
  location.href = "mypage_modify.jsp";
});

document.querySelector("#delete_btn").addEventListener("click", () => {
  const index = arr.findIndex((item) => item.id === "xogud1111");
  arr.splice(index, 1);
  console.log(arr);
});
