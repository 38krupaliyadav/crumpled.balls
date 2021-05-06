
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, p;
var world, db;

function preload(){
	p = loadImage("paper.png");
	d = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1400, 650);
    paperObject=new Paper(200, 500, 100, 100);

	paper = createSprite(150, 500);
	paper.addImage(p);
	paper.scale = 0.5;
	
	db = createSprite(1400, 520);
	db.addImage(d);
	db.scale = 0.9;

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  paper.x = paperObject.body.position.x;
  paper.y = paperObject.body.position.y;
  
  drawSprites();
}
function keyPressed(){
	if (keyCode === 32){
    Matter.Body.applyForce(paper, paper.position , {x:130,y:-145});
	}
}

