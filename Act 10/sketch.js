//basically variables to store the game data which will be essential later on

let snake;
let foods = []; //array of food positions since theres a lot
let gridSize = 40;
let cols, rows;
let totalFood = 15;
let startTime;
let gameOver = false;
let win = false;
let gameStarted = false;
let bgPic;

let eatingSound, winSound, loserSound, foodPic;


function preload() {
  eatingSound = loadSound('eating reeyal.mp3');
  loseSound = loadSound('lose.mp3');
  winSound = loadSound('win.mp3');
  bgPic = loadImage('act10.png');
  cartFont = loadFont('ThaleahFat.ttf');
  foodPic = loadImage('goldenappol.png');
  gameScreen = loadImage ('gamescreen.png')
}

function setup(){
  createCanvas(600,400);
  cols = floor(width / gridSize); //to calculate how many columns fit
  rows = floor(height / gridSize); //to calculate how many rows fit
  noLoop();
}

function draw() {
  background(240);
  
  if(!gameStarted) {
    drawTitleScreen(); //shows the title screen
    return;
  }
  
  image(bgPic, 0, 0, width, height); //show the background pic in the game
  drawGrid(); //shows the grid
  
  if(gameOver) {
    showGameOver(); //shows if you win or lose screen
    return;
  }
  
  let elapsed = floor((millis() - startTime) / 1000);
  let remaining = max(0, 120 - elapsed);
  let gameSpeed = map(elapsed, 0, 120, 5, 20);
  frameRate(gameSpeed);
  
  //this calculates how much time has passed, how much time is left, and adjust the timing of the game
  
  fill(255);
  textSize(19);
  text("Time Left: " + remaining +"s", 100, 20); //shows a timer
  
  if (remaining <= 0 && !win) {
    gameOver = true;
    loseSound.play(); // if the timer runs out, meaning you lost and it will play a music
  }
  snake.update();
  snake.show(); //updates the snakes movement every now and then in the screen 
  
  for (let i = 0; i < foods.length; i++) {
    image(foodPic, foods[i].x + 4, foods[i].y + 4, gridSize - 8, gridSize - 8); //to draw the food pics a little bit smaller so they fit properly inside each squares
  }
  
  for (let i = foods.length - 1; i >=0; i--) {
    if (snake.eat(foods[i])) { //if snake eats food, it will remove that food and play a sound
      foods.splice(i, 1);
      eatingSound.play();
    }
  }
  
  if(foods.length == 0 && !gameOver) { //if the snake eats all the food then you win
    win = true;
    gameOver = true;
    winSound.play();
  }
  
  if (snake.checkCollision()) { //if the snake hits itself or the wall, then you lose
    gameOver = true;
    loseSound.play();
  }
}

function keyPressed(){
  if(!gameStarted && key === 'Enter'){ //you can also start the game by pressing enter
    startGame();
  }
  //moves the snake using the WASD keys
  if (key === 'w') snake.setDir(0, -1); //setDir changes direction
  if (key === 's') snake.setDir(0,1);
  if (key === 'a') snake.setDir(-1, 0);
  if (key === 'd') snake.setDir(1,0); 
  
}

function mousePressed(){
  if (!gameStarted) {
    if (mouseX > 230 && mouseX < 370 && mouseY > 230 && mouseY < 270) {
      startGame(); // when your cursor lands on this specific position, itll start the game again. that it will on work when you press on the box
    }
  }
  
  if (gameOver){
    if(mouseX > 230 && mouseX < 370 && mouseY > 253 && mouseY < 293) {
      startGame();
    }
  }
}

function startGame(){
  gameStarted = true;
  gameOver = false;
  win = false;
  snake = new Snake();
  placeFoods();
  startTime = millis();
  loop();
  
  //to reset everything and begin the game loop again
}

function drawGrid(){
  stroke(0);
  for(let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += gridSize){
    line(0, y, width, y);
    //to draw vertical and horizontal grid lines
  }
}

