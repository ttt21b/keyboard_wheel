let horn;
let carstart;
let radio;
let breaking;
let bear;
let leaves;
let crash;
let carengine;
let tensemusic;
let radiostatic; //this is the static that plays when you change radio stations
let track1;
let track2;
let track3;

let isHornLooping = false;
let isCarStartLooping = false;
let isCarEngineLooping = false;



function preload (){
  horn = loadSound("assets/horn.mp3");
  carengine = loadSound("assets/realcarenginehum.mp3")
  carstart = loadSound("assets/carstartup.mp3");
  // calmmusic = loadSound();
  // winterbells = loadSound();
  // 
  breaking = loadSound("assets/breaking.mp3");
  bear = loadSound("assets/bear.mp3");
  leaves = loadSound("assets/leaves.mp3");
  crash = loadSound("assets/crash.mp3");
  tensemusic = loadSound("assets/tensemusic.mp3")
  radiostatic = loadSound("assets/radiotuningsound.mp3")
  track1 = loadSound("assets/outofmyleague.mp3")
  track2 = loadSound("assets/aline.mp3")
  track3 = loadSound("assets/goodluckbabe.mp3")

}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(125);
}


//Holding '+' makes the horn sound loop but we'll change that to radio when we get the sound 
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

  // i made it so that carstart is just the key and engine turning on -tien
  if (key == '2') {
    if(!carstart.isPlaying()){
      carstart.play()
    }
  }
 
// this is the car engine hum so its not just quiet after the engine start - tien
  if (key == 'w') {
    if (isCarEngineLooping) {
      carengine.stop();
      isCarEngineLooping = false;
       } else {
        carengine.loop();
        isCarEngineLooping = true;
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
  if (key == 'm') {
    if(!tensemusic.isPlaying()){
      tensemusic.play()
    } else {
      tensemusic.stop()
    }
  }

  // A plays out of my league
  if ( key == 'A') {
    if(!track1.isPlaying()){
      track1.play()
    } else {
      track1.stop()
    }
  }
// S plays aline
  if ( key == 'S') {
    if(!track2.isPlaying()){
      track2.play()
    } else {
      track2.stop()
    }
  }
  // D plays good luck babe
if ( key == 'D') {
    if(!track3.isPlaying()){
      track3.play()
    } else {
      track3.stop()
    }
  }
}
