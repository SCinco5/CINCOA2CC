let userText = "";
let inputMessage = "type any 5 letter word: ";
let img;

function preload(){
  img = loadImage('act 7 pic.png');
}


function setup() {
  createCanvas(800, 600);
  background(0);
  textSize(32);
  fill(255);
  text(inputMessage, 50, 50); //the instruction thats written type a 5 letter word
}

function draw() {
  background(0);
  fill(255);
  text(inputMessage, 50, 50); //to keep showing the instruction
  
  for(let i = 0; i < userText.length; i++) { //shows each letter the different random colors used below
    fill(random(70), random(155), random(255)); // to pick a random color for each letter
    text(userText[i], 50 + i * 30, 100); //to show the letter and have gaps between them
  }
  
  if (img && userText.length > 0) {
    let revealAmount = userText.length * 0.2; //while the user types a letter, each letter reveals a percentage of it. for example they type 'G', it'll reveal 20% of the image.
    
    image(img, 50, 150, img.width * revealAmount, img.height); // shows the pic but only part of its width
  }
}

function keyTyped(){
  if (userText.length < 5) {
    userText += key; //add the letter the user types in the userText box
  }
  return false; //stops the keys from doing other things
}

function keyPressed () {
  if (keyCode === BACKSPACE) {
    userText = userText.substring(0, userText.length - 1); //if you press backspace, it'll remove the letter the user last inputted
  }
}

function mousePressed() {
  userText = ""; //when you click on the canvas, everything the user wrote will erase and start over
}

























