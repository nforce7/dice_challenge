var myImage = document.querySelector('.kocka1');
var myImage2 = document.querySelector('.kocka2');

function changeImage() {
  //var mySource = myImage.getAttribute('src');

  //random broj (random index)
  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;

  //random broj (random index)
  var randomNumber2 = Math.random();
  randomNumber2 = randomNumber2 * 6;
  randomNumber2 = Math.floor(randomNumber2) + 1;

  if (randomNumber1 === 6) {
    myImage.setAttribute('src', "images/dice6.png");
  } else if (randomNumber1 === 5) {
    myImage.setAttribute('src', "images/dice5.png");
  } else if (randomNumber1 === 4) {
    myImage.setAttribute('src', "images/dice4.png");
  } else if (randomNumber1 === 3) {
    myImage.setAttribute('src', "images/dice3.png");
  } else if (randomNumber1 === 2) {
    myImage.setAttribute('src', "images/dice2.png");
  } else if (randomNumber1 === 1) {
    myImage.setAttribute('src', "images/dice1.png");
  }

  if (randomNumber2 === 6) {
    myImage2.setAttribute('src', "images/dice6.png");
  } else if (randomNumber2 === 5) {
    myImage2.setAttribute('src', "images/dice5.png");
  } else if (randomNumber2 === 4) {
    myImage2.setAttribute('src', "images/dice4.png");
  } else if (randomNumber2 === 3) {
    myImage2.setAttribute('src', "images/dice3.png");
  } else if (randomNumber2 === 2) {
    myImage2.setAttribute('src', "images/dice2.png");
  } else if (randomNumber2 === 1) {
    myImage2.setAttribute('src', "images/dice1.png");
  }

  // tekst tko je pobijedio
  if (randomNumber1 > randomNumber2) {
    document.getElementById("naslov").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementById("naslov").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.getElementById("naslov").innerHTML = "Draw!";
  }
}