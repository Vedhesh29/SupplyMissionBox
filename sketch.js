var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, groundImg;
var box1,box2,box3, box1Body, box2Body, box3Body;
var copterSound; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	groundImg = loadImage("zombie background.png"); 
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	
	groundSprite=createSprite(400,350, 800,700);
	groundSprite.addImage(groundImg); 
	groundSprite.shapeColor=color(255);

	box1=createSprite(380,670,200,20); 
	box1.shapeColor="red"; 
	

	box2=createSprite(290,620,20,100); 
	box2.shapeColor="red"; 
	

	box3=createSprite(470,620,20,100); 
	box3.shapeColor="red"; 

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.5, isStatic:true});
	World.add(world, packageBody);

	box1Body = Bodies.rectangle(380, 200,5, {isStatic:true}); 
	World.add(world, box1Body); 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
  if(isTouching(packageSprite, box1)){
	  packageSprite.velocityY=-2;
  }

 
	  
  }


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false); 
  }
}

function isTouching(object1,object2){
  
    if(object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
       return true;
      
      
    }
  
    else {
      return false; 
    }
  
  }

  function bounceOff(object1,object2){
  
	if (object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2){
	  object2.velocityX= object1.velocityX*(-1);
	  object1.velocityX= object2.velocityX*(-1);
  
	}
  
  
	if (object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
	  object2.velocityY= object1.velocityY*(-1);
	  object1.velocityY= object1.velocityY*(-1);
  
	}
  
  
  }
  
  
  


