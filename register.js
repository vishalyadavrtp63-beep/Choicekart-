import { registerUser } from "./auth.js";

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;

    try {
      await registerUser(email, password);

      alert("Account created successfully!");

      window.location.href = "index.html";
    } catch (error) {
      console.error(error);
      alert("Registration failed: " + error.message);
    }
  });
}
