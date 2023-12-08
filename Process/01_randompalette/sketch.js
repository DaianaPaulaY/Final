let circles = [];
let rects = [];
let texts = [];
let data;
let index = 0;

function preload(){
  data = loadJSON("assets/palettes.json");
}


function setup() {
  createCanvas(windowWidth, 600);
  rectMode(CENTER);
  index = floor(random(data.palettes.length));
  
  
  for (let c = 0; c < 50; c++) {
    let x = random(width);
    let y = random(height);
    let r = random(1, 100);
    let circle = new Circle1(x, y, r);
    circles.push(circle);
  }

  for (let d = 0; d < 100; d++) {
    let x = random(width);
    let y = random(height);
    let r = random(1, 30);
    let circle = new Circle2(x, y, r);
    circles.push(circle);
  }
    
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(50, 100);
      let rot = random(0, 180);
      let rect = new Rect(x, y, size, rot);
      rects.push(rect);    
    }

        
    for (let t = 0; t < 50; t++) {
      let x = random(width);
      let y = random(height);
      let rot = random(0, 180);
      let size = random(2, 50);
      let text = new Text1 (x, y, rot, size);
      texts.push(text);    
    }

    for (let o = 0; o < 50; o++) {
      let x = random(width);
      let y = random(height);
      let rot = random(0, 180);
      let size = random(2, 50);
      let text = new Text2 (x, y, rot, size);
      texts.push(text);    
    }




    
  }



function draw() {
  background(255);

  let palette = data.palettes[index];
  let hex0 = palette[0];
  let hex1 = palette[1];
  let hex2 = palette[2];
  let hex3 = palette[3];
  let hex4 = palette[4];

  fill(hex0);
  rect(0, 100, 200, 300);
  fill(hex1);
  rect(200, 100, 200, 300);
  fill(hex2);
  rect(400, 100, 200, 300);
  fill(hex3);
  rect(600, 100, 200, 300);
  fill(hex4);
  rect(800, 100, 200, 300);


  for (let circle of circles){
    circle.display();
  }

  for (let rect of rects){
    rect.display();
  }

  for (let text of texts){
    text.display();
  }

}

class Circle1{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    

  }
  display(){  
    fill(100);
    circle(this.x, this.y, this.r*3);
    push()
    fill(150);
    translate(this.x + 50, this.y + 50);
    circle(this.x, this.y, this.r*2);
    pop();
    push()
    fill(200);
    translate(this.x + 100, this.y + 100);
    circle(this.x, this.y, this.r);
    pop();

 
  } 
}

class Circle2{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  display(){  
    fill(0, 255, 0);
    circle(this.x, this.y, this.r);
    push()
    fill(0, 255, 0);
    translate(this.x + 50, this.y + 50);
    circle(this.x, this.y, this.r/2);
    pop();
    push()
    fill(0, 255, 0);
    translate(this.x + 200, this.y + 100);
    circle(this.x, this.y, this.r/4);
    pop();
  } 
}


class Rect{
  constructor(x, y, size, rot){
    this.x = x;
    this.y = y; 
    this.size = size;
    this.rot = rot;
  }
  display(){ 
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2);  
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
    pop();
  } 
}


class Text1{
  constructor(x, y, rot, size){
    this.x = x;
    this.y = y; 
    this.rot = rot;
    this.size = size;
  }
  display(){   
    push();
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    textSize(this.size);
    fill(0);
    text('x', this.x, this.y);
    pop();
  
  } 
}

class Text2{
  constructor(x, y, rot, size){
    this.x = x;
    this.y = y; 
    this.rot = rot;
    this.size = size;
  }
  display(){   
    push();
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    textSize(this.size);
    fill(0);
    text('o', this.x, this.y);
    pop();
  
  } 
}

