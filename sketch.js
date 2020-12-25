const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var dog;
var happyDog;
var database;
var foodS=20
var foodStock=20
function preload()
{
  dogImg=loadImage("images/dog.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  dog=createSprite(250,250,100,100)
  dog.addImage(dogImg)
  dog.scale=0.3;
  foodS=20
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogImg1)
 // writeStock(foodS)
 foodS=foodS-1
 //dog.addImage(dogImg)

  
}

dog.display()

  drawSprites();
  //add styles here
  textSize(10)
  fill("black")
  stroke(3)
  text("Food Remaining:"+foodS,50,50)

}

function readStock(data){
if(x<=0){
  x=0
}else{
  x=x-1;
}

  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}