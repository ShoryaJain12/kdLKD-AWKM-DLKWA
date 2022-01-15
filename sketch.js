var trex, trex_running, edges;
var groundImage, ground;
var invisGround;
var r;
var cloud;
var cloudImage;

function preload(){
 trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
 groundImage=loadImage("ground2.png")
 cloudImage=loadImage('cloud (1).png')
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex=createSprite(50,150,10,50);
  trex.addAnimation("running",trex_running);
  //adding scale and position to trex
  trex.scale=0.4;

  ground=createSprite(300,160,600,30);
  ground.addImage("ground", groundImage)
  ground.velocityX=-5;

  invisGround = createSprite(300,170,600,10);
  invisGround.visible = false;
  r=Math.round(random(10,100));
  console.log(r);
}


function draw(){
  //set background color 
  background("white");


  //logging the y position of the trex
  
  //text(trex.y,);
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y>140) {
    trex.velocityY=-7;
    
  }
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

  trex.velocityY=trex.velocityY+0.5
  //stop trex from falling down
  trex.collide(invisGround);
  spawnClouds();
   
  drawSprites();
 
}
function spawnClouds() {
  if(frameCount%60==0) {
    cloud=createSprite(600,r,10,10);
    cloud.velocityX=-5;
    cloud.addImage(cloudImage);
    trex.depth=cloud.depth+1;
  }
}
