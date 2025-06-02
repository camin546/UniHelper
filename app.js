// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Прокрутка к блоку "Залишити запит на допомогу"
  const buttons = document.querySelectorAll(".action-btn");
  const formSection = document.getElementById("request-form");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
