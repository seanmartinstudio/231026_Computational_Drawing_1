let inc = 1;
let start = 1;
let photo

function setup() {
  pixelDensity(3)
  createCanvas(600, 600);
   background(0);
   
}

function draw() {
  // noiseDetail(1, 1)
  // frameRate(220)
  beginShape(LINES);
  let xoff = start
  let yoff = start + 10
  stroke(color(random(0, 255), random(0, 255), random(0, 255)));
  // stroke(255)
  // strokeWeight(5)
  let y = map(noise(xoff), 0, 1, 0, width)
  let x = map(noise(yoff), 0, 1, 0, height)
  // let y = random(0, height)
  // let x = random(0, width)
    vertex(x, y);
    vertex(y, x)
    // vertex(width, height)

  // xoff += inc;
  endShape();
  xoff += inc;
  yoff += inc
  start += inc;

}

function keyTyped() {
  if (key === 's') {
    saveCanvas('photo', 'jpg');
  }
}
