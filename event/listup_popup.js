const arr2 = [
  {
    name: "김태준",
    id: "xogud2222",
  },
  // {
  //   name: "김태준",
  //   id: "xogud4444",
  // },
];

const arr = [
  {
    name: "김태형",
    id: "xogud1111",
    start_time: "15:00",
    end_time: "16:00",
    content: "부산 출장",
  },
  {
    name: "김태준",
    id: "xogud2222",
    start_time: "12:00",
    end_time: "13:00",
    content: "월별 보고서 제출",
  },
  {
    name: "김태욱",
    id: "xogud3333",
    start_time: "10:00",
    end_time: "11:30",
    content: "공장 방문 후 필요자재 확인",
  },
];

const listup = document.querySelector("#listup");

for (i = 0; i <= arr.length; i++) {
  const name = document.createElement("h3");
  name.textContent = arr[i].name;
  name.id = "name";

  const startTime = document.createElement("h3");
  startTime.textContent = arr[i].start_time;
  startTime.id = "start_time";

  const endTime = document.createElement("h3");
  endTime.textContent = arr[i].end_time;
  endTime.id = "end_time";

  const content = document.createElement("h3");
  content.textContent = arr[i].content;
  content.id = "content";

  const hr = document.createElement("hr");

  listup.appendChild(name);
  listup.appendChild(startTime);
  listup.appendChild(endTime);
  listup.appendChild(content);
  listup.appendChild(hr);

  const matchId = arr2.find((item) => item.id === arr[i].id); // find 메서드는 true,false로 반환
  if (matchId) {
    const modifyBtn = document.createElement("input");
    modifyBtn.id = "modify_btn";
    modifyBtn.type = "submit";
    modifyBtn.value = "수정";

    const deleteBtn = document.createElement("input");
    deleteBtn.id = "delete_btn";
    deleteBtn.type = "submit";
    deleteBtn.value = "삭제";

    listup.appendChild(modifyBtn);
    listup.appendChild(deleteBtn);
  }
}
