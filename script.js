window.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");

  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.opacity = "0.3";
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      if (!square.dataset.baseColor) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        square.dataset.baseColor = `${r},${g},${b}`;
      }

      let currentOpacity = parseFloat(square.dataset.opacity);
      currentOpacity = Math.min(currentOpacity + 0.1, 1);
      square.dataset.opacity = currentOpacity.toString();

      square.style.backgroundColor = `rgba(${square.dataset.baseColor}, ${currentOpacity})`;
    });
  }

  let button = document.querySelector(".button");
  button.addEventListener("click", () => {
    let userInput = Number(prompt("Enter the number of squares per side (max 100):"));
    while (userInput > 100 || userInput < 1 || isNaN(userInput)) {
      userInput = Number(prompt("The number must be between 1 and 100:"));
    }

    container.innerHTML = "";
    for (let i = 0; i < userInput * userInput; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.opacity = "0.3";
      square.style.flex = `0 0 calc(100% / ${userInput})`;
      square.style.aspectRatio = "1 / 1";
      square.style.border = "0.5px solid black";
      container.appendChild(square);

      square.addEventListener("mouseover", () => {
        if (!square.dataset.baseColor) {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          square.dataset.baseColor = `${r},${g},${b}`;
        }

        let currentOpacity = parseFloat(square.dataset.opacity);
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        square.dataset.opacity = currentOpacity.toString();

        square.style.backgroundColor = `rgba(${square.dataset.baseColor}, ${currentOpacity})`;
      });
    }
  });
});

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});