
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2

  boy=createSprite(200,200);
  boy.addAnimation("boy", boyImg);
  boy.scale=0.1

  wall1=createSprite(380,200,50,400);
  wall2=createSprite(20,200,50,400);
  wall1.visible = false;
  wall2.visible = false;
  
  bomb=createSprite(300,100);
  bomb.addImage(bombImg);
  bomb.scale = 0.1;

  coin=createSprite(100,100);
  coin.addImage(coinImg);
  coin.scale = 0.4;

  energyDrink=createSprite(200,100);
  energyDrink.addImage(energyDrinkImg);
  energyDrink.scale = 0.1;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }

 boy.x = World.mouseX;
 boy.collide(wall1);
 boy.collide(wall2);
  drawSprites();
}

  

