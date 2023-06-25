const timerEl = document.querySelector(".timer");
timerEl.style.fontSize = "20px";
timerEl.style.gap = "20px";
timerEl.style.display = "flex";

const fieldValueEls = document.querySelectorAll('.value');
fieldValueEls.forEach(
    element => (
      (element.style.fontSize = "40px"),
      (element.style.display = "flex"),
      (element.style.flexDirection = "column"),
      (element.style.alignItems = "center")
    )
  );