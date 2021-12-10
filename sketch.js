//creating all variables
var path,boy,energyDrink,coin,bomb,leftBoundary,rightBoundary;
var pathImg,boyImg,coinImg,bombImg;
var a,b,c;
var speed
var lives=3,score=0;


function preload(){
  //load all images and animations
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
//create the canvas
createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
//left invisible boundary
leftBoundary=createSprite(0,0,50,800);
leftBoundary.visible = false;

//right invisible boundary
rightBoundary=createSprite(410,0,50,800);
rightBoundary.visible = false;

//ceating the bomb
bomb=createSprite(206,5,30,30);
bomb.addAnimation("bomb",bombImg);
bomb.scale=0.1;

//creating the coin
coin=createSprite(96,5,30,30);
coin.addAnimation("coin",coinImg);
coin.scale=0.5;
}

function draw() {

  background(0);

  //give the path some velocity
  path.velocityY = 10;
  
  //making the boy followthe mouse pointer's x position
  boy.x = World.mouseX;

  //giving velocity to the coin and the bomb
  bomb.velocityY=10
  coin.velocityY=10
  
  //make it so that boy collides with both the invisible boundaries
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }

 //when bomb touching edges or the boy
  if(bomb.isTouching(edges[3])||bomb.isTouching(boy)){
    respawningbomb()
  }

  //when coin touching edges or the boy
  if(coin.isTouching(edges[3])||coin.isTouching(boy)){
    respawningcoin()
  }

  //when boy touching bomb
  if(bomb.isTouching(boy)){
    lives=lives-1
    console.log("Lives:"+lives)
    console.log("Score:"+score)
    boy.x=206;
    respawningcoin();
    respawningbomb();
  }

  //when boy touches coin
  if(boy.isTouching(coin)){
     score=score+1
     console.log("Lives:"+lives)
     console.log("Score:"+score)
  }

  //losing
  if(lives==0){
    console.log("Game Over")
    boy.x=206;
    path.velocityY=0;
    bomb.velocityY=0
    coin.velocityY=0
    respawningcoin()
    respawningbomb()
  }

  drawSprites();

}
//function for the bomb to be in the starting postion
function respawningbomb(){
  b=Math.round(random(1,3));
  if(b==1){
    bomb.visible=true;
    bomb.x=96;
    bomb.y=5;
  }
  if(b==2){
    bomb.visible=true;
    bomb.x=206;
    bomb.y=5;
  }
  if(b==3){
    bomb.visible=true;
    bomb.x=316;
    bomb.y=5;
  }
}

//function for the coin to be in the starting postion
function respawningcoin(){
  c=Math.round(random(1,3));
  if(c==1){
    coin.visible=true;
    coin.x=96;
    coin.y=5;
  }
  if(c==2){
    coin.visible=true;
    coin.x=206;
    coin.y=5;
  }
  if(c==3){
    coin.visible=true;
    coin.x=316;
    coin.y=5;
  }
}
