const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var object,ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var object_options={
    restitution:0.5
  }
  object = Bodies.circle(200,100,20,object_options);
  World.add(world,object);

  var g_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,398,400,20,g_options)
  World.add(world,ground);

  console.log(object);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}