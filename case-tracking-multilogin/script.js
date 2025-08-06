function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // รายชื่อผู้ใช้และรหัสผ่านแบบหลายคน
  const users = {
    admin: "1234",
    judge: "judgesecret",
    officer: "officer2024",
    lawuser: "lawpass"
  };

  if (users[username] && users[username] === password) {
    alert("ยินดีต้อนรับ " + username);
    window.location.href = "search.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
}