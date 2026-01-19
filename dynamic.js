let elem = document.querySelector(".instructionshead");
let elem2 = document.querySelector(".instructionstext");
let elem3 = document.querySelector(".instructionshead img");
let isdown = false;
elem.addEventListener("click", () => {
    elem2.classList.toggle("display");
    if (isdown)
        elem3.setAttribute("src", "./svg/lefthandpointer.svg");
    else
        elem3.setAttribute("src", "./svg/downhandpointer.svg");

    isdown = !isdown;
})

let elem4 = document.querySelector(".img1");
let elem5 = document.querySelector(".img2");
let elem6 = document.querySelector(".clickme");
let elem7 = document.querySelector(".playerwins");
let images = ["./svg/diceone.svg", "./svg/dicetwo.svg", "./svg/dicethree.svg", "./svg/dicefour.svg", "./svg/dicefive.svg", "./svg/dicesix.svg"];

elem6.addEventListener("click", () => {
    let rand1 = Math.floor((5 * Math.random()) + 1);
    let rand2 = Math.floor((5 * Math.random()) + 1);
    if (rand1 > rand2) {
        elem7.innerText = "PLAYER 1 WINS 🎉";
    }
    else if (rand1 < rand2) {
        elem7.innerText = "PLAYER 2 WINS 🎉";
    }
    else {
        elem7.innerText = "IT IS A TIE ☹️";
    }
    elem4.src = images[rand1];
    elem5.src = images[rand2];

})