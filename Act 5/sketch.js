var word= "guess who"
var font1;
function preload()
{
  font1 = loadFont("who asks satan.ttf");
}

function setup() {
  createCanvas(600, 400);
  textFont(font1,100); //font used 
  textSize(60)
}

function draw(){
  background(226, 216, 182,65); //the last value basically refreshes late, making a trail of the word
  fill(random(200), random(90), random(140)); //randomized color of the word
  text(word,mouseX, mouseY); //the variable word used from the top, and it follows where you put your cursor in
}