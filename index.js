

function dice1(){
var randomNumber1 =Math.floor(Math.random()*6)+1;

if (randomNumber1===0){
  randomNumber1++
 }

  return randomNumber1;
}

var randomNumber1=dice1();

var randomDiceImage = "C:\\Users\\WARMACHINE\\Documents\\Web Development\\Dicee Challenge\\images\\dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);


function dice2(){
var randomNumber2 =Math.floor(Math.random()*6)+1;

if (randomNumber2===0){
  randomNumber1++
 }

  return randomNumber2;
}

var randomNumber2=dice2();

var randomDiceImage2="C:\\Users\\WARMACHINE\\Documents\\Web Development\\Dicee Challenge\\images\\dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);


if(randomDiceImage>randomDiceImage2){
  document.querySelector("h1").innerHTML="Play 1 Wins!";
}
 else if (randomDiceImage2>randomDiceImage) {
   document.querySelector("h1").innerHTML="Play 2 Wins";
 }

else {document.querySelector("h1").innerHTML="Draw!";
}
