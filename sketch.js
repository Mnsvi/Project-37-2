// constants
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// variables
var engine, world;
var bgImg, monsterImg, superHeroImg; 
var ground, hero;
var monster;

function preload(){
  bgImg = loadImage("Images/GamingBackground.jpg");
  //monsterImg = loadImage("Images/monster.png");
  //superHeroImg = loadImage("Images/superhero.png");
}

function setup(){
  
  // creating canvas
  createCanvas(1800, 900);

  // creating engine and adding it to world
  engine = Engine.create();
  world = engine.world;
  
  //creating sprites
  //monster1 = createSprite(700, 400, 10, 10);

  // creating objects
  ground = new Ground(10, 890, 9000, 10);
  hero = new Hero(400, 400, 70);
  fly = new Fly(hero.body,{x:500,y:50});
  monster = new Monster(1000, 400, 70);

  // running engine
	Engine.run(engine);

}

function draw(){

  // background
  background(bgImg);

  // updating engine
  Engine.update(engine);

  // displaying objects 
  ground.display();
  hero.display();
  fly.display();
  monster.display();
  
  // displaying sprites
  //drawSprites();
  
}

function mouseDragged(){
  
  Matter.Body.setPosition(hero.body,{x : mouseX, y : mouseY})
}