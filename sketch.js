const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
//we created variables of the rabbit,the melon and the background 
var backgroundImg;
var fruitImg;
var rabbitImg;
var bunny;
var button;
function preload(){
  //we created images of the rabbit,the melon and the background 
backgroundImg = loadImage("background.png")
rabbitImg = loadImage("Rabbit-01.png")
fruitImg = loadImage("melon.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
bunny = createSprite(250,650,100,100)
bunny.addImage(rabbitImg)
bunny.scale = 0.2
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
//and we set the cut button so when we press it the melon falls.
button=createImg("cut_btn.png");
button.position(220,30);
button.size(50,50);
button.mouseClicked(drop)


}

function draw() 
{
  background(51);
  image(backgroundImg,width/2,height/2,500,700)
  rope.show();
  //ellipse(fruit.position.x,fruit.position.y,30,30);
  
  ground.show();
//name x y w and h
 image(fruitImg,fruit.position.x, fruit.position.y,60,60)
   
 Engine.update(engine);
drawSprites();
}

function drop(){
  rope.break()
  fruit_con.detach();
  fruit_con= null;
}
