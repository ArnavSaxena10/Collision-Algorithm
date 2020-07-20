var movingRect, fixedRect;

function setup() {
  createCanvas(1200,600);
  
movingRect = createSprite(600,300,100,100);
fixedRect = createSprite(200,500,60,60);
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor='green';
    fixedRect.shapeColor='purple';
  }

  drawSprites();
}