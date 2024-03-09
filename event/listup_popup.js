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

const arr2 = {
  name: "김태준",
  id: "xogud2222",
  rank: "팀장",
};

const listup = document.querySelector("#listup");

for (i = 0; i < arr.length; i++) {
  const listupContent = document.createElement("article");

  if (arr2.rank === "팀장") {
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

    listupContent.appendChild(name);
    listupContent.appendChild(startTime);
    listupContent.appendChild(endTime);
    listupContent.appendChild(content);
    listupContent.appendChild(hr);
  } else if (arr2.rank === "팀원" && arr[i].id === arr2.id) {
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

    listupContent.appendChild(startTime);
    listupContent.appendChild(endTime);
    listupContent.appendChild(content);
    listupContent.appendChild(hr);
  }

  if (arr2.id === arr[i].id) {
    const modifyBtn = document.createElement("input");
    modifyBtn.id = "modify_btn";
    modifyBtn.type = "submit";
    modifyBtn.value = "수정";
    modifyBtn.addEventListener("click", () => {
      console.log("1");
    });

    const deleteBtn = document.createElement("input");
    deleteBtn.id = "delete_btn";
    deleteBtn.type = "submit";
    deleteBtn.value = "삭제";
    deleteBtn.addEventListener("click", (e) => {
      e.target.closest("article").remove();
      console.log(arr);
    });

    listupContent.appendChild(modifyBtn);
    listupContent.appendChild(deleteBtn);
  }

  listup.appendChild(listupContent);
}
