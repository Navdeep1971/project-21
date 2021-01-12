const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world;
var box1, box2;
var ground;
var bullet, wall;
var speed, weight, thickness;
function setup(){
createCanvas = (1600, 400);
engine = Engine.create();
world = engine.world

box1 = new Box(200, 300, 50, 50);
box2 = new Box(240, 100, 50, 150);
ground = new Ground(200, 390, 400, 20);

speed = random(223, 321);
thickness = random(22, 83);
weight = random(30, 52);
bullet = createSprite(50, 200, 50, 50);
bullet.velocityX = speed;
wall = createSprite(1500, 200, thickness, height/2);
wall.shapecolor = color(80, 80, 80);
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX = 0;
var deformation = 0.5 *weight* speed* speed/22509;
if(deformation>180)
{
    wall.shapecolor = color(255, 0, 0);
}
if(deformation<180 && deformation>100)
{
    wall.shapecolor = color(230, 230, 0);
}
if(deformation<100)
{
    wall.shapecolor = color(0, 255, 0);
}
}
}
function draw(){
background(0);
Engine.update(engine)
box1.display();
bullet.display();
wall.display();
box2.display();
ground.display();
}
function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge> wallLeftEdge)
{
    return true;
}
return false;
if(hasCollided(bullet, wall))
{
bullet.velocityX = 0;
var damage = 0.5 *weight* speed* speed/(thickness *thickness *thickness);

if(damage>10)
{
wall.shapecolor = color(255, 0, 0);
}

if(damage<10)
{
wall.shapecolor = color(0, 255, 0);
}












}
}