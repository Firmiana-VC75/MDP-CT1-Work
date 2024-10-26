let circle;
let rectangles = [];

function setup() {
  createCanvas(800, 600);
  
  circle = new Circle(width * 0.5, height * 0.75, 50);
  
    for (let i = 0; i < 10; i++) {
    rectangles.push(new Rectangle(random(width), random(height), 50, 20));
  }
}

function draw() {
  background(220);
  
  circle.move();
  circle.display();
  
   for (let i = rectangles.length - 1; i >= 0; i--) {
    rectangles[i].display(); 

    if (circle.intersects(rectangles[i])) {
      circle.changeColor(rectangles[i].clr); 
      rectangles.splice(i, 1);
      
    }
  }

    rectangles.forEach((rect) => {
    rect.move(); 
    rect.display(); 
  });
     
}

 function mousePressed() {
  let newRectangle = new Rectangle(mouseX, mouseY);
  rectangles.push(newRectangle);
}

class Circle {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.color = color(0, 100, 0); 
      this.velocity = createVector(random(3, 2), random(3, 2));
    }
    
    move() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      
      if (this.x - this.r <= 0 || this.x + this.r >= width) {
        this.velocity.x *= -1;
      }
      if (this.y - this.r <= 0 || this.y + this.r >= height) {
        this.velocity.y *= -1;
      }
    }
    
    display() {
      fill(this.color);
      ellipse(this.x, this.y, this.r * 2);
    }
    
    intersects(rect) {
      let closestX = constrain(this.x, rect.position.x, rect.position.x + rect.width);
      let closestY = constrain(this.y, rect.position.y, rect.position.y + rect.height);
      
      let distanceX = this.x - closestX;
      let distanceY = this.y - closestY;
      
      return (distanceX * distanceX + distanceY * distanceY) < (this.r * this.r);
    }
  
     changeColor(newColor) {
      this.color = newColor;
  }
  }

  class Rectangle {
    constructor(_x, _y) {
      this.position = createVector(_x, _y); 
      this.velocity = p5.Vector.random2D(); 
      this.velocity.setMag(random(1, 3)); 
  
      this.width = random(30, 70); 
      this.height = random(20, 50);
      this.clr = color(random(255), random(255), random(255)); 
    }
   
  move() {
      this.position.add(this.velocity); 
  
      if (
        this.position.x <= 0 || 
        this.position.x + this.width >= width
      ) {
        this.velocity.x *= -1; // 反向
      }
  
      if (
        this.position.y <= 0 || 
        this.position.y + this.height >= height
      ) {
        this.velocity.y *= -1; // 反向
      }
    }
  
    display() {
      fill(this.clr); 
      noStroke();
      rect(this.position.x, this.position.y, this.width, this.height); 
    }
  }