import { buttons } from './elements.js';
import * as actions from './actions.js';
import { sound } from './elements.js'

export function registerControls() {
    buttons.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
      })

}

export function registerSound() {
    sound.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        
        actions[action]()
    })
}







