const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColors = "#";
    const randomNumber = getRandomNumber();
    for (let i = 0; i < 6; i++) {
        hexColors += hex[randomNumber];
    }

    document.getElementById("bg-color").style.backgroundColor = hexColors;
    color.textContent = hexColors;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}