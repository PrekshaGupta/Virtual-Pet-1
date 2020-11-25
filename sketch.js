//Create variables here
var dog, happyDog;
var DogImg, happyDogImg;
var database;
var foodS, foodStock;

function preload(){
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  var database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = image(dogImg, 250,400);
  happyDog = image(happyDogImg);

}

function draw() {  
  background(46,139,87);

  if (keyDown(UP_ARROW)){
    writeStock(foodS);
  }

  drawSprites();
  //add styles here

  textSize(10);
  fill(255,0,255);
  stroke("black");
  text("NOTE: Press UP_ARROW Key to feed Drago milk!")

}

//Function to read values from database
function readStock(data){
  foodS = data.val();
}

//Function to write values in database
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
