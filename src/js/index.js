import '../scss/main.scss';

import {ingredients} from './ingredients'
import {Select} from './select'

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

let recipeName;
let ingredientsList;
let $alphabet;
let $info;
let $infoWin;
let $infoLose;
let $newGame;

let $wrongLetterCount;
let $visiblePassword;
let $hiddenPassword;


const main = () => {
    prepareDOMElements();
    addEventListeners();

    var mySelect = new Select('.input--select',{
        filtered: 'auto',
        filter_threshold: 7,
        filter_placeholder: 'Wpisz nazwę składnika...'
        
    });
}

const prepareDOMElements = () => {
}

const addEventListeners = () => {

}

document.addEventListener('DOMContentLoaded', main);