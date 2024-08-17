document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn-onboarding");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "login.html";
  });
});
