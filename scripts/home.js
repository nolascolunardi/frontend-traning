const buttons = document.querySelectorAll(".day");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");
  });
});
