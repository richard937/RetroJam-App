// alert("connected");

function playSound(e){
let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return;
audio.currentTime = 0;
audio.play();
key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


let keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);

var clap = new Audio();
clap.src="sounds/clap.wav"

var hihat = new Audio();
hihat .src="sounds/hihat.wav"

var kick = new Audio();
kick.src="sounds/kick.wav"

var openhat = new Audio();
openhat.src="sounds/openhat.wav"

var boom = new Audio();
boom.src="sounds/boom.wav"

var ride = new Audio();
ride.src="sounds/ride.wav"

var snare = new Audio();
snare.src="sounds/snare.wav"

var tom = new Audio();
tom.src="sounds/tom.wav"

var tink = new Audio();
tink.src="sounds/tink.wav"



