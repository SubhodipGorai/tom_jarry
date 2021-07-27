var cat,mou,bg;
var c1,c2,c3,r1,r2,r3,bag;
function preload() {
    //load the images here
    c1 = loadImage("images/cat1.png");
    c2 = loadImage("images/cat4.png");
    c3 = loadAnimation("images/cat2.png","images/cat3.png");

    r1 = loadImage("images/mouse1.png");
    r2 = loadImage("images/mouse4.png");
    r3 = loadAnimation("images/mouse2.png","images/mouse3.png");

    bag= loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(800,300,100,100)
    bg.addImage("gr",bag),
    cat = createSprite(800,570,50,50);
    cat.addImage("cat",c1);
    cat.addAnimation("ca",c3);
    cat.addImage("c",c2);
    cat.scale = 0.1
    mou = createSprite(400,590,20,20);
    mou.addImage("mouse",r1);
    mou.addAnimation("mous",r3);
    mou.addImage("mou",r2);
    mou.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.isTouching(mou)) {
        cat.velocityX = 0;
        cat.velocityY = 0;
        cat.changeImage("c",c2);
        mou.changeImage("mou",r2);
    }
    keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      cat.velocityX = -5;
      cat.changeAnimation("ca",c3);
      mou.changeAnimation("mous",r3);
  }

}
