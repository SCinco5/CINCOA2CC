function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  angleMode(RADIANS); //makes sure that it uses radians for rotation instead of degrees (radians are another way to measure angles)
}

function draw() {
  //add background(0,30) js in case its supposed to be like those ghost trails and di nagststay ung trails
  fill(random(0), random(10), random(255), 90); //random colors and last number is the transparency
  let triangleobj = random (30,50); //random size of triangle
  let angle = random(TWO_PI); //picks a random angle in radians so that it can rotate in any direction
  translate (mouseX, mouseY); //follows the cursor
  rotate(angle); //rotates the triangle by the angle in which I've added
  
  let x1 = -triangleobj / 2; //the placements/coordinates for the triangle on the cursor
  let y1 = triangleobj / 2;
  
  let x2 = triangleobj / 2;
  let y2 = triangleobj / 2;
  
  let x3 = 0;
  let y3 = -triangleobj / 2;
  
  triangle(x1,y1,x2,y2,x3,y3); //calls out the triangle and uses the functions "let"
  
  
  //NOTE: PI = 180, PI/2 = 90, TWO_PI = 360
}