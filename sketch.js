let landmarkNames = ['The Painted Ladies', 'Chinatown', 'Golden Gate Park', 'The Conservatory of Flowers', 'The Ferry Building', 'The Palace of Fine Arts', 'The Castro', 'Pier 39', 'Dolores Park', 'The Golden Gate Bridge', 'Coit Tower', 'Downtown', 'Alcatraz'];
let facts = ['The Fortune Cookie was invented in SF', 'The name of the SF fog is Karl', 'Levis jeans was invented in SF', 'SF has the oldest Japantown in North America','SF has the oldest Chinatown in North America', 'SF is only 7x7 miles', 'Golden Gate Park is bigger than Central Park in NY', 'SF is home to the oldest restraunt in California']

let img;
let myFont;

let sfrando;
let factsrando;

let words;

let landmarks = []

let button;
let cnv;

function preload(){

myFont = loadFont('assets/Foglihten-Regular.otf')

  img = loadImage('wallpapersf.jpg');

 for (let i = 0; i <= 12; i++){
    landmarks[i] = loadImage(`assets/landmark_${i}.jpg`)

 }


}

function setup() {
cnv = createCanvas(800, 600);
cnv.parent('#canvasDiv');
image(img, 0, 0);
  //background(200);
  textFont(myFont);
  intText();
  textSize(30);
  console.log(landmarks[int(random(landmarks.length))]);
  console.log(facts.length);

  button = select('#factmaker');
  button.position(370, 685);
  button.mousePressed(buttonPressed);
  button.class('factButton');
}

function draw() {
}

function mousePressed(){
  if (mouseX > 1 && mouseX < 800){
    if (mouseY > -1 && mouseY < 600) {

    sfrando = int(random(landmarks.length));
    statement();

    image(landmarks[sfrando], width*.13, height*0.24, 590, 430);

  } else {

  }
  } else {

  }

}

function buttonPressed(){
  image(img, 0, 0);
  factsrando = int(random(facts.length));
  words = ' ' + facts[factsrando] + '.';
  console.log(words);

  textAlign(CENTER);
  textSize(20);
  text('Click again see where you should visit in SF', width*0.5, height*0.1);

  textAlign(CENTER);
  textSize(25);
  text(words, width*0.5, height*0.5);


}


function intText() {
  fill(156, 129, 67);
  textAlign(CENTER);
  textSize(20);
  text('Click to see where you should visit in SF', width*0.5, height*0.1);
}

function statement() {
  image(img, 0, 0);
  //background(200);
  intText();
  fill(156, 129, 67);
  textAlign(CENTER);
  textSize(25);
  text('You should go to:', width*0.5, height*0.2);
  //text(words, width*0.5, height*0.75);
}
