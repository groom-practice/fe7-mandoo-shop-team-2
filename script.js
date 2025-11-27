const loginBtn = document.querySelector(".loginBtn");

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const isLogin = localStorage.getItem("isLogin");

if (userInfo && isLogin === "true") {
  welcomeSpan.textContent = `안녕하세요👋🏻 ${userInfo.userName}님!`;
  loginBtn.textContent = "로그아웃";

  loginBtn.addEventListener("click", () => {
    // 로그아웃
    localStorage.removeItem("isLogin");
    window.location.reload();
  });
} else {
  welcomeSpan.textContent = "안녕하세요👋🏻 로그인 하시면 여기에 닉네임이 뜰거에요!";
  loginBtn.textContent = "로그인";

  loginBtn.addEventListener("click", () => {
    if (!userInfo) {
      alert("회원가입 정보가 없습니다. 회원가입을 먼저 진행해주세요.");
      window.location.href = "./signup/index.html";
    } else {
      window.location.href = "./login/index.html";
    }
  });
}