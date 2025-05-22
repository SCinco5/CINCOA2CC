function preload() {
pic = loadImage("image_2025-02-25_125444642.png"); //to load the image ill display in the canvas
}

function setup() {
createCanvas(470, 400);
  noStroke()
}

function draw() {
background(0,25,51);

push() // to save only this design so it wont affect the other codes ill do
let x = random(width)
let y = random(height)

let r = random(20,80);

fill(random(255), random(0), random(255), 70 )
ellipse(x,y,r,r);

  
  
fill(255); // White text
textAlign(CENTER, CENTER);
textSize(r / 3);
text("yuh", x, y);
pop()

push()
beginShape() //the pointy thing on text bubble to show as if its a text message
noStroke()
vertex(180,220)
vertex(170,240)
vertex(218,230)
endShape(CLOSE)

push();
noStroke();
rect(170, 160, 200, 80, 40); //text bubble
pop();

textSize(30);
textAlign(CENTER, CENTER);
textFont('Courier New');
text("want kfc?", 270, 200); 

beginClip(); 
ellipse(90, 200, 100, 100);  //used to mask the image I used inside the circular area as if its a profile pic
endClip();

image(pic, 10, 100, 180, 200);
}