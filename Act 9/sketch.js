let table; //variable to store the data
let images = {}; //to store the flag images

function preload(){
  table = loadTable('Act 9 real - Sheet1.csv', 'csv', 'header'); //loads the csv data file and stores it in table

//stores all of the flag images in the images object
images['Japan'] = loadImage('japan.png');
images['Taiwan'] = loadImage('taiwan.png');
images['Singapore'] = loadImage('singapore.png');
images['Hong Kong'] = loadImage('hong kong.png');
images['China'] = loadImage('china.png');
images['South Korea'] = loadImage('south korea.jpg');
images['Belarus'] = loadImage('belarus.png');
images['Finland'] = loadImage('finland.png');
images['Liechtenstein'] = loadImage('li.png');
images['Germany'] = loadImage('Germany.png');

}


function setup(){
  createCanvas(1400,500);
  textAlign(CENTER)
  textSize(12)
}

function draw(){
  background(255);
  
  let barWidth = 80; //width of bars
  let gap = 20; //gap between bars
  
  
  for (let i = 0; i < table.getRowCount(); i++){
    let country = table.getString(i, 'COUNTRY'); //gets the country name from the table at the country column in the csv data
    let iq = table.getNum(i, 'IQ'); //gets the IQ numbers from the table at the IQ column in the csv data
    
   
    
    let x = 50 + i * (barWidth + gap); //gets the x position for each bar and is spaced by barWidth and gap
    let barHeight = map(iq, 100, 110, 50, 450); //the maps shows that my iq numbers are in the range of 100-110, then the height of the bar will range from 50-450
    let y = height - barHeight - 50; //to masure sure that it starts from the bottom and won't float in the canvas
    
    
    fill(0);
    rect(x, y, barWidth, barHeight);
  
    
    if(images[country]) { 
      let imgHeight = barHeight - 10; //image height is slightly smaller than the bar height
      let imgWidth = barWidth - 10; //image width is slightly smaller than the bar width
      image(images[country], x + 5, y + 5, imgWidth, imgHeight); //make the country image inside the bar
    }
    
  fill(0);
    text(country, x + barWidth / 2, height - 25); //text is below the bar
    text(iq, x + barWidth / 2, height - 10); //text is below the country name
  }
}