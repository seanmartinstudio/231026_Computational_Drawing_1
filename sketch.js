let timer;
let inc = 0.01;
let start = 1;

function setup() {
  pixelDensity(2);
  createCanvas(600, 600);
   background(0);
  timer = millis();
}

function draw() {
  let randomAlpha1 = random(10, 30)
  frameRate(160)
  beginShape(LINES);
  let xoff = start;
  let yoff = start + 1
  // let randomAlpha1 = random(10, 20)
  // strokeWeight(10)
  // stroke(255, randomAlpha1)
    stroke(0, 0, 255);
  let y = map(noise(xoff), 0, 1, 0, height)
  let x = map(noise(yoff), 0, 1, 0, width)
  vertex(x, y);
  vertex(width/2, height - 20)
  xoff += inc;
  endShape();
  
  beginShape(LINES);
  let xoff2 = start;
  let yoff2 = start + 1
  // let randomAlpha2 = random(10, 20);
  // stroke(255, randomAlpha2)
  // strokeWeight(10)
  // stroke(255, randomAlpha1)
    stroke(0, 0, 255);
  let y2 = map(noise(xoff2), 0, 1, 0, height)
  let x2 = map(noise(yoff2), 0, 1, 0, width)
  vertex(width/2, 20);
  vertex(x2, y2)
  xoff += inc;
  endShape();
  
  start += inc;
  
      if (millis() - timer >= 5000) {
    // Restart the sketch by resetting the timer
    timer = millis();
    noLoop()
    // saveCanvas('pixDen4Test', 'jpg');
  }

  // function keyPressed() {
  //   // Check if the 's' key is pressed (you can change this to any key you like)
  //   if (key === 's' || key === 'S') {
  //     // Save the canvas as a JPG image
  //     saveCanvas('mySketch', 'jpg');
  //   }
  // }
}


