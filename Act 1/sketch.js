function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204, 153, 255);
  
  
  //hood of car
  
  fill(76,0,153)
 rect(79, 268, 70, 30, 900, 350, 900, 5); //front hood
  
  
  fill(76,0,153)
 rect(261, 268, 70, 30, 900, 350, 900, 5); //trunk
  
  
  //rooftop of car
  
  fill(0,0,0)
 rect(135, 249, 150, 50, 900, 350, 900, 5);
  
  
  
  
  // WINDOWS
  
  fill(32,32,32)
  square(140, 252, 56, 100, 15, 30, 3); //left window
  
  fill(32,32,32)
  square(209, 252, 56, 10, 90, 100, 3); //right window
  
  
  
 
  // spoiler
  
  
  fill(0,0,0)
  triangle(297, 280, 325, 253, 317, 280); //holdin the rect
  
  fill(0,0,0)
  rect(308, 250, 26, 10);
  
  
  
  
  
  // BASE OF CAR
  
  fill(76,0,153)
  rect(80, 274, 250, 20); //upper base of car
  
  fill(76,0,153)
  rect(69, 288, 270, 20, 20); //lower base of car
  
  
   //headlight
  
  fill(0,255,255)
  rect(82, 277, 12, 7);
  
  
  //plate
  
  fill(255,255,255)
  rect(68, 293, 4, 12);
  
  
  //doors
  
  fill(76,0,153)
  rect(140, 275, 59, 30, 20, 1500, 10, 5); //left door
  
  fill(76,0,153)
  rect(210, 275, 59, 30, 20, 1500, 10, 5); //right door
  
  fill(76,0,153)
  rect(180, 285, 10, 3); //left handle
  
  fill(76,0,153)
  rect(252, 285, 10, 3); //right handle
  
  
  
  //rear view mirror
  fill(76,0,153)
  rect(139, 264, 14, 8, 18, 1500, 10, 5); 
  
  //WHEELS
  
  fill(0, 0, 0);
  circle(110, 300, 35); //black wheels left
  
  fill(192, 192, 192);
  circle(110, 300, 20); //white tires thing left
  
  fill(0, 0, 0);
  circle(290, 300, 35); //black wheels right
  
  fill(192, 192, 192);
  circle(290, 300, 20); //white tires thing right
  
  fill(0, 0, 0);
  line(120, 290, 100, 310); //the '/'  in left wheel
  
  fill(0, 0, 0);
  line(102, 294, 120, 310); // the '\' in left wheel
  
  fill(0, 0, 0);
  circle(110, 300, 7); //smol middle black wheels left
  
  fill(0, 0, 0);
  line(299, 293, 280, 310); // the '/' in right wheel
  
  fill(0, 0, 0);
  line(280, 290, 300, 310); // the '\' in right wheel
  
  fill(0, 0, 0);
  circle(290, 300, 7); //smol middle black wheels left
  
  
  
  
}