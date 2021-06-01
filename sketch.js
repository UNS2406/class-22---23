/*

class 22 - 23: Physics Engine
Developer:

Goals:
   ● Use a physics engine to create a world and the objects in
  them.
  ● Integrate the physics engine with the p5 code to create
  interactive objects following the rules of physics in this world.
  ● Tune the physics engine to change the behavior of the
  objects in your world.

*/
//Declare variables for game objects and behaviour indicators(FLAGS)

//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declare variables to assign the simulation objects
var userEngine, userWorld;

var ball, ground;
var cube1, cube2;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(800, 500);

  //create simulation and store in in variables
  userEngine = Engine.create();
  userWorld = userEngine.world;

  //construction of ball using matter.js
  var ball_options = {
    restitution: 0.7,
  };
  ball = Bodies.circle(100, 100, 20, ball_options);
  World.add(userWorld, ball);
  console.log("ball: ");
  console.log(ball);

  //construction of ground using matter.js
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
  World.add(userWorld, ground);
  console.log("ground:");
  console.log(ground);

  //construction of cube1 using matter.js
  var cube1_options = {
    restitution: 1,
  };
  cube1 = Bodies.rectangle(540, 50, 50, 50, cube1_options);
  World.add(userWorld, cube1);

  //construction of cube2 using matter.js
  var cube2_options = {
    restitution: 1,
  };
  cube2 = Bodies.rectangle(560, 10, 50, 70, cube2_options);
  World.add(userWorld, cube2);

  //construction of cube3 as object of Class CUBE using matter.js
  cub3 = new Cube();

  //construction of cube4 as object of Class CUBE using matter.js
  cub4 = new Cube();
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(0);

  //activate the simulation
  Engine.update(userEngine);

  //display of ball using matter.js
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40, 40);

  //display of ground using matter.js
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  //display of cube1 using matter.js
  rectMode(CENTER);
  rect(cube1.position.x, cube1.position.y, 50, 50);

  //display of cube2 using matter.js
  rectMode(CENTER);
  rect(cube2.position.x, cube2.position.y, 50, 70);

  //display of cube3 as object of Class CUBE using matter.js
  cub3.display();

  //display of cube4 as object of Class CUBE using matter.js
  cube4.display();
}

/*
sprite1 = createSprite(); //noparameters x = 0 y = 0 width = 100, height= 100
  sprite1.shapeColor = "orange";

  sprite2 = createSprite(100, 100); //2 parameters x, y
  sprite2.shapeColor = "orange";

  sprite3 = createSprite(200, 200, 50, 50); //4 parameters x, y, width, height
  sprite3.shapeColor = "orange";

    drawSprites();

*/
