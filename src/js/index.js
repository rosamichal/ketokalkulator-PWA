import '../scss/main.scss';

import {ingredients} from './ingredients'

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
}

const prepareDOMElements = () => {
}

const addEventListeners = () => {

}

document.addEventListener('DOMContentLoaded', main);