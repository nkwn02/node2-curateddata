let landmarkNames = ['The Painted Ladies', 'Chinatown', 'Golden Gate Park', 'The Conservatory of Flowers', 'The Ferry Building', 'The Palace of Fine Arts', 'The Castro', 'Pier 39', 'Dolores Park', 'The Golden Gate Bridge', 'Coit Tower', 'Downtown', 'Alcatraz'];
let facts = ['The Fortune Cookie was invented in SF', 'The name of the SF fog is Karl', 'Levis jeans was invented in SF', 'SF has the oldest Japantown in North America','SF has the oldest Chinatown in North America', 'SF is only 7x7 miles', 'Golden Gate Park is bigger than Central Park in NY', 'SF is home to the oldest restraunt in California']

let img;
let myFont;

let sfrando;
let factsrando;

let words;

let landmarks = []

//var arr = [];

//arr = [
   //{
  //   pic: landmark_0.jpg,
    // phrase: 'The Painted Ladies',
//   },
//   {
//     pic: landmark_1.jpg,
//     phrase: 'Chinatown',
  // },
   //{
     //pic: landmark_2.jpg,
     //phrase: 'Golden Gate Park',
  // },
//   {
  //   pic: landmark_3.jpg,
    // phrase: 'The Conservatory of Flowers',
//   },
  // {
    // pic: landmark_4.jpg,
    // phrase: 'The Ferry Building',
  // },
  // {
    // pic: landmark_5.jpg,
     //phrase: 'The Palace of Fine Arts',
  // },
   //{
     //pic: landmark_6.jpg,
     //phrase: 'The Castro',
  // },
   //{
     //pic: landmark_7.jpg,
     //phrase: 'Pier 39',
  // },
   //{
     //pic: landmark_8.jpg,
    // phrase: 'Dolores Park',
  // },
   //{
     //pic: landmark_9.jpg,
    // phrase: 'The Golden Gate Bridge',
  // },
  // {
    // pic: landmark_10.jpg,
    // phrase: 'Coit Tower',
  // },
  // {
    // pic: landmark_11.jpg,
    // phrase: 'Downtown',
  // },
  // {
    // pic: landmark_12.jpg,
    // phrase: 'Alcatraz',
//   },
//];



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
image(img, 0,0);
  //background(200);
  textFont(myFont);
  intText();
  textSize(30);
  console.log(landmarks[int(random(landmarks.length))]);
  console.log(facts.length);

  //button = createButton('Click to learn a fun fact!');
  button = select('#factmaker');
  button.position(290, 500);
  button.mousePressed(buttonPressed);
  button.class('factButton');
}

function draw() {
}

function buttonPressed(){
  factsrando = int(random(facts.length));
  words = ' ' + facts[factsrando] + '.';
  console.log(words);

}


function mousePressed() {
  sfrando = int(random(landmarks.length));
  statement();

//image(babies[0], width/2, height/2)
image(landmarks[sfrando], width*.33, height*0.27, 290, 230);
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
  text(words, width*0.5, height*0.75);
}
