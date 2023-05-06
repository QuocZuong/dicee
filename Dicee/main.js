const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btn = document.querySelector("button");


btn.addEventListener("click", () => {
    const random1 = Math.floor(Math.random() * 6 + 1);
    const random2 = Math.floor(Math.random() * 6 + 1);
    img1.setAttribute("src", "./images/dice" + random1 + ".png")
    img2.setAttribute("src", "./images/dice" + random2 + ".png")



    if (parseInt(random1) > parseInt(random2)) {
        document.querySelector("h1").innerHTML = "Player 1 win!"

    } else if (parseInt(random1) === parseInt(random2)) {
        document.querySelector("h1").innerHTML = "Draw"

    } else {
        document.querySelector("h1").innerHTML = "Player 2 win!"

    }
})