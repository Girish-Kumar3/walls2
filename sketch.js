/*const Engine =Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ground;
var ball;
function setup() {
  var canvas=createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

var options={

  isStatic:true
}

  ground=Bodies.rectangle(200,390,200,20,options)
  World.add(world,ground)
  var options1={
    restitution:1.0}
  ball=Bodies.circle(200,100,20,options1);
  World.add(world,ball)
  //console.log(object.position.y)
}

function draw() {
  background("yellow"); 
  rectMode(CENTER); 
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}*/

var car,car2,wall;
var car,car2,wall;
var speed,weight;
var con;

/*function preload (){
  con=loadImage("audi (1).png");
  con2=loadImage("audi(green).png");
  con3=loadImage("audi(red).png");
  con4=loadImage("audi(yellow).png");
  lambo=loadImage("lambo.png")*/
  
  



function setup() {
  createCanvas(400,400);
  car=createSprite(50, 50,20,10);
  car.velocityX = random(10,30);
  car.shapeColor = "blue";
 // car.addImage(con);
  //car.scale=0.3
  

  car2=createSprite(50,320,20,10);
  car2.velocityX = random(10,30);
  car2.shapeColor = "blue";
   //car2.addImage(con);
  //car2.scale=0.3
  
  
  car3=createSprite(50,120,20,10);
  car3.velocityX = random(10,30);
  car3.shapeColor = "blue";
   //car3.addImage(con);
  //car3.scale=0.3
  

  car4=createSprite(50,220,20,10);
  car4.velocityX = random(10,30);
  car4.shapeColor = "blue";
 //car4.addImage(con);
  //car4.scale=0.3
  
  
  wall=createSprite(200,80,400,5)
  wall.shapeColor="white";



   wall3=createSprite(360,350,5,160)
  wall3.shapeColor="black";

  wall4=createSprite(200,170,400,5)
  wall4.shapeColor="white";

  wall5=createSprite(200,270,400,5)
  wall5.shapeColor="white";

  wall6=createSprite(200,370,400,5)
  wall6.shapeColor="white";

  wall2=createSprite(360,50,50,40)
  wall2.shapeColor="white";
  
   wall7=createSprite(360,130,10,40)
  wall7.shapeColor="white";
  
   wall8=createSprite(360,230,20,40)
  wall8.shapeColor="white";
  
   wall9=createSprite(360,330,10,40)
  wall9.shapeColor="white";


  speed=random(55,90);

  weight=random(400,1500);

}

function draw() {
  background("black");  
  
  if (wall.x-car.x<(car.width+wall.widht)/2){
    car.velocityX=0;
    var deformatiom=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColour=color(255,0,0);
    }
  
    if(deformation<180 &&deformation>100){
      car.shapeColor=color(230,230,0)
    }
  
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }

  
  
}
  
 
  
  
  
  if(car.collide(wall2)){
    wall2.shapeColor="green"
  }


  car4.collide(wall2)

  if(car3.collide(wall7)){
  wall7.shapeColor="red"
  }
  
  
  car.collide(wall2)
    //car.shapeColor="red"
  
  if(car4.collide(wall8)){
    wall8.shapeColor="green"
  }
  
  
    if(car2.collide(wall9)){
      wall9.shapeColor="red"
    }
    //car2.shapeColor="red"
    
  
  drawSprites();
}