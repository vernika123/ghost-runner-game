var ghost , ghostImg
var tower , towerImg
var climber, climberImg
var door, doorImg
var doorsgroup
var climbersgroup
var gameState= "play"


function preload () {
towerImg=loadImage("tower.png")
doorImg=loadImage("door.png")
climberImg=loadImage("climber.png")
ghostImg=loadImage("ghost-standing.png")
}
 function setup () {
   createCanvas (600,600)
   tower=createSprite(300,300)
   tower.addImage(towerImg)
   tower.velocityY= 3
   
   ghost=createSprite (300,400,0,6)
   ghost.addImage(ghostImg)
   ghost.scale= 0.6 
   
   doorsgroup = new Group ()
   climbersgroup= new Group ()
   
 }


 function draw () {
   
   background("blue")
    
   if  (gameState === "play" ){
     
  
   if (tower.y > 400 ) {
     tower.y= 300
   }
    
   if (keyDown("left")  ){
     ghost.x = ghost.x - 4 
     
   }
   
     if (keyDown("right")  ){
     ghost.x = ghost.x + 4 
     
   }
    
     if (keyDown("space")  ) {
       ghost.velocityY= - 6
     }
      ghost.velocityY =  ghost.velocityY  + 0.9
  
   if (climbersgroup.isTouching (ghost)) {
     ghost.velocityY= 0 
     gameState = "end"
   }
   
   spawnDoors () 
   }
   
   drawSprites ()
  if ( gameState === "end" ) {
   textSize (30)
    fill ("yellow")
    text ("game over", 250,300)
   
  }
 } 

function spawnDoors () {
if (frameCount%240===0) {
  door=createSprite (100,300,30,40)
  climber=createSprite(100,365,30,40)
  climber.addImage(climberImg)
  door.addImage(doorImg)
  door.velocityY= 3
  door.x= Math.round(random(100,500))
  climber.x = door.x
  climber.velocityY = 3
  doorsgroup.add (door)
  climbersgroup.add (climber)
}
   }
   