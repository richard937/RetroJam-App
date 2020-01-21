// alert("connected");

function playSound(e){
let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return;
audio.currentTime = 0;
audio.play();
var slider = document.getElementById("Range");
audio.volume = slider.value/100;
key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


let keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);

var slider = document.getElementById("Range");
var output = document.getElementById("vol");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
