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

const fillIngredientsSelect = select => {
    ingredients.map(el => {
        const optionIngredient = document.createElement('option');
        optionIngredient.value = el.id;
        optionIngredient.text = el.name;

        select.appendChild(optionIngredient);
    })
}

const addRecipe = () => {

}

const addIngredient = () => {
    const li = document.createElement('li');
    li.classList.add('ingredients-list__item');

    const inputWeight = document.createElement('input');
    inputWeight.type = "number";
    inputWeight.classList.add('ingredients-list__ingredient-weight', 'input');
    li.appendChild(inputWeight);

    const selectIngredients = document.createElement('select');
    selectIngredients.classList.add('ingredients-list__ingredient', 'input', 'input--select');
    fillIngredientsSelect(selectIngredients);
    li.appendChild(selectIngredients);
    applySelectFilter(selectIngredients);

    const inputProtein = document.createElement('input');
    inputProtein.classList.add('ingredients-list__macro', 'ingredients-list__macro--protein', 'input');
    inputProtein.disabled = true;
    li.appendChild(inputProtein);

    const inputFat = document.createElement('input');
    inputFat.classList.add('ingredients-list__macro', 'ingredients-list__macro--fat', 'input');
    inputFat.disabled = true;
    li.appendChild(inputFat);

    const inputCarbohydrates = document.createElement('input');
    inputCarbohydrates.classList.add('ingredients-list__macro', 'ingredients-list__macro--carbohydrates', 'input');
    inputCarbohydrates.disabled = true;
    li.appendChild(inputCarbohydrates);

    const inputEnergy = document.createElement('input');
    inputEnergy.classList.add('ingredients-list__macro', 'ingredients-list__macro--energy', 'input');
    inputEnergy.disabled = true;
    li.appendChild(inputEnergy);

    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Usuń"
    btnDelete.addEventListener('click', deleteIngredient);
    li.appendChild(btnDelete);

    ingredientsList.appendChild(li);
}

const applySelectFilter = select => {
    var mySelect = new Select(select, {
        filtered: 'auto',
        filter_threshold: 7,
        filter_placeholder: 'Wpisz nazwę składnika...'
    });
}

const deleteIngredient = () => {

}

document.addEventListener('DOMContentLoaded', main);