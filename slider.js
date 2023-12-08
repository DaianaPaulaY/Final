let img01, img02, img03, img04, img05, img06, img07, img08, img09, img10;
imgs = [];
let currentImg = 0;

function preload() {
img01 = loadImage("gallery/01.png");
img02 = loadImage("gallery/02.png");
img03 = loadImage("gallery/03.png");
img04 = loadImage("gallery/04.png");
img05 = loadImage("gallery/05.png");
img06 = loadImage("gallery/06.png");
img07 = loadImage("gallery/07.png");
img08 = loadImage("gallery/08.png");
img09 = loadImage("gallery/09.png");
img010 =loadImage("gallery/10.png");

}

function setup() {
  createCanvas(350, 250);

  setupButtons();
}

function draw() {
  imgs = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10];
  image(imgs[currentImg], 0, 0, 350, 250);
}

const setupButtons = _ => {
  previous = createButton('Prev');
  previous.position(width*0.5 - 80, height + 20);
  
  previous.mouseClicked(_ => {
    if (currentImg > 0) currentImg--;
  });

  next = createButton('Next');
  next.position(width*0.5 + 50, height + 20);
  
  next.mouseClicked(_ => {
    if (currentImg < 10) currentImg++;
  });
}