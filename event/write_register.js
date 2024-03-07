let arr = [
  {
    date: "2024-03-03",
    start_time: "16:00",
    end_time: "17:00",
    content: "부산 출장 갖다오기",
  },
];

document.querySelector("#register_btn").addEventListener("click", () => {
  const dateValue = document.querySelector("#date_box").value;
  const startTimeValue = document.querySelector("#start_time_box").value;
  const endTimeValue = document.querySelector("#end_time_box").value;
  const contentValue = document.querySelector("#content_box").value;

  arr.push({
    date: dateValue,
    start_time: startTimeValue,
    end_time: endTimeValue,
    content: contentValue,
  });

  console.log(arr);
});
