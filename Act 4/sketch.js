var ellipseSize=60; //to set the size of the shapes

function setup() {
  createCanvas(400, 400);
  translate (ellipseSize/5, ellipseSize/3); //moving the shapes a little bit down and to the right to space the shapes better
  
  for (var x=4; x < width; x+=ellipseSize) //this is the outer for loop also shaping shapes horizontally
    {
      for (var y=0; y < height; y+=ellipseSize) //this is the inner for loop, for each position, it moves vertically down the canvas because of the ellipseSize
        {
          fill(15)
          ellipse(x,y,ellipseSize,ellipseSize); //first shape I drew in each grid
          
          fill(random(100), random(0), random(170)) //the randomized shades of purple
          rect(x,y,ellipseSize,ellipseSize); //same size as the ellipse but this time overlapse the shape
          
          fill(224,244,244)
          ellipse(x,y,ellipseSize*0.3,ellipseSize*0.3); //basically the small circle in the center of the ellipse
        }
    }
}



