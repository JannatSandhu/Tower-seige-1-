const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block, platform;

function setup(){
var canvas= createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,height,1200,20)
platform = new Ground(150,305,300,170)

block = new Box(50,50)
block2 = new Box(60,50)
block3 = new Box(70,50)
block4 = new Box(80,50)
block5 = new Box(90,50)
block6 = new Box(100,50)


}
