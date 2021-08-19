var ship, Ship_swimming, edges;
var seaImg;
var Sea;
function preload(){
  Ship_swimming = loadAnimation("ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(900,600);

  Sea = createSprite(400,180,400,20);

  Sea.addImage(seaImg);

  ship = createSprite(300,180,600,50);
  ship.addAnimation("ship-3", Ship_swimming);
  edges = createEdgeSprites();

  ship.scale = 0.5;
  }

function draw() {
  background("blue");
 
  Sea.velocityX = -2;

  if(Sea.x < 0) {
    Sea.x = Sea.width/2;
  }

  //ship.collide(Sea);
  drawSprites();
}

