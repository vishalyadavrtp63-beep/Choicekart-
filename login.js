import { loginUser } from "./auth.js";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      await loginUser(email, password);

      alert("Login successful!");

      // Login ke baad home page
      window.location.href = "index.html";
    } catch (error) {
      console.error(error);
      alert("Login failed: " + error.message);
    }
  });
}
