document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "home.html";
  });
});
