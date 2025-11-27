const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const usernameInput = document.getElementById("usernameInput");
const signupBtn = document.getElementById("signupBtn");

let userInfo = {
  id: "",
  pw: "",
  userName: ""
}

signupBtn.addEventListener("click", () => {
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();
  const userName = usernameInput.value.trim();

  if (id.length < 6) {
    alert("아이디는 6자 이상이어야 합니다.");
    return;
  }

  if (pw.length < 8) {
    alert("비밀번호는 8자 이상이어야 합니다.");
    return;
  }

  if (userName === "") {
    alert("이름을 입력해주세요!");
    return;
  }

  userInfo.id = id;
  userInfo.pw = pw;
  userInfo.userName = userName;

  const isConfirm = confirm(`username: ${userName}\nid: ${id}\npassword: ${pw}\n위 정보로 회원가입 하시겠어요?`);

  if(isConfirm) {
    alert("성공적으로 회원가입 완료되었습니다!");
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    window.location.href = '../login/index.html';
  }
});