let circles1, circles2, images, leaves, rects, texts;
let data;
let index = 0;
let size, xpos, ypos;

let saveButton, mouseButton, newArtButton, clearScreenButton;
let radioBackground, radioImage, radioSize, radioPos;

let img1;
let img2;
let img3;
let imgarray = [img1, img2, img3];

function preload(){
  
  data = loadJSON("assets/palettes.json");
  img1 = loadImage("images/cherry.svg");
  img2 = loadImage("images/apple.svg");
  img3 = loadImage("images/empty.svg");
  img4 = loadImage("images/elephant-blue.svg");
  img5 = loadImage("images/elephant-red.svg");
  
}

function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);
  preload();
  

  radioBackground = createRadio('Background');
  radioBackground.option('1', 'Background particles');
  radioBackground.option('2', 'Background big cirlces');
  radioBackground.selected('Background simple');
  radioBackground.style("width", "175px");
  radioBackground.style("line-height", "2");
  radioBackground.position(10, height);

  radioImage = createRadio('Image');
  radioImage.option('1', 'Cherry Image');
  radioImage.option('2', 'Apple Image');

  radioImage.option('4', 'Elephant Blue');
  radioImage.option('5', 'Elephant Red');
  radioImage.option('3', 'No Image');
  radioImage.selected('Cherry Image');
  radioImage.style("width", "115px");
  radioImage.style("line-height", "2");
  radioImage.position(200, height);
  
  radioSize = createRadio('Size');
  radioSize.option('1', 'Small circles');
  radioSize.option('2', 'Big circles');
  radioSize.selected('Small');
  radioSize.style("width", "120px");
  radioSize.style("line-height", "2");
  radioSize.position(320, height);
  
  radioPos = createRadio('Position');
  radioPos.option('1', 'Center composition');
  radioPos.option('2', '  Right composition      ');
  radioPos.option('3', '    Left composition');
  radioPos.selected('Center');
  radioPos.style("width", "165px");
  radioPos.style("line-height", "2");
  radioPos.position(450, height);
  
  newArtButton = createButton('New Art');
  newArtButton.mousePressed(newArt);
  newArtButton.style("width", "80px");
  newArtButton.style("line-height", "2");
  newArtButton.position(660, height+5);
  
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);
  saveButton.style("width", "80px");
  saveButton.style("line-height", "2");
  saveButton.position(660, height+45);

//   clearScreenButton = createButton('New Screen');
//   clearScreenButton.mousePressed(reset);
//   clearScreenButton.style("width", "100px");
//   clearScreenButton.style("line-height", "2");
//   clearScreenButton.position(700, height+5);
  
  
  
}
function saveFile() {
  save('design.jpg');
}



// function reset(){

//   // RESET ARRAYS
//   circles1 = [];
//   circles2 = [];
//   images = [];
//   leaves = [];
//   rects = [];
//   texts = [];

//   background(255);

// }


