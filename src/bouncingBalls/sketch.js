var acc = 1;
var radius = 100;
var y = radius/2;
var c = 255;
var elas = 0.8;
var times = 0;
var balls = [];
var spawned = 0;

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);

  for (var index = 0; index < 10; index++){
    var r = random(50, 150);
    balls.push(new Ball(r, random(0.75, 0.85), random(4+r/2, width-(r/2)-4), random(0, height/2), random(-10,10), random(-10, 10)));
  }
}

function draw() {
  background(0);
  stroke(0);
  strokeWeight(0);
  noFill();

  if (mouseIsPressed) {
    if (spawned == 0) {
      spawned = 10;
      var r = random(50, 150);
      balls.push(new Ball(r, random(0.75, 0.85), mouseX, mouseY, random(-10,10), random(0, 10)));
    } else {
      spawned--;
    }
  } else {
    spawned = 0;
  }

  balls.forEach(function (item) {
    item.update();
    item.draw();
  });
}