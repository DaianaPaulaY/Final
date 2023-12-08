let circles = [];
let rects = [];
let texts = [];

function setup() {
  createCanvas(windowWidth, 600);
  angleMode(DEGREES);
  rectMode(CENTER);
  
  
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 80);
    let rot = random(0, 180);
    let circle = new Circle(x, y, r, rot);
    circles.push(circle);
  }
    
    for (let c = 0; c < 100; c++) {
      let x = random(width);
      let y = random(height);
      let r = random(50, 100);
      let rot = random(0, 180);
      let rect = new Rect(x, y, r, rot);
      rects.push(rect);    
    }

        
    for (let n = 0; n < 50; n++) {
      let x = random(width);
      let y = random(height);
      let rot = random(0, 180);
      let text = new Text(x, y, rot);
      texts.push(text);    
    }
    
  }



function draw() {
  background(255);

  for (let rect of rects){
    rect.display();
  }
  
  for (let circle of circles){
    circle.display();
  }

  for (let text of texts){
    text.display();
  }




  // fill(255, 0, 0);
  // textSize(50);
  // text('x', 600, 200);
}

class Circle{
  constructor(x, y, r, rot){
    this.x = x;
    this.y = y;
    this.r = r;    
    this.rot = rot;

  }
  display(){  
    push();
    rotate(this.rot);  
    fill(0, 255, 0);
    circle(this.x, this.y, this.r);
    pop();

  } 
}


class Rect{
  constructor(x, y, r, rot){
    this.x = x;
    this.y = y; 
    this.r = r;
    this.rot = rot;
  }
  display(){ 
    push();  
    rotate(this.rot);  
    fill(255, 0, 0);
    rect(this.x, this.y, this.r, this.r);
    pop();
  } 
}


class Text{
  constructor(x, y, rot){
    this.x = x;
    this.y = y; 
    this.rot = rot;
  }
  display(){   
    push();
    rotate(this.rot);
    textSize(50);
    //text('x', 200, 200);
    fill(255, 0, 0);
    text('text', this.x, this.y);
    pop();
  } 
}

