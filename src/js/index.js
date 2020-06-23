import '../scss/main.scss';

import {
    getIngredients
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
    getIngredients().map(el => {
        const optionIngredient = document.createElement('option');
        optionIngredient.value = el.Id;
        optionIngredient.text = el.Name;

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
    inputWeight.min = 0;
    inputWeight.value = 0;
    inputWeight.classList.add('ingredients-list__ingredient-weight', 'input');
    inputWeight.addEventListener('input', updateIngredientMacro);
    li.appendChild(inputWeight);

    const selectIngredients = document.createElement('select');
    selectIngredients.classList.add('ingredients-list__ingredient', 'input', 'input--select');
    selectIngredients.addEventListener('input', updateIngredientMacro);
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
    const mySelect = new Select(select, {
        filtered: 'auto',
        filter_threshold: 7,
        filter_placeholder: 'Wpisz nazwę składnika...'
    });
}

const deleteIngredient = (event) => {
    const li = event.target.closest('li');
    ingredientsList.removeChild(li);
}

const updateIngredientMacro = event => {
    const li = event.target.closest('.ingredients-list__item');
    const weightInput = li.querySelector('.ingredients-list__ingredient-weight');
    const ingredientSelect = li.querySelector('.ingredients-list__ingredient');
    const proteinInput = li.querySelector('.ingredients-list__macro--protein');
    const fatInput = li.querySelector('.ingredients-list__macro--fat');
    const carbohydratesInput = li.querySelector('.ingredients-list__macro--carbohydrates');
    const energyInput = li.querySelector('.ingredients-list__macro--energy');
    const ingredient = getIngredients().find(i => i.Id == ingredientSelect.value);

    proteinInput.value = ingredient.Protein * weightInput.value / 100;
    fatInput.value = ingredient.Fat * weightInput.value / 100;
    carbohydratesInput.value = ingredient.Carbohydrates * weightInput.value / 100;
    energyInput.value = ((ingredient.Protein + ingredient.Carbohydrates) * 4 + ingredient.Fat * 9) * weightInput.value / 100;
}

document.addEventListener('DOMContentLoaded', main);