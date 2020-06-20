import '../scss/main.scss';

import {
    ingredients
} from './ingredients'
import {
    Select
} from './select'

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

let recipeName;
let ingredientsList;
let btnAddIngredient;
let btnSaveRecipe;


const main = () => {
    prepareDOMElements();
    addEventListeners();

    var mySelect = new Select('.input--select', {
        filtered: 'auto',
        filter_threshold: 7,
        filter_placeholder: 'Wpisz nazwę składnika...'

    });
}

const prepareDOMElements = () => {
    recipeName = document.querySelector('.js--recipe-name');
    ingredientsList = document.querySelector('.js--ingredients-list');
    btnAddIngredient = document.querySelector('.js--btn-add-ingredient');
    btnSaveRecipe = document.querySelector('.js--btn-save-recipe');
}

const addEventListeners = () => {
    btnSaveRecipe.addEventListener('click', addRecipe);
    btnAddIngredient.addEventListener('click', addIngredient);
}

const addRecipe = () => {

}

const addIngredient = () => {

}

const deleteIngredient = () => {
    
}

document.addEventListener('DOMContentLoaded', main);