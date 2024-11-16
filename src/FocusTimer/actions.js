import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'



export function toggleRunning() {
   state.isRunning = document.documentElement.classList.toggle('running')
   timer.countdown()

   sounds.buttonPressAudio.play()
}

export function reset() {
   state.isRunning = false 
   document.documentElement.classList.remove('running')
   timer.updateDisplay()
}

export function more() {
  let more = parseInt(el.minutes.textContent)

  more +=5

  el.minutes.textContent = String(more).padStart(2, "0") 
  sounds.buttonPressAudio.play()

}

export function less() {
   let less = parseInt(el.minutes.textContent)

   less -=5

   el.minutes.textContent = String(less).padStart(2, "0")
   sounds.buttonPressAudio.play()

}

let currentSound = null

export function forest() {
   if (currentSound === sounds.soundForest && !currentSound.paused) {
      currentSound.pause();
      currentSound.currentTime = 0; 
   } else {
      if (currentSound && !currentSound.paused) {
         currentSound.pause();
         currentSound.currentTime = 0;
      }
      
      sounds.soundForest.play();
 
      currentSound = sounds.soundForest;
}

}

export function rain() {
    // Se houver um som tocando e for o mesmo som, pausar
    if (currentSound === sounds.soundRain && !currentSound.paused) {
      currentSound.pause();
      currentSound.currentTime = 0;
   } else {
      // Se outro som estava tocando, pare e resete ele
      if (currentSound && !currentSound.paused) {
         currentSound.pause();
         currentSound.currentTime = 0;
      }
      // Toca o som da chuva
      sounds.soundRain.play();
      // Atualiza o som atual
      currentSound = sounds.soundRain;
   }
   
}

export function coffe() {
    // Se houver um som tocando e for o mesmo som, pausar
    if (currentSound === sounds.soundCoffeeMaker && !currentSound.paused) {
      currentSound.pause();
      currentSound.currentTime = 0;
   } else {
      // Se outro som estava tocando, pare e resete ele
      if (currentSound && !currentSound.paused) {
         currentSound.pause();
         currentSound.currentTime = 0;
      }
      // Toca o som da cafeteira
      sounds.soundCoffeeMaker.play();
      // Atualiza o som atual
      currentSound = sounds.soundCoffeeMaker;
   }
   
}

export function fireplace() {
   // Se houver um som tocando e for o mesmo som, pausar
   if (currentSound === sounds.soundFireplace && !currentSound.paused) {
      currentSound.pause();
      currentSound.currentTime = 0;
   } else {
      // Se outro som estava tocando, pare e resete ele
      if (currentSound && !currentSound.paused) {
         currentSound.pause();
         currentSound.currentTime = 0;
      }
      // Toca o som da lareira
      sounds.soundFireplace.play();
      // Atualiza o som atual
      currentSound = sounds.soundFireplace;
   }
}