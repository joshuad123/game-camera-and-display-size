var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,cars=[];

var form, player, game;


function setup(){
  canvas = createCanvas(windowWidth -20,windowHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth,displayHeight);
  console.log(windowWidth,windowHeight);
}


function draw(){
  background("yellow");
    if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
