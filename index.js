// dice immage 1
randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomNumber1 + ".png";
var imageSource= "images/" + randomImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);


// dice image 2
randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+ randomNumber2 + ".png";
var imageSource2 = "images/" + randomImage2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2); 

// winner heading

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else if ( randomNumber1 === randomNumber2 ){
    document.querySelector("h1").innerHTML = "Draw!";
}