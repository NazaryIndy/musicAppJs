import './style.scss';

import bubblefile from './assets/sounds/bubbles.mp3';
import clayfile from './assets/sounds/clay.mp3';
import confettifile from './assets/sounds/confetti.mp3';
import glimmerfile from './assets/sounds/glimmer.mp3';
import moonfile from './assets/sounds/moon.mp3';
import ufofile from './assets/sounds/ufo.mp3';

window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colours = [
    'lightgreen',
    'lightsalmon',
    'lightseagreen',
    'lightsteelblue',
    'lightyellow',
    'lightskyblue'
  ]

  const soundsFile = [
    bubblefile,
    clayfile,
    confettifile,
    glimmerfile,
    moonfile,
    ufofile
  ]

  sounds.forEach((sound, index) => {
    sound.setAttribute('src', soundsFile[index]);
  })

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      console.log(sounds[index])
      createBubbles(index);
    });
  });

  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colours[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    })
  }

});


