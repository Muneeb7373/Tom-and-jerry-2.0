var tom, tomImg, tomImg1, tomImg2;
var jerry,jerryImg, jerryImg1,jerryImg2;
var Background,BackgroundImg;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
   tomImg = loadAnimation("images/cat2.png","images/cat3.png");
   tomImg1 = loadAnimation("images/cat1.png")
   tomImg2 = loadAnimation("images/cat4.png")
   jerryImg = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImg1 = loadAnimation("images/mouse1.png");
   jerryImg2 = loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //Background = createSprite(1000,800);
    //Background.addImage(backgroundImg);


    tom = createSprite(900,700,50,50)
    tom.addAnimation("tom standing",tomImg1);
    tom.scale=0.2;

    jerry = createSprite(100,700,50,50)
    jerry.addAnimation("jerry standing",jerryImg1);
    jerry.scale=0.2;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x -jerry.x < (tom.width -jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomlastimage",tomImg1)
    tom.x=200
    tom.scale=0.2
    tom.changeAnimation("tomlastimage")
    jerry.addAnimation("jerrylastimage", jerryImg2)
    jerry.scale=0.2
    jerry.changeAnimation("jerrylastimage")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomrunning",tomImg);   
      tom.changeAnimation("tomrunning")
      jerry.addAnimation("jerryrunning",jerryImg);   
jerry.frameDelay = 25
jerry.changeAnimation("jerryrunning")

  }
  


}
