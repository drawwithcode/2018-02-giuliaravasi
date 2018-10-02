function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  push();
  translate(width/2, height/2);
  rotate(frameCount*cos(80)*sin(80)+150);

  stroke(255);
  noFill();
  stroke(lerpColor(color('#0028ff'), color('#ffd700'), frameCount/1100));
  line(sin(frameCount)*150, cos(frameCount)*150, sin(0)*150, cos(frameCount)*150);
  pop();

  if (frameCount == 900) {
   noLoop();
    }
}
