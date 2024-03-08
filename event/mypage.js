const idValue = document.querySelector("#id_value").textContent;

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
    id: "xogud5053",
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

// 일단 구체적인 id값을 정하고 삭제하는 코드를 작성했다
// Jsp파일의 특정값을 가져오는 코드를 나중에 짤 예정
// 회원정보 삭제
document.querySelector("#delete_btn").addEventListener("click", () => {
  const index = arr.findIndex((item) => item.id === idValue); // 조건을 만족하는 index를 찾음
  arr.splice(index, 1); // 그 인덱스로부터 1요소 삭제(자기 자신만)
  console.log(arr);
});
