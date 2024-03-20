document.querySelector("#mypage_modify_btn").addEventListener("click", () => {
  location.href = "../page/mypage_modify.jsp";
});

document.querySelector("#delete_btn").addEventListener("click", () => {
  window.open("../action/mypage_delete_action.jsp", "_self");
});
