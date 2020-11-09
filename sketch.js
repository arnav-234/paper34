
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,300,40)
    bin1 = new bin(700,300,40,10)
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(220);
 paper1.display()
bin1.display()
}



