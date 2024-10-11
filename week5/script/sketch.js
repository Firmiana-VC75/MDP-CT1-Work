let radius;
let numCircles = 10;
let strWeight = 20;
let timerID;
let bkgrndClr;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, TWO_PI, 1, 1);

  radius = width * 0.1;
  strokeCap(ROUND);
  bkgrndClr = color(0)
  timerID = setInterval(()=>{
    bkgrndClr = color(random(TWO_PI), random(1),random(1))
  }, 2000)

}

function draw() {
  background(bkgrndClr);
  strokeWeight(strWeight);
  stroke(0, 1, 1);
  noFill();
  translate(width * 0.5, height * 0.5);

  for (let i = 0; i < numCircles; i++) {
    push()
    rotate(sin(millis() * 0.001 * (i * 0.1+1)));
    stroke((TWO_PI / numCircles) * i, 1, 1);
    arc(
      0,
      0,
      i * strWeight * 2 + radius * 2,
      i * strWeight * 2 + radius * 2,
      HALF_PI + QUARTER_PI,
      QUARTER_PI
    );
    pop()
  }
}
