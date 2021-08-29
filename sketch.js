
var ball;
var blower;
var blowermouth

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

  ball = new Ball(230,200,40,40);
  blower = new Blower(100, 50, 100, 20);
  blowermouth = new Blowermouth(200, 50, 60, 60);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ball.show();
  blower.show();
  blowermouth.show();
}

function blow(){
  Matter.body.applyForce(ball.body, { x: 0, y: 0}, { x: 0, y: 0.05 });
}