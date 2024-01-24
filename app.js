const buttons = document.querySelectorAll("button");
const texts = document.querySelectorAll("h3");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (texts[index].style.display === "block") {
      button.innerHTML = "+";
      texts[index].style.display = "none";
    } else {
      button.innerHTML = "-";
      texts[index].style.display = "block";
    }
  });
});
