let gender = ['Her', 'His', 'Thier'];
let name = ['Todd', 'Sara', 'Shaggy', 'LeBron', 'Gandalf', 'Yoda', 'Sammy', 'Tracy', 'Kermit', 'Romeo', 'Onyonkopon'];


let babyrando;
let genderrando;
let namerando;

let words;

let babies = []

function preload(){

 for (let i = 0; i <= 9; i++){
    babies[i] = loadImage(`assets/baby_${i}.jpg`)
 }

}

function setup() {
  createCanvas(600, 400);
  background(200);
  intText();
  console.log(babies[int(random(babies.length))]);
  console.log(gender[3]);
  console.log(name.length)
}

function draw() {
}

function mousePressed() {
  babyrando = int(random(babies.length));
  genderrando = int(random(gender.length));
  namerando = int(random(name.length));
  words = ' ' + gender[genderrando] + ' ' + 'name is' + ' ' + name[namerando] + '.';
  statement();
  console.log(words);

//image(babies[0], width/2, height/2)
image(babies[babyrando], width*0.42, height*0.3, 100, 130);
}


function intText() {
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text('Click to make your baby', width*0.5, height*0.1);
}

function statement() {
  background(200);
  intText();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text('This is your baby.', width*0.5, height*0.2);
  text(words, width*0.5, height*0.75)
}