function newArt(){

  circles1 = [];
  circles2 = [];
  images = [];
  leaves = [];
  rects = [];
  texts = [];

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
  for (let c = 0; c < 20; c++) {
    let x = random(width);
    let y = random(height);
    let hex = (random(array));
    
    if (radioBackground.value() == '1') {
      r = random(1, 8);
    } else if (radioBackground.value() == '2'){
      r = random(600, 1000);
    }

    let circle = new CircleBack(x, y, r, hex);
    circles1.push(circle);

  }
  
  // FOR LOOP FOR PARTICLES CIRCLES
  for (let d = 0; d < 30; d++) {
    let x = 0;
    let y = 0;
    let r = 0;
    let hex = (random(array));
    
    if (radioSize.value() == '1') {
      r = random(1, 50);
    } else if (radioSize.value() == '2'){
      r = random(1, 250);
    }
    
    if (radioPos.value() == '1'){
      x = random(width);
      y = random(height);   

    } else if (radioPos.value() == '2'){
      x = random(100, width);
      y = random(100, height);
      
    } else if (radioPos.value() == '3'){
      x = random(width-200);
      y = random(height-200);
    }
    
    let circle = new CircleParticles(x, y, r, hex);
    circles2.push(circle);
  }
  
  
  //FOR LOOP FOR FRUITS
  for (let i = 0; i < 20; i++) {
    let x = 0;
    let y = 0;

    if (radioPos.value() == '1'){
      x = random(width);
      y = random(height);        
    } else if (radioPos.value() == '2'){
      x = random(200, width);
      y = random(200, height);
      
    } else if (radioPos.value() == '3'){
      x = random(width-200);
      y = random(height-200);
    }

    let size = random(5, 150);
    let rot = random(0, 180);
    let hex = (random(array));
    
    if (radioImage.value() == '1') {
      selected = img1;
    } else if (radioImage.value() == '2'){
      selected = img2;
    } else if (radioImage.value() == '3'){
      selected = img3;
    } else if (radioImage.value() == '4'){
      selected = img4;
    } else if (radioImage.value() == '5'){
      selected = img5;
    }
    
    let img = new RandomImage (x, y, size, rot, hex);
    images.push(img);   
  }


    //FOR LOOP FOR LEAVES
    for (let l = 0; l < 50; l++) {
      let x = random(width);
      let y = random(height);
      let rot = random(0, 360);
      let size = random(2, 25);
      let hex = (random(array));
      let leave = new Leave(x, y, size, rot, hex);
      leaves.push(leave);   
    }
  
  
  // FOR LOOP FOR X
  for (let t = 0; t < 25; t++) {
    let x = random(width);
    let y = random(height);
    let rot = random(0, 180);
    let size = random(2, 30);
    let text = new TextX (x, y, rot, size);
    texts.push(text);    
  }
  
  // FOR LOOP FOR O
  for (let o = 0; o < 25; o++) {
    let x = random(width);
    let y = random(height);
    let rot = random(0, 360);
    let size = random(2, 25);
    let text = new TextO (x, y, rot, size);
    texts.push(text);    
  }

  
  
/////////////////////

  for (let circle of circles1){
    circle.display();
  }
  
  for (let circle of circles2){
    circle.display();
  }

  for (let img of images){
    img.display();
  }
  
  for (let leave of leaves){
    leave.display();
  }

  for (let rect of rects){
    rect.display();
  }
  
  for (let text of texts){
    text.display();
  }
  
}



/////////////////////


class CircleBack{
  constructor(x, y, r, hex){
    this.x = x;
    this.y = y;
    this.r = r;
    this.hex = hex;
  }
  display(){  
    fill(this.hex);
    circle(this.x, this.y, this.r);
  }
} 



class CircleParticles{
  constructor(x, y, r, hex){
    this.x = x;
    this.y = y;
    this.r = r;
    this.hex = hex;
  }
  display(){  
    fill(this.hex);
    circle(this.x, this.y, this.r);
  } 
}

class RandomImage{
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
    image(selected, this.x, this.y, this.size, this.size);    
    pop();
  } 
}


class Leave{
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
    curveVertex(this.x +15, this.y-8);
    curveVertex(this.x+30, this.y);
    curveVertex(this.x+15, this.y+8);
    curveVertex(this.x+1, this.y+1); 
    endShape(CLOSE);

    
    pop();
    
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    //strokeWeight(0.25);
    //line(this.x, this.y, this.x +30, this.y +30);
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
    rect(this.x - 50, this.y - 50, this.size/2, this.size/2); 
    pop();

  } 
}

class Lines{
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
    strokeWeight(0.25);
    line(this.x, this.y, this.x +50, this.y +50);
    pop();
  } 
}


class DottedLines{
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
    strokeWeight(0.25);
    csetLineDash([5, 5]);
    noFill();
    circle(this.x, this.y, this.size*2);
    pop();
  } 

}


class TextX{
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

class TextO{
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

