import { logoutUser } from "./auth.js";

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    try {
      await logoutUser();

      alert("Logged out successfully!");

      window.location.href = "login.html";
    } catch (error) {
      console.error(error);
      alert("Logout failed: " + error.message);
    }
  });
}
