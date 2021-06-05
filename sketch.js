var sea,seaimg;
var ship, shipimg;
function preload(){
seaimg=loadImage("sea.png")
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,100) 
  sea.addImage(seaimg);
  sea.velocityX=-3;
  ship=createSprite(200,200)
  ship.addAnimation("ship",shipimg)
  ship.scale=0.4
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;
  }
 drawSprites();
}