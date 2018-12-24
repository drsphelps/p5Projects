function setup() {
    createCanvas(windowWidth-10, windowHeight-10);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    
    stroke(255);
    strokeWeight(16);
    noFill();

    translate(width/2, height/2);
    rotate(-90);

    var diameter;

    if (width < height) {
        diameter = width-200;
    } else  {
        diameter = height-200;
    }

    var sc = second();
    var mn = minute();
    var hr = hour();

    var scAngle = map(sc, 0, 60, 0, 360);
    var mnAngle = map(mn, 0, 60, 0, 360);
    var hrAngle = map(hr % 12, 0, 12, 0, 360);

    stroke(255, 150, 100);
    arc(0, 0, diameter, diameter, 0, hrAngle);

    stroke(100, 255, 150);
    arc(0, 0, diameter-50, diameter-50, 0, mnAngle);

    stroke(150, 100, 255);
    arc(0, 0, diameter-100, diameter-100, 0, scAngle);
}