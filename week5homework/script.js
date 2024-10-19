let stars = [];
let numStars = 100;
let centerX,centerY,centerRadius = 50;
let numOutCircles = 8;
let outCircleGap = 50;
let angle = 0;
let angle1 = 0;
let firstCircleRadius;
let secondCircleRadius;
let timerID;
let centerClr;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let myCanvas = document.getElementById("myCanvas")
createCanvas(windowWidth,windowHeight,myCanvas)
squareColor = color(random(255), random(255), random(255));

  
  centerClr = color(0);
  timerID = setInterval(() => {
  centerClr = color(random(255), random(255), random(255));
  }, 3000);
 
  centerX = width / 2;
  centerY = height / 2;

  firstCircleRadius = centerRadius + 1 * outCircleGap;
  secondCircleRadius = centerRadius + 2 * outCircleGap;

  for (let i = 0; i < numStars; i++) {
    let star;
    do {
      star = {
        x: random(width),
        y: random(height),
      };
    } while (dist(star.x, star.y, centerX, centerY) < centerRadius);
    stars.push(star);
  }
}

function draw() {
  background(0);

  fill(centerClr);
  noStroke();
  circle(centerX, centerY, centerRadius * 2);

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    noStroke();
    fill(200, 200, 200);
    ellipse(star.x, star.y, 4, 4);

    noFill();
    stroke(255);
    
   for (let i = 0; i < numOutCircles; i++) {
      let radius = centerRadius + (i + 1) * outCircleGap;
      ellipse(centerX, centerY, radius * 2, radius * 2);
    }

   let smallCircleX = centerX + firstCircleRadius * cos(angle);
   let smallCircleY = centerY + firstCircleRadius * sin(angle);

   fill(200,50,20); 
   stroke('yellow');
   ellipse(smallCircleX, smallCircleY, 20, 20);
   angle += 0.0002;
    
   let middleCircleX = centerX + secondCircleRadius * cos(angle);
   let middleCircleY = centerY + secondCircleRadius * sin(angle);
    
   fill(85,107,47);
   stroke('white')
  ellipse(middleCircleX, middleCircleY,30,30);
  angle1 += 0.0001
    
  }
}
