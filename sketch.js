var engine , world , ground , ball ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true,
  }
  ground= Bodies.rectangle(400,380,700,20,ground_options)

  var ball_options={
    restitution:1.8,
    density:1,
    friction:0.3,
  }


  ball=Bodies.circle(400,100,25,ball_options);
  World.add(world,ground);
  World.add(world,ball);



}

function draw() {
  background("grey"); 

  Engine.update(engine);
  
  

  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x,ground.position.y,700,20);

  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,25,25);
  



  
}