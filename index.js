// var randomNumber1 = Math.random();
// randomNumber1 *= 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
// console.log(randomNumber1);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;//generates random number from 1 to 6

var randomDice = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";

else if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";

else
document.querySelector("h1").innerHTML = "🚩Match Draw🚩";