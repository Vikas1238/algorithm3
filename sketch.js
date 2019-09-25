var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
movingrect.velocityY=-5;
fixedrect.velocityY=5;
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
bounceOff(movingrect,fixedrect);

  drawSprites();
}
function bounceOff(object1,object2)
{
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2)
    {object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
 if(object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2)
     {object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
  }
}
