let container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
})
}

console.log(container);

let button = document.querySelector(".button");

button.addEventListener("click", () => {
  // 🔥 Ask for input and convert to number
  let userInput = Number(prompt("Enter the number of squares per side (max 100):"));

  // 🔁 Keep asking until it's valid
  while (userInput > 100 || userInput < 1 || isNaN(userInput)) {
    // 💀 If you miss this assignment, the loop NEVER ends
    userInput = Number(prompt("The number must be between 1 and 100:"));
  }

  // ✅ Clear previous grid
  container.innerHTML = "";

  // 📏 Calculate square size
  let squareSize = 960 / userInput;

  // 🎨 Create the new grid
  for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // ✏️ Add the hover drawing effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
});
