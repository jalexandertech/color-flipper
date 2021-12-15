const simpleColors = ["Purple", "Red", "Green", "RGB(253, 0, 177)", "#F15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.getElementById("bg-color").style.backgroundColor = simpleColors[randomNumber];
    color.textContent = simpleColors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * simpleColors.length);
}


