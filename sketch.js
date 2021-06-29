var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg= loadImage("grass.png");
  leafImg=loadImage("leaf.png");
  orangeLeafImg=loadImage("orangeLeaf.png");
  redImageImg=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var selectImages=Math.round(random(1,3));
  if(frameCount%80===0){
    if(selectImages==1){
      createapples();

    }
    else if(selectImages==2){
      createorangeLeaf();
    }
    else{
      createredImage();
    }
  }
}
function createapples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.06;
  apple.velocityY=3;
  apple.lifetime=200;
}

function createorangeLeaf(){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg)
  orangeLeaf.scale=0.06;
  orangeLeaf.velocityY=3;
  orangeLeaf.lifetime=200;
}

function createredImage(){
  redImage=createSprite(random(50,350),40,10,10);
  redImage.addImage(redImageImg)
  redImage.scale=0.06;
  redImage.velocityY=3;
  redImage.lifetime=200;
}