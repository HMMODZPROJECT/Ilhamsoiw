const form = document.getElementById("loginForm");
const message = document.getElementById("message");

const validUsers = [
  { username: "admin", password: "1" },
  { username: "user", password: "123" },
  { username: "ilham", password: "1" }
];

let attempts = 3;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const found = validUsers.find(
    user => user.username === username && user.password === password
  );

  if (found) {
    message.style.color = "lightgreen";
    message.textContent = "Login berhasil! Mengalihkan...";
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 2000);
  } else {
    attempts--;
    message.style.color = "red";
    if (attempts > 0) {
      message.textContent = "Login gagal! Sisa percobaan: " + attempts;
    } else {
      message.textContent = "Login diblokir setelah 3 percobaan!";
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
    }
  }
});