function drawTitleScreen(){
  image(gameScreen, 0, 0, width, height);
  fill(255); 
  textFont(cartFont);
  textAlign(CENTER, CENTER);
  textSize(90);
  text("Snake.io", width / 2, height / 2 - 60);
  
  fill (0, 200, 0);
  rect(230, 230, 140, 40, 10);
  fill(255);
  textSize(20);
  text('Click to Start', width / 2, 250);
  
  // shows the title screen and click to start button
}

function showGameOver(){
  // this shows the game result with the final score and a play again button
  background(win ? 'lightgreen' : 'red');
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  if (win) {
    text("Das krazy", width / 2, height / 2 - 40);   
  } else {
    text("Oof...", width / 2, height / 2 - 40);
  }
  
  textSize(20);
  text("Final Length: " + snake.body.length, width / 2, height / 2);
  
  fill(0, 100, 255);
  rect(230, 253, 140, 40, 10);
  fill(255);
  textSize(20);
  text("Play Again", width / 2, 270);
}

function placeFoods() {
  foods = [];
  let spots = []; //to store every possible spot on the grid where the food could go
  for (let x = 0; x < cols; x++) { //this double loop goes through every column which is X in here and every row which is Y of the grid
    for (let y = 0; y < rows; y++) {
      spots.push(createVector(x * gridSize, y * gridSize)); //to calculate the actual location for each grid square. as for the createvector, it creates a 2D point like coordinates
    }
  }
  
  shuffle(spots, true); // to randomly mix up the order of the spots array
  for (let i = 0; i < totalFood; i++) {
    foods.push(spots[i]);
  }
}

class Snake { 
  //runs when the player creates a new snake (by playing the game or starting over)
  constructor() {
    this.body = [createVector(0, 0)]; //array of positions(vectors) representing each square in the grid of the snake's body
    this.xdir = 1; //snake starts moving right
    this.ydir = 0; //doesnt move vertically at first
    this.growAmount = 0; //the growth of the snake will only work if it eats food, so the starting is 0
  }
  
  setDir(x,y) { // this sets the direction of the snake should move from the WASD keys. If the snake has more than one part it checks if the new direction will cause the snake to move backward into itself. If yes, it ignores it (helps prevent reversing). A valid direction updates xdir and ydir
    if (this.body.length > 1) {
      let next = this.body[this.body.length - 1].copy();
      next.x += x * gridSize;
      next.y += y * gridSize;
      let prev = this.body[this.body.length - 2];
      if (next.x == prev.x && next.y == prev.y) return;
    }
    this.xdir = x;
    this.ydir = y;
  }
  
  update() { //moves snake forawrd, makes a copy of the head, adds direction to that copy which moves it, adds the new head to the body. 
    let head = this.body[this.body.length - 1].copy();
    head.x += this.xdir * gridSize;
    head.y += this.ydir * gridSize;
    this.body.push(head);
    
    if (this.growAmount > 0) { //if growAmount is greater than 0 then it keeps the tail and will eventually get longer
      this.growAmount--;
    } else {
      this.body.shift();// if it doesnt grow (by not eating food), keeps the snake at the same length
    }
  }
  
  grow() {
    this.growAmount += 2; //to smake the snake grow by 2 squares
  }
  
  eat(pos) { //this checks if the snakes head position matches the foods positions
    let head = this.body[this.body.length - 1];
    if (head.x == pos.x && head.y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  checkCollision() { //checks if there are errors such as the snake going off the screen or running into any part of its own body.
    let head = this.body[this.body.length - 1];
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (head.x == part.x && head.y == part.y) {
        return true;
      }
    }
    return false;
  }
  
  show() { //draws the snake on the canvas and loops through every part of the body
    for (let i = 0; i < this.body.length; i++) {
      fill (71,73,43);
      rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
    }
  }
}

