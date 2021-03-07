const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground, player, engine, world;
var obs1;
var obs2;
var lvlCount = 0;


function setup() {
  var canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,550,1200,20);
  obs1 = new Obs(300,400,25,500);
  obs2 = new Obs1(600,400,25,50);
  player = new Ball(100,300,30)
  Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  player.display();
  obs1.display();
  obs2.display();





  if(player.body.position.x > 1150){
    Matter.Body.setPosition(player.body, {x:100, y:300})
  
    lvlCount = lvlCount + 1;
    console.log(lvlCount);
  }

  if (lvlCount === 0){
    Matter.Body.setPosition(obs2.body, {x:1000, y:450})
  }
}

function keyPressed(){
  if(keyCode === 68){
    Matter.Body.setVelocity(player.body, {x:10 , y:0})  }

  if(keyCode === 65){
    Matter.Body.setVelocity(player.body, {x:-10 , y:0})  }
  

  if(keyCode === 32){
    Matter.Body.setVelocity(player.body, {x:0 , y:15}) }
}