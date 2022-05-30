import {exports} from './sound.js'; 

/*
Part 1 - Working with sound files
=================================
*/

//Load the sounds
exports.sounds.load([
  "sounds/shoot.wav", 
  "sounds/music.wav",
  "sounds/bounce.mp3"
]);

//Assign the callback function that should run
//when the sounds have loaded
exports.sounds.whenLoaded = setup;
var FreqTrue = true;

function setup() {
  console.log("sounds loaded");

  //Create the sounds
  var shoot = exports.sounds["sounds/shoot.wav"],
      music = exports.sounds["sounds/music.wav"],
      bounce = exports.sounds["sounds/bounce.mp3"];

  //Pan the shoot sound to the right
  shoot.pan = 0.8;

  //Make the music loop
  music.loop = true;

  //Set the pan to the left
  music.pan = -0.8;

  //Set the music volume
  music.volume = 0.7;  

  //Set a reverb effect on the bounce sound
  //arguments: duration, decay, reverse?
  //music.setReverb(2, 2, false);

  //Set the sound's `reverb` property to `false` to turn it off
  //music.reverb = false;

  //Add an echo effect to the bounce sound
  //arguments: delay time, feedback time, optional frequency filtering
  bounce.setEcho(0.2, 0.3, 1000);

  //Set `echo` to false to turn it off
  //bounce.echo = false;
  
  //Optionally set the music playback rate to half speed
  //music.playbackRate = 0.5;

  //Capture the keyboard events
  var a = exports.keyboard(65),
      b = exports.keyboard(66),
      c = exports.keyboard(67),
      d = exports.keyboard(68),
      e = exports.keyboard(69),
      f = exports.keyboard(70),
      g = exports.keyboard(71),
      h = exports.keyboard(72),
      p = exports.keyboard(80),
      z = exports.keyboard(90);
  //Control the sounds based on which keys are pressed

  //Play the loaded shoot sound
  a.press = function() { shoot.play() };

  //Play the loaded music sound
  b.press = function() {
    if (!music.playing) {
      music.play();
    }
    console.log("music playing");
  };

  //Pause the music 
  c.press = function() {
    music.pause();
    console.log("music paused");
  };

  //Restart the music 
  d.press = function() {
    music.restart();
    console.log("music restarted");
  };

  //Play the music from the 10 second mark
  e.press = function() {
    music.playFrom(10);
    console.log("music start point changed");
  };
  
  //Play the bounce sound
  f.press = function() { bounce.play() };

  //Fade the music out over 3 seconds
  g.press = function() { 
    music.fadeOut(3);
  };

  //Fade the music in over 3 seconds
  h.press = function() { 
    music.fadeIn(3);
  };

  p.press = function(){
    frequencySound()
    console.log("frequency");
  }
  
  z.press = function(){ FreqTrue = false; console.log("ola")};
}

/*
Part 2 - Working with sound effects
===================================
*/

var i = exports.keyboard(73),
    j = exports.keyboard(74),
    k = exports.keyboard(75),
    l = exports.keyboard(76);

i.press = function(){ shootSound() };
j.press = function(){ jumpSound() };
k.press = function(){ explosionSound() };
l.press = function(){ bonusSound() };

//The sound effect functions

//The shoot sound
function shootSound() {
  exports.soundEffect(
    1046.5,           //frequency
    0,                //attack
    0.3,              //decay
    "sawtooth",       //waveform
    1,                //Volume
    -0.8,             //pan
    0,                //wait before playing
    1200,             //pitch bend amount
    false,            //reverse bend
    0,                //random pitch range
    25,               //dissonance
    [0.2, 0.2, 2000], //echo: [delay, feedback, filter]
    undefined         //reverb: [duration, decay, reverse?]
  );
}

//The jump sound
function jumpSound() {
    exports.soundEffect(
    523.25,       //frequency
    0.05,         //attack
    0.2,          //decay
    "sine",       //waveform
    3,            //volume
    0.8,          //pan
    0,            //wait before playing
    600,          //pitch bend amount
    true,         //reverse
    100,          //random pitch range
    0,            //dissonance
    undefined,    //echo: [delay, feedback, filter]
    undefined     //reverb: [duration, decay, reverse?]
  );
}

//The explosion sound
function explosionSound() {
    exports.soundEffect(
    16,          //frequency
    0,           //attack
    1,           //decay
    "sawtooth",  //waveform
    1,           //volume
    0,           //pan
    0,           //wait before playing
    0,           //pitch bend amount
    false,       //reverse
    0,           //random pitch range
    50,          //dissonance
    undefined,   //echo: [delay, feedback, filter]
    undefined    //reverb: [duration, decay, reverse?]
  );
}

//The bonus points sound
function bonusSound() {
  //D
  exports.soundEffect(587.33, 0, 0.2, "square", 1, 0, 0);
  //A
  exports.soundEffect(880, 0, 0.2, "square", 1, 0, 0.1);
  //High D
  exports.soundEffect(1174.66, 0, 0.3, "square", 1, 0, 0.2);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//Nossas funcoes
function frequencySound() {
  while(FreqTrue){
    console.log(FreqTrue);
    sleep(150);
    exports.soundEffect(
      200,          //frequency
      0,           //attack
      0.1,           //decay
      "sine",  //waveform
      0.2,           //volume
      0,           //pan
      0,           //wait before playing
      0,           //pitch bend amount
      false,       //reverse
      0,           //random pitch range
      0,          //dissonance
      undefined,   //echo: [delay, feedback, filter]
      undefined    //reverb: [duration, decay, reverse?]
    );
  }
  FreqTrue = true;
}