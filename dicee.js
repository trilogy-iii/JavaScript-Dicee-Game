//var jsCheck = document.querySelector("h1").onload = alert("Is working!");

var randomNumber1 = Math.floor((Math.random() * 6) + 1); //random number 1-6
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images.dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; /*querySelector sees both images in the 
    HMTL,but I'm selecting the first image with index [0]*/
    image1.setAttribute("src", randomImageSource);/*I'm tapping into the "src" element and
        setting it to randomImageSource (which = images/randomNumber1.png). This gives me a
        source file between mages.dice1.png - images/dice6.png*/

var randomNumber2 = Math.floor((Math.random() * 6) + 1); /*I need a different random number
    for my second image, so I'm defining a new one (still 1-6)*/
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //same as before but 2
var randomImageSource2 = "images/" + randomDiceImage2; // same as before but 2

 var image2 = document.querySelectorAll("img")[1];//selecting my second image element.
    image2.setAttribute("src", randomImageSource2);

var winningH1 = document.querySelector("h1");/* Using querySelector to nab the h1, 
 then give that location the name "winningH1" to be used later.*/

 /*I want the h1 to tell the players who won. To do this, I'll need a few if-statements.
 randomImageSource(1 or 2) are strings, so I used randomNumber(1 or 2) because 
 they're actually numbers. */
if (randomNumber1 > randomNumber2) { //if Player One's number is greater than Player Two's...
    winningH1.innerHTML = "Player One Wins!"; //Tapping into the .innerHTML 
}
if (randomNumber1 < randomNumber2) { //if Player One's number is less than Player Two's...
    winningH1.innerHTML = "Player Two Wins!"; //Tapping into the .innerHTML 
}
if (randomNumber1 === randomNumber2) { //if both Player numbers are equal...
    winningH1.innerHTML = "It's a Draw!";//Tapping into the .innerHTML 
}