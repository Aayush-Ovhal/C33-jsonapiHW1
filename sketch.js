const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,ground1;

var bird,sling;

var pig,pig1,pig2,pig3;

var box,box1,box2,box3;

var log,log1,log2,log3,log4,log5;

var gameState = "onSling";

var backgroundIMG;

function preload(){
    Dt();
}

function setup(){
    createCanvas(1300,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(650,800,1300,20);
    ground1 = new Ground(100,700,600,300);

    box = new Box(950,700,80,80);
    box1 = new Box(1200,700,80,80);
    box2 = new Box(1070,580,80,80);
    box3 = new Box(1070,200,80,80); 

    log = new Log(1075,600,300, PI/2);
    log1 = new Log(1075,500,300, PI/2);
    log2 = new Log(880,500,300, PI);
    log3 = new Log(1265,500,300, PI);
    log4 = new Log(880,200,300, PI/2);
    log5 = new Log(1265,200,300, PI/2);

    bird = new Bird(200,50);

    sling = new Sling(bird.body,{x: 300, y: 390});

    pig = new Pig(990,580,0,0);
    pig1 = new Pig(1150,580,0,0);
    pig2 = new Pig(1150,400,0,0);
    pig3 = new Pig(990,400,0,0);

}

function draw(){
    if(backgroundIMG){
    background(backgroundIMG);
    }

    Engine.update(engine);

    ground.display();
    ground1.display();

    box.display();
    box1.display();
    box2.display();
    box3.display();

    log.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();

    bird.display();

    sling.display();

    pig.display();
    pig1.display();
    pig2.display();
    pig3.display();

   }


function mouseDragged(){
  
  if(gameState =="onSling"){
    Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
   }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
if(keyCode === 32){
    sling.attach(bird.body);
   }
}

async function Dt(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var DT = responseJSON.datetime;
    var hr = DT.slice(11,13);
    console.log(hr);

    if(hr >= 6 && hr <= 19){
      bg = "images/bgc.jpg";
    }else{
      bg = "images/bgc2.jpg";
    }

    backgroundIMG = loadImage(bg);
    
}

    
