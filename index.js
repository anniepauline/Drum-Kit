"use strict"
let totalDrum = document.querySelectorAll('.drum').length;

// detecting mouse down
for (let i = 0; i < totalDrum; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

// detecting key board press
  document.addEventListener('keypress', function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
  });

// play audio based on key
  function makeSound(key) {
    switch (key) {
      case 'w':
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'a':
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      case 's':
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 'd':
        var tom_1 = new Audio('sounds/tom-1.mp3');
        tom_1.play();
        break;
      case 'j':
        var tom_2 = new Audio('sounds/tom-2.mp3');
        tom_2.play();
        break;
      case 'k':
        var tom_3 = new Audio('sounds/tom-3.mp3');
        tom_3.play();
        break;
      case 'l':
        var tom_4 = new Audio('sounds/tom-4.mp3');
        tom_4.play();
        break;
      default:
        comsole.log(buttonInnerHTML);
    }
  }

function  buttonAnimation(currentKey)
  {
    let activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add('pressed');

    setTimeout(function()
                {activeBtn.classList.remove('pressed'); } ,100);

  }

}
