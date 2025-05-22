function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(28,37,60);
  
  
 ///////////SPACESHIP//////////////
  
  push()
  fill(255,255,0)
  rect(100, 290, 120, 120); //yellow light
  pop()
  
  push()
  fill(255,255,0)
  rotate(-0.7)
  rect(-140, 370, 100, 140); //yellow light
  pop()
  
  beginShape()
  fill(96,96,96)
  stroke(0)
  strokeWeight(1)
  vertex(93,209)
  vertex(95,171)
  vertex(122,210) //signal triangle top
  endShape(CLOSE)
  
  circle(95, 173, 17); //signal circle
  
  
  push()
  fill(96,96,96)
  stroke(0)
  strokeWeight(1)
  rotate(-0.3)
  ellipse(40, 270, 90, 100); //top
  pop()
  
  push()
  fill(96,96,96)
  stroke(0)
  strokeWeight(1)
  rotate(-0.3)
  ellipse(40, 330, 290, 100); //gray outline
  pop()
  
  push()
  fill(0,102,102)
  rotate(-0.3)
  ellipse(40, 270, 84, 92); //top blue tint
  pop()
  
  push()
  fill(76,0,153)
  rotate(-0.3)
  ellipse(40, 330, 280, 90); //purple tint
  pop()
  
  push()
  fill(229,246,71)
  rotate(-0.3)
  ellipse(-60, 330, 30, 20); //headlights 1
  pop()
  
  push()
  fill(229,246,71)
  rotate(-0.3)
  ellipse(1, 330, 30, 20); //headlights 2
  pop()
  
  push()
  fill(229,246,71)
  rotate(-0.3)
  ellipse(80, 330, 30, 20); //headlights 3
  pop()
  
  push()
  fill(229,246,71)
  rotate(-0.3)
  ellipse(140, 330, 30, 20); //headlights 4
  pop()
  
  
  
  /////////////ALIEN///////////////

  noStroke()
  fill(140,179,135)
  ellipse(190, 210, 80, 130); //jaw
  
  
  noStroke()
  fill(140,179,135)
  circle(190, 190, 120); //upper head
  
  push()
  noStroke()
  rotate(0.3)
  fill(0,0,0)
  ellipse(270, 120, 35, 60); //right eye
  pop()
  
  push()
  noStroke()
  rotate(-0.3)
  fill(0,0,0)
  ellipse(93, 233, 35, 60); //left eye
  pop()
  
  push()
  noStroke()
  rotate(-0.3)
  fill(255,255,255)
  ellipse(103, 233, 4, 4); //left eye small white
  pop()
  
  push()
  noStroke()
  rotate(-0.5)
  fill(255,255,255)
  ellipse(55, 235, 6, 14); //left eye long white
  pop()
  
  
  push()
  noStroke()
  rotate(-0.3)
  fill(255,255,255)
  ellipse(145, 247, 4, 4); //right eye small white
  pop()
  
  push()
  noStroke()
  rotate(0.38)
  fill(255,255,255)
  ellipse(268, 88, 6, 14); //right eye long white
  pop()
  
  
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(180, 240, 58, 30, 0, PI / 4); //smirk
  
  fill(140,179,135)
  noStroke()
  rect(175, 260, 30, 140); //torso
  
  push()
  rotate(0.7)
  rect(296, 98, 25, 67, 20); //left arm humerus
  pop()
  
  push()
  rotate(-0.6)
  ellipse(-70, 369, 23, 80); //left forearm
  pop()
  
  push()
  rotate(-0.6)
  rect(6, 343, 25, 67, 20); //right arm humerus
  pop()
  
  push()
  rotate(0.3)
  ellipse(330, 199, 23, 80); //left forearm
  pop()
  
  push()
  stroke(0)
  strokeWeight(0.5)
  line(190, 370, 190, 400); //legs
  pop()
  
  
  ////////////////OBJECTS////////////////////
  

  
  push()
  fill(226, 123, 88)
  stroke(0)
  strokeWeight(0.8)
  circle(340, 60, 100); //mars whole circle thing
  pop()
  
  
  fill(199, 107, 92)
  arc(291, 50, 190, 25, 0, PI / 4); //top layer dark red orange of mars
  
  push()
  rotate(-1.4)
  arc(-13, 345, 75, 91, 2, PI + QUARTER_PI, CHORD);
  pop()
  
  push()
  fill(173, 97, 85)
  stroke(0)
  strokeWeight(0.4)
  ellipse(310, 69, 17, 11); //crater
  pop()
  
  push()
  fill(173, 97, 85)
  rotate(-0.3)
  stroke(0)
  strokeWeight(0.6)
  ellipse(345, 150, 12, 21); //crater
  pop()
  
  push()
  fill(173, 97, 85)
  rotate(0.3)
  stroke(0)
  strokeWeight(0.6)
  ellipse(315, -60, 21, 24); //crater
  pop()
  
  push()
  fill(173, 97, 85)
  rotate(0.3)
  stroke(0)
  strokeWeight(0.6)
  ellipse(380, -30, 8, 11); //crater
  pop()
  
  push()
  fill(173, 97, 85)
  rotate(0.3)
  stroke(0)
  strokeWeight(0.6)
  ellipse(373, -17, 8, 11); //crater
  pop()
  
  
  push()
  fill(173, 97, 85)
  rotate(-0.3)
  stroke(0)
  strokeWeight(0.8)
  ellipse(314, 160, 22, 21); //crater
  pop()
  
  push()
  fill(173, 97, 85)
  rotate(-0.9)
  stroke(0)
  strokeWeight(0.8)
  ellipse(128, 310, 12, 21); //crater
  pop()
  
/////////////////STARS//////////////////
  
  fill(255,255,255)
  noStroke()
  triangle(30, 75, 40, 60, 50, 75); 
  triangle(30, 75, 40, 90, 50, 75);
  
  triangle(91, 34.5, 101, 25, 110, 35);
  triangle(91, 34.5, 100.5, 45, 110, 35);
  
  beginShape()
  vertex(212,67)
  vertex(220,57)
  vertex(228,67)
  vertex(220,77)
  endShape(CLOSE)
  
  beginShape()
  vertex(207,67)
  vertex(220,50)
  vertex(233,67)
  vertex(220,87)
  endShape(CLOSE)
  
  beginShape()
  vertex(109,98)
  vertex(116,90)
  vertex(123,98)
  vertex(116,106)
  endShape(CLOSE)
  
  beginShape()
  vertex(304,157)
  vertex(310,150)
  vertex(316,157)
  vertex(310,165)
  endShape(CLOSE)
  
  beginShape()
  vertex(338,157)
  vertex(350,140)
  vertex(363,157)
  vertex(350,175)
  endShape(CLOSE)
  
   beginShape()
  vertex(58,140)
  vertex(66,129)
  vertex(74,140)
  vertex(66,150)
  endShape(CLOSE)
  
  
}
