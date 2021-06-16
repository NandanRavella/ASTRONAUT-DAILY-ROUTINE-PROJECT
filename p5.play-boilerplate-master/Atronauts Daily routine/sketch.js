
function preload(){
  bg= loadImage("images/iss.png")
  sleep= loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png")
}


function setup() {
  createCanvas(800,400);

  bcg = createSprite(400,200)
  bcg.addAnimation("bcgIMG",bg)
  bcg.scale = 0.1
 
  astronaut = createSprite(400,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1

  
}



function draw() {
  background(255,255,255);  
  drawSprites();
  

  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("UP_ARROW")){  
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")    
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat)
      astronaut.changeAnimation("eating")
      astronaut.velocityX = 0
      astronaut.velocityY = 0
    }

    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("drinking",drink)
      astronaut.changeAnimation("drinking")
      astronaut.velocityX = 0
      astronaut.velocityY = 0
    }
    if(keyDown("B")){
      astronaut.addAnimation("bathing",bath)
      astronaut.changeAnimation("bathing")
      astronaut.velocityX = 0
      astronaut.velocityY = 0
    }
    if(keyDown("S")){
      astronaut.addAnimation("sleeping",sleep)
      astronaut.changeAnimation("sleeping")
      astronaut.velocityX = 0
      astronaut.velocityY = 0
    }
      
}
