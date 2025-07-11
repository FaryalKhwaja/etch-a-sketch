let container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
});
}

console.log(container);

let button = document.querySelector(".button");
button.addEventListener("click", () => {
    let userInput = Number(prompt("Enter the number of squares per side (max 100):"));
    while (userInput > 100 || userInput < 1 || isNaN(userInput)) {
      userInput = Number(prompt("The number must be between 1 and 100:"));
    }

    container.innerHTML= "";
    for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex  = `0 0 calc(100% / ${userInput})`;
    square.style.aspectRatio = '1 / 1';
    square.style.border = "1px solid black";                 

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }

});
