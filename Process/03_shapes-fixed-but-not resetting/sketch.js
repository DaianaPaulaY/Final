let circles1 = [];
let circles2 = [];
let rects = [];
let texts = [];
let data;
let index = 0;
let size, xpos, ypos;


let saveButton, mouseButton, newArtButton, clearScreenButton;
let radioImage, radioSize, radioPos;

let img1;
let img2;
let selected;

function preload(){
  data = loadJSON("assets/palettes.json");
  img1 = loadImage("images/milk-tea-svgrepo-com.svg");
  img2 = loadImage("images/polaroid-svgrepo-com.svg");
}

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  preload();

  radioImage = createRadio('Image');
  radioImage.option('1', 'Image 1');
  radioImage.option('2', 'Image 2');
  radioImage.selected('Image 1');

  radioSize = createRadio('Size');
  radioSize.option('1', 'Small');
  radioSize.option('2', 'Big');
  radioSize.selected('Small');

  radioPos = createRadio('Position');
  radioPos.option('1', 'Center');
  radioPos.option('2', 'Left');
  radioPos.option('3', 'Right');
  radioPos.selected('Center');


  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  newArtButton = createButton('New Art');
  newArtButton.mousePressed(newArt);

  // clearScreenButton = createButton('Clear Screen');
  // clearScreenButton.mousePressed(reset);

}

  function saveFile() {
    save('design.jpg');
    preload();
  }



  function newArt(){
    //RANDOM COLORS FROM JSON
    index = floor(random(data.palettes.length));
    let palette = data.palettes[index];
    let hex0 = palette[0];
    let hex1 = palette[1];
    let hex2 = palette[2];
    let hex3 = palette[3];
    let hex4 = palette[4];
    let array = [hex0, hex1, hex2, hex3, hex4];

    //BACKGROUND 
    background(random(array));


    // FOR LOOP FOR BACKGROUND CIRCLES
  for (let c = 0; c < 50; c++) {
    let x = random(width);
    let y = random(height);
    let r = random(1, 100);
    let circle = new Circle1(x, y, r);
    circles1.push(circle);
  }


  // FOR LOOP FOR SMALL CIRCLES
  for (let d = 0; d < 100; d++) {
    let x = 0;
    let y = 0;
    let r = 0;
    let rot = random(0, 180);
    let hex = (random(array));

    if (radioSize.value() == '1') {
        r = random(5, 50);
      } else if (radioSize.value() == '2'){
        r = random(200, 500);
      }

      if (radioPos.value() == '1'){
        x = random(width);
        y = random(height);        
      } else if (radioPos.value() == '2'){
        x = random(0, width-200);
        y = random(0, height-200);
      } else if (radioPos.value() == '3'){
        x = random(width/3, width);
        y = random(height/3, height);
      }

    let circle = new Circle2(x, y, r, rot, hex);
    circles2.push(circle);
  }
    

  //FOR LOOP FOR IMAGES
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(10, 80);
      let rot = random(0, 180);
      let hex = (random(array));

      if (radioImage.value() == '1') {
        selected = img1;
      } else if (radioImage.value() == '2'){
        selected = img2;
      }
        
      let rect = new Rect(x, y, size, rot, hex);
      rects.push(rect);    
    }

    
    // FOR LOOP FOR X
    for (let t = 0; t < 50; t++) {
      let x = random(width);
      let y = random(height);
      let rot = random(0, 180);
      let size = random(2, 30);
      let text = new Text1 (x, y, rot, size);
      texts.push(text);    
    }

    // FOR LOOP FOR O
    for (let o = 0; o < 50; o++) {
      let x = random(width);
      let y = random(height);
      let rot = random(0, 180);
      let size = random(2, 25);
      let text = new Text2 (x, y, rot, size);
      texts.push(text);    
    }
  
  }

  function draw(){

  // TEXT FOR COLORS
  // fill(hex0);
  // rect(0, 100, 200, 300);
  // fill(hex1);
  // rect(200, 100, 200, 300);
  // fill(hex2);
  // rect(400, 100, 200, 300);
  // fill(hex3);
  // rect(600, 100, 200, 300);
  // fill(hex4);
  // rect(800, 100, 200, 300);




  // for (let circle of circles1){
  //   circle.display();
  // }

  for (let circle of circles2){
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
    constructor(x, y, r, rot, hex){
      this.x = x;
      this.y = y;
      this.r = r;
      this.rot = rot;
      this.hex = hex;
  }
  display(){  
    fill(this.hex);
    circle(this.x, this.y, this.r);
    push()
    fill(this.hex);
    translate(this.x + 2, this.y + 2);
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2);  
    circle(this.x, this.y, this.r/2);
    pop();
    push()
    fill(this.hex);
    translate(this.x + 20, this.y + 20);
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2);  
    circle(this.x, this.y, this.r/4);
    pop();
  } 
}


class Rect{
  constructor(x, y, size, rot, hex){
    this.x = x;
    this.y = y; 
    this.size = size;
    this.rot = rot;
    this.hex = hex;
  }
  display(){ 
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2);  
    fill(this.hex);

    beginShape();
    curveVertex(this.x, this.y);
    curveVertex(this.x +20, this.y-10);
    curveVertex(this.x+40, this.y);
    curveVertex(this.x+20, this.y+10);
    curveVertex(this.x+1, this.y+1); 
    endShape(CLOSE);

    //image(selected, this.x, this.y, this.size, this.size);
    //rect(this.x, this.y, this.size, this.size);

    pop();

    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    strokeWeight(0.25);
    line(this.x, this.y, this.x +30, this.y +30);
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

