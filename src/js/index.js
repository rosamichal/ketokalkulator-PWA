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
const currentRecipe = {
    name: "",
    ingredients: [],
    getProtein() {
        return this.ingredients.reduce((proteinAll, item) => proteinAll + item.weight * item.ingredient.Protein / 100, 0).toFixed(2)
    },
    getFat() {
        return this.ingredients.reduce((fatAll, item) => fatAll + item.weight * item.ingredient.Fat / 100, 0).toFixed(2)
    },
    getCarbohydrates() {
        return this.ingredients.reduce((carbohydratesAll, item) => carbohydratesAll + item.weight * item.ingredient.Carbohydrates / 100, 0).toFixed(2)
    },
    getEnergy() {
        return this.ingredients.reduce((energyAll, item) => energyAll + (((item.ingredient.Protein + item.ingredient.Carbohydrates) * 4 + item.ingredient.Fat * 9) * item.weight / 100), 0).toFixed(2)
    },
    getRatio() {
        const p = +this.getProtein();
        const c = +this.getCarbohydrates();
        const f = +this.getFat();
        
        return f === 0 ? '0.00' : (p + c) === 0 ? 'sam tłuszcz' : (f / (p + c)).toFixed(2)
}
};


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

    const btnDecrement = document.createElement('button');
    btnDecrement.textContent = '-';
    li.appendChild(btnDecrement);

    const inputWeight = document.createElement('input');
    inputWeight.type = "number";
    inputWeight.min = 0;
    inputWeight.classList.add('ingredients-list__ingredient-weight', 'input');
    inputWeight.addEventListener('input', updateIngredientMacro);
    li.appendChild(inputWeight);

    const btnIncrement = document.createElement('button');
    btnIncrement.textContent = '+';
    li.appendChild(btnIncrement);

    const selectIngredients = document.createElement('select');
    selectIngredients.classList.add('ingredients-list__ingredient', 'input', 'input--select');
    selectIngredients.addEventListener('input', updateIngredientMacro);
    fillIngredientsSelect(selectIngredients);
    li.appendChild(selectIngredients);
    applySelectFilter(selectIngredients);

    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Usuń"
    btnDelete.addEventListener('click', deleteIngredient);
    li.appendChild(btnDelete);

    const ingredientSummary = document.createElement('div');
    ingredientSummary.classList.add('ingredients-list__ingerdient-summary');
    li.appendChild(ingredientSummary);

    const emptyDiv = document.createElement('div');
    ingredientSummary.appendChild(emptyDiv);

    const spanProtein = document.createElement('span');
    spanProtein.textContent = 'B: 0g';
    ingredientSummary.appendChild(spanProtein);
    
    const spanFat = document.createElement('span');
    spanFat.textContent = 'T: 0g';
    ingredientSummary.appendChild(spanFat);
    
    const spanCarbohydrates = document.createElement('span');
    spanCarbohydrates.textContent = 'W: 0g';
    ingredientSummary.appendChild(spanCarbohydrates);


    ingredientsList.appendChild(li);
    currentRecipe.ingredients.push({
        weight: 0,
        ingredient: getIngredients()[0]
    })
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
    
    const ingredientIndex = Array.from(ingredientsList.children).indexOf(li);
    delete currentRecipe.ingredients[ingredientIndex];
    
    ingredientsList.removeChild(li);

    updateRecipeMacro();
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

    const ingredientIndex = Array.from(ingredientsList.children).indexOf(li);
    currentRecipe.ingredients[ingredientIndex] = {
        weight: weightInput.value,
        ingredient
    };

    proteinInput.value = (ingredient.Protein * weightInput.value / 100).toFixed(2);
    fatInput.value = (ingredient.Fat * weightInput.value / 100).toFixed(2);
    carbohydratesInput.value = (ingredient.Carbohydrates * weightInput.value / 100).toFixed(2);
    energyInput.value = (((ingredient.Protein + ingredient.Carbohydrates) * 4 + ingredient.Fat * 9) * weightInput.value / 100).toFixed(2);

    updateRecipeMacro();
}

const updateRecipeMacro = () => {
    const recipeRatio = document.querySelector('.summary__macro--ratio');
    const recipeEnergy = document.querySelector('.summary__macro--energy');
    const recipeProtein = document.querySelector('.summary__macro--protein');
    const recipeFat = document.querySelector('.summary__macro--fat');
    const recipeCarbohydrates = document.querySelector('.summary__macro--carbohydrates');

    recipeRatio.value = currentRecipe.getRatio();
    recipeEnergy.value = currentRecipe.getEnergy();
    recipeProtein.value = currentRecipe.getProtein();
    recipeFat.value = currentRecipe.getFat();
    recipeCarbohydrates.value = currentRecipe.getCarbohydrates();
}

document.addEventListener('DOMContentLoaded', main);