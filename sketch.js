var renzan;
var renzanImage;
//var edges;
var bg;
var bg1;


function preload(){
renzanImage = loadImage("renzan.jpg");
bgImage=loadImage("bg.png")
//bg1Image=loadImage("bg.png")
}

function setup(){
    createCanvas(1000,1000);

    renzan = createSprite(100,400);
    renzan.addImage(renzanImage);
    renzan.scale = 0.3;
    renzan.mirrorX(-1);

  //  bg=createSprite(600,600);
  //  bg.addImage(bgImage);
  //  bg.scale=6;
    bg1=createSprite(1000,400)
    //bg1.addImage(bg1Image)
   bg.velocityX=-2  
     

  //  edges=createEgdeSprites();
}

function draw(){
    background(bg);
    
    if(keyDown(UP_ARROW)){
        renzan.y = renzan.y - 5;
    }

    if(keyDown(DOWN_ARROW)){
        renzan.y = renzan.y + 5;
    }
    if(bg.x<0){
        bg.x=bg.width/2
    }



    bg.depth=renzan.depth;
    renzan.depth=renzan.depth+1;
    //renzan.collide(edges(1));
   // renzan.collide(edges(2));
   // renzan.collide(edges(3));
   // renzan.collide(edges(4));
    drawSprites();
}