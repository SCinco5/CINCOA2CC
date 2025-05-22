let amp; //variable for detecting the vol level of music
let mcbg; //background image 

function preload() {
  sound = loadSound('Love Like You - Steven Universe (music box cover).mp3');
  mcbg = loadImage('minecraft-video-games-pixel-art-hd-wallpaper-preview.jpg')
}


function setup() {
  createCanvas(600, 400);
  sound.loop() //to loop the song
  amp=new p5.Amplitude(); 
}

function draw() {
  background(0, 30); //to have a semi-transparent black background over the background image to make it look like nostalgia
  image(mcbg, 0, 0, width, height); //to make the bg image fit the canvas
  filter(BLUR, 3);
  tint(255, 25)
  noStroke();
  let level = amp.getLevel(); //gets current vol level of music, number changes as the music plays
  fill(random(100,200), random(0,60), random(150,255),95); //randomized colors of the audio shape
  
  let sizeUp = map(level, 0,1,0,width/2); //changes the size of the shape when the volume changes
  circle(width/2, height/2, sizeUp*10 );
}