const loginIdInput = document.getElementById("loginIdInput");
const loginPasswordInput = document.getElementById("loginPasswordInput");
const loginBtn = document.getElementById("loginBtn");
const saveIdCheck = document.getElementById("saveIdCheck");

const savedId = localStorage.getItem("savedId");
if (savedId) {
  loginIdInput.value = savedId;
  saveIdCheck.checked = true;
}

loginBtn.addEventListener("click", () => {
  const id = loginIdInput.value.trim();
  const pw = loginPasswordInput.value.trim();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (!userInfo) {
    alert("회원가입 정보가 없습니다. 회원가입을 먼저 진행해주세요!");
    window.location.href = "../signup/index.html";
    return;
  }

  if (userInfo.id !== id || userInfo.pw !== pw) {
    alert("아이디 또는 비밀번호가 일치하지 않습니다!");
    return;
  }

  alert("로그인 성공!");
  localStorage.setItem("isLogin", "true");

  if (saveIdCheck.checked) {
    localStorage.setItem("savedId", id);
  } else {
    localStorage.removeItem("savedId");
  }

  // 메인 페이지 이동
  window.location.href = "../index.html";
});