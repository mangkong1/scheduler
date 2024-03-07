let arr = [
  {
    id: "xogud1111",
    pw: "1234",
    name: "name1111",
    email: "xogud1111@gmail.com",
    part: "기획팀",
    rank: "팀장",
  },
];

document.querySelector("#pw_box").value = arr[0].pw;
document.querySelector("#pw_check_box").value = arr[0].pw;
document.querySelector("#name_box").value = arr[0].name;
document.querySelector("#email_box").value = arr[0].email;

// 부서에 맞춰 select 요소 출력
const partSelect = document.querySelector("#part_select");
const partOptions = partSelect.querySelectorAll("option");
partOptions.forEach((option) => {
  if (option.value === arr[0].part) {
    option.selected = true;
  }
});

// 직급에 맞춰 select 요소 출력
const rankSelect = document.querySelector("#rank_select");
const rankOptions = rankSelect.querySelectorAll("option");
rankOptions.forEach((option) => {
  if (option.value === arr[0].rank) {
    option.selected = true;
  }
});

console.log(partSelect.value);
console.log(rankSelect.value);
