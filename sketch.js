const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var rock;
var ground;
var boggie1;
var flag = 0;
var crash;
var flags = 0

function preload() {
  bg = loadImage("Images/bg.jpg");
  crash = loadSound("sound/train_crossing.mp3")
}

function setup() {
  createCanvas(1200, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  rock = new Rock(1000, 300, 200, 200);
  ground = new Ground(600, 370, 1200, 10);
  boggie1 = new Boggie(100, 350, 100, 50);
  boggie2 = new Boggie(230, 350, 100, 50);
  boggie3 = new Boggie(360, 350, 100, 50);
  boggie4 = new Boggie(490, 350, 100, 50);
  boggie5 = new Boggie(620, 350, 100, 50);
  chain1 = new Chain(boggie1.body, boggie2.body);
  chain2 = new Chain(boggie2.body, boggie3.body);
  chain3 = new Chain(boggie3.body, boggie4.body);
  chain4 = new Chain(boggie4.body, boggie5.body);
}

function draw() {
  background(bg);
  Engine.update(myEngine);

  rock.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();

  if (keyDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(boggie5.body, boggie5.body.position, { x: 1, y: 0 });
  }

  var collision = Matter.SAT.collides(boggie5.body, rock.body);
  if (collision.collided) {
    flag = 1;
  }
  if (flag == 1) {
    textSize(30);
    text("Train is Crashed!", 600, 200);
    crash.play()
    sleep (2000)
    crash.stop()
    flag = 0
  }
}

function keyPressed() {
  // if(keyDown(RIGHT_ARROW)) {
  //   Matter.Body.applyForce(boggie5.body,boggie5.body.position,{x:1,y:0})
  // }
}
