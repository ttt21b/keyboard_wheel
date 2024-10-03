let horn;
let carstart;
let radio;
let breaking;
let bear;
let leaves;
let crash;


let isHornLooping = false;
let isCarStartLooping = false;

function preload (){
  horn = loadSound("assets/horn.mp3");
  carstart = loadSound("assets/carstart.mp3");
  // radio = loadSound();
  breaking = loadSound("assets/breaking.mp3");
  bear = loadSound("assets/bear.mp3");
  leaves = loadSound("assets/leaves.mp3");
  crash = loadSound("assets/crash.mp3");
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(125);
}
/*
 // Toggle looping for carstart with key '1'
 if (key == '1') {
  if (isCarStartLooping) {
    carstart.stop();
    isCarStartLooping = false;
  } else {
    carstart.loop();
    isCarStartLooping = true;
  }
}
*/

//Holding '+' makes the horn sound loop
function keyPressed() {
  if (key == '+') {
    if (isHornLooping) {
      horn.stop();
      isHornLooping = false;
    } else {
      horn.loop();
      isHornLooping = true;
    }
  }

  if (key == ' ') {
    if (!horn.isPlaying()) {
      horn.play();
    }
  }
  if (key == '2') {
    if(!key.isPlaying()){
      carstart.play()
    }
  }
  if (key == '5') {
    if(!breaking.isPlaying()){
      breaking.play()
    }
  }
  if (key == '7') {
   if(!bear.isPlaying()){
      bear.play()
   }
  }
  if (key == '8') {
    if(!leaves.isPlaying()){
      leaves.play()
    }
  }
  if (key == '9') {
    if(!crash.isPlaying()){
      crash.play()
    }
  }
}
