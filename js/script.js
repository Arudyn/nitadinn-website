const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const card = button.closest(".review-card");
    const fullText = card.querySelector(".full-text");
    fullText.classList.toggle("visible");

    if (button.textContent === "Read more") {
      button.textContent = "Show less";
    } else {
      button.textContent = "Read more";
    }
  });
});