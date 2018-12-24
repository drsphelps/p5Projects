var cX;
var cY;
var r;
var clickX;
var clickY;
var locked;
var ball;
var inside = false;

function setup() {
    r = 25;
    createCanvas(windowWidth-10, windowHeight-10);
    
    cX = 50;
    cY = height - 50;
    ball = new Ball(2*r, 0.2, cX, cY, 0, 0);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(0);
    if (!locked) fill(255, 127);


    ball.update();
    ball.draw();
}

function mousePressed() {
    var dis = dist(mouseX, mouseY, ball.pos.x, ball.pos.y);
    
    if (dis < r) {
        locked = true;
        fill(255);
        clickX = mouseX;
        clickY = mouseY;
        inside = true;
    }

}

function mouseReleased() {
    locked = false;
    fill(255, 127);

    if (inside) {
        var xDis = mouseX - clickX;
        var yDis = mouseY - clickY;
        var angle = atan(yDis/xDis);
        var hyp = 10*log(dist(mouseX, mouseY, clickX, clickY));

        if (xDis < 0) {
            ball.setVel(hyp*cos(angle), hyp*sin(angle))
        } else {
            ball.setVel(-hyp*cos(angle), -hyp*sin(angle)) 
        }

        ball.enableG(1);

        inside = false;
    }
    
    // if (inside) {
    //     ball.setVel(2*log(hyp), 2*log(hyp));
    //     inside = false;
    // }   
}