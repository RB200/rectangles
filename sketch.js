var rect, movingRect


function setup() {
  createCanvas(800,400);
  rect = createSprite(400, 300, 80, 50);
  rect.shapeColor = "orange"
  movingRect = createSprite(300,300,50,80)
  movingRect.shapeColor = "orange"
  movingRect.velocityX=4
  rect.velocityX=-4
  //movingRect.velocityY=-4
  //rect.velocityY=4
}

function draw() {
  background(0); 
  /*movingRect.x=mouseX
  movingRect.y=mouseY
  if(movingRect.x-rect.x<movingRect.width/2+rect.width/2 && rect.x-movingRect.x<movingRect.width/2+rect.width/2){
    rect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  } 
  else{
    rect.shapeColor = "orange"
    movingRect.shapeColor = "orange"
  }*/
  if(movingRect.y-rect.y<movingRect.height/2+rect.height/2 && rect.y-movingRect.y<movingRect.height/2+rect.height/2){
    movingRect.velocityY=movingRect.velocityY*(-1)
    rect.velocityY=rect.velocityY*(-1)
  }
  if(movingRect.x-rect.x<movingRect.width/2+rect.width/2 && rect.x-movingRect.x<movingRect.width/2+rect.height/2){
    movingRect.velocityX=movingRect.velocityX*(-1)
    rect.velocityX=rect.velocityX*(-1)
  }
  drawSprites();
}