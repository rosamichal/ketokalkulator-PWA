import '../scss/main.scss';

import {
    getIngredients
} from './ingredients'
import {
    Select
} from './select'
import {
    Ingredient
} from './models/ingredient';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

let recipeName;
let ingredientsList;
let btnAddIngredient;
let btnSaveRecipe;
let allRecipes = [];
let recipeContent;
let currentRecipe;
let recipeNameError;
let recipeIngredientsError;

const main = () => {
    prepareDOMElements();
    addEventListeners();
    newRecipe();
    loadRecipes();
}

const prepareDOMElements = () => {
    recipeName = document.querySelector('.js--recipe-name');
    ingredientsList = document.querySelector('.js--ingredients-list');
    btnAddIngredient = document.querySelector('.js--btn-add-ingredient');
    btnSaveRecipe = document.querySelector('.js--btn-save-recipe');
    recipeContent = document.querySelector('.js--recipe-list-content');
    recipeNameError = document.querySelector('.js--name-error');
    recipeIngredientsError = document.querySelector('.js--ingredients-error');
}

const addEventListeners = () => {
    btnSaveRecipe.addEventListener('click', addRecipe);
    btnAddIngredient.addEventListener('click', addIngredient);
    recipeName.addEventListener('input', changeRecipeName);
}

const newRecipe = () => {
    recipeName.value = '';
    ingredientsList.innerHTML = '';
    currentRecipe = {
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

            return f === 0 ? '-- : 1' : (p + c) === 0 ? 'sam tłuszcz' : `${(f / (p + c)).toFixed(2)} : 1`
        }
    };
}

const loadRecipes = () => {
    recipeContent.innerHTML = '';
    allRecipes = JSON.parse(localStorage.getItem('allRecipes'), reviver) || [];
    allRecipes.forEach(recipe => {
        renderRecipe(recipe);
    });
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
    if (!currentRecipe.name) {
        recipeNameError.textContent = 'Nazwa dania jest wymagana';
        return;
    }
    if (!+currentRecipe.getEnergy()) {
        recipeIngredientsError.textContent = 'Dodaj przynajmniej 1 składnik';
        return;
    }
    allRecipes.push(currentRecipe);
    localStorage.setItem('allRecipes', JSON.stringify(allRecipes, replacer, 2));
    renderRecipe(currentRecipe);
    newRecipe();
}

const renderRecipe = (recipe) => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe-list-item');

    const recipeHeader = document.createElement('h2');
    recipeHeader.classList.add('recipe-list-item__header');
    recipeHeader.textContent = recipe.name;
    recipeItem.appendChild(recipeHeader);

    const macroContent = document.createElement('div');
    macroContent.classList.add('recipe-list-item__macro');
    recipeItem.appendChild(macroContent);

    const protein = document.createElement('span');
    protein.textContent = recipe.getProtein();
    macroContent.appendChild(protein);

    const fat = document.createElement('span');
    fat.textContent = recipe.getFat();
    macroContent.appendChild(fat);

    const carbohydrates = document.createElement('span');
    carbohydrates.textContent = recipe.getCarbohydrates();
    macroContent.appendChild(carbohydrates);

    const recipeSummary = document.createElement('div');
    recipeSummary.classList.add('recipe-list-item__summary');
    recipeItem.appendChild(recipeSummary);

    const kcal = document.createElement('span');
    kcal.textContent = `Kcal: ${recipe.getEnergy()}`;
    recipeSummary.appendChild(kcal);

    const ratio = document.createElement('span');
    ratio.textContent = `Stosunek ketogenny ${recipe.getRatio()}`;
    recipeSummary.appendChild(ratio);

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList.add("recipe-list-item__buttons-wrapper");
    recipeItem.appendChild(buttonsWrapper);

    const editButton = document.createElement('button');
    editButton.classList.add('recipe-list-item__button-edit', 'js--recipe-button-edit');
    editButton.textContent = 'Edytuj';
    editButton.addEventListener('click', editRecipe);
    buttonsWrapper.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('recipe-list-item__button-delete', 'js--recipe-button-delete');
    deleteButton.textContent = 'Usuń';
    deleteButton.addEventListener('click', deleteRecipe);
    buttonsWrapper.appendChild(deleteButton);

    recipeContent.appendChild(recipeItem);
}

const editRecipe = event => {
    const recipe = event.target.closest('.recipe-list-item');
    const recipeIndex = Array.from(recipeContent.children).indexOf(recipe);
    currentRecipe = allRecipes[recipeIndex];

    loadCurrentRecipe();
}

const deleteRecipe = event => {
    const recipe = event.target.closest('.recipe-list-item');
    const recipeIndex = Array.from(recipeContent.children).indexOf(recipe);

    allRecipes.splice(recipeIndex, 1);
    localStorage.setItem('allRecipes', JSON.stringify(allRecipes, replacer, 2));
    recipeContent.removeChild(recipe);
}

const loadCurrentRecipe = () => {
    recipeName.value = currentRecipe.name;
    currentRecipe.ingredients.forEach(element => {
        renderIngredients(element);
    })
}

const addIngredient = () => {
    currentRecipe.ingredients.push({
        weight: 0,
        ingredient: getIngredients()[0]
    })
    renderIngredients();
}

const renderIngredients = (ingredient) => {
    const li = document.createElement('li');
    li.classList.add('ingredients-list__item');

    const btnDecrement = document.createElement('button');
    btnDecrement.innerHTML = '<i class="fas fa-minus"></i>';
    btnDecrement.addEventListener('click', decrementWeight);
    li.appendChild(btnDecrement);

    const inputWeight = document.createElement('input');
    inputWeight.type = "number";
    inputWeight.min = 0;
    inputWeight.classList.add('ingredients-list__ingredient-weight', 'input');
    inputWeight.addEventListener('input', updateIngredientMacro);
    li.appendChild(inputWeight);

    const btnIncrement = document.createElement('button');
    btnIncrement.innerHTML = '<i class="fas fa-plus"></i>';
    btnIncrement.addEventListener('click', incrementWeight);
    li.appendChild(btnIncrement);

    const selectIngredients = document.createElement('select');
    selectIngredients.classList.add('ingredients-list__ingredient', 'input', 'input--select');
    selectIngredients.addEventListener('input', updateIngredientMacro);
    fillIngredientsSelect(selectIngredients);
    li.appendChild(selectIngredients);
    applySelectFilter(selectIngredients);

    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    btnDelete.addEventListener('click', deleteIngredient);
    li.appendChild(btnDelete);

    const ingredientSummary = document.createElement('div');
    ingredientSummary.classList.add('ingredients-list__ingerdient-summary');
    li.appendChild(ingredientSummary);

    const emptyDiv = document.createElement('div');
    ingredientSummary.appendChild(emptyDiv);

    const spanProtein = document.createElement('span');
    spanProtein.classList.add('ingredients-list__macro--protein');
    spanProtein.textContent = 'B: 0g';
    ingredientSummary.appendChild(spanProtein);

    const spanFat = document.createElement('span');
    spanFat.classList.add('ingredients-list__macro--fat');
    spanFat.textContent = 'T: 0g';
    ingredientSummary.appendChild(spanFat);

    const spanCarbohydrates = document.createElement('span');
    spanCarbohydrates.classList.add('ingredients-list__macro--carbohydrates');
    spanCarbohydrates.textContent = 'W: 0g';
    ingredientSummary.appendChild(spanCarbohydrates);

    if (ingredient) {
        inputWeight.value = ingredient.weight;
        selectIngredients.value = ingredient.ingredient.Id;
    }

    ingredientsList.appendChild(li);

    recipeIngredientsError.textContent = '';
}

const applySelectFilter = select => {
    const mySelect = new Select(select, {
        filtered: 'auto',
        filter_threshold: 7,
        filter_placeholder: 'Wpisz nazwę składnika...'
    });
}

const deleteIngredient = event => {
    const li = event.target.closest('li');

    const ingredientIndex = Array.from(ingredientsList.children).indexOf(li);
    currentRecipe.ingredients.splice(ingredientIndex, 1);

    ingredientsList.removeChild(li);

    updateRecipeMacro();
    if (!+currentRecipe.getEnergy()) {
        recipeIngredientsError.textContent = 'Dodaj przynajmniej 1 składnik';
    }
}

const updateIngredientMacro = event => {
    const li = event.target.closest('.ingredients-list__item');
    const weightInput = li.querySelector('.ingredients-list__ingredient-weight');
    const ingredientSelect = li.querySelector('.ingredients-list__ingredient');
    const proteinInput = li.querySelector('.ingredients-list__macro--protein');
    const fatInput = li.querySelector('.ingredients-list__macro--fat');
    const carbohydratesInput = li.querySelector('.ingredients-list__macro--carbohydrates');
    //const energyInput = li.querySelector('.ingredients-list__macro--energy');
    const ingredient = getIngredients().find(i => i.Id == ingredientSelect.value);

    const ingredientIndex = Array.from(ingredientsList.children).indexOf(li);
    currentRecipe.ingredients[ingredientIndex] = {
        weight: weightInput.value,
        ingredient
    };

    proteinInput.textContent = `B: ${(ingredient.Protein * weightInput.value / 100).toFixed(2)} g`;
    fatInput.textContent = `T: ${(ingredient.Fat * weightInput.value / 100).toFixed(2)} g`;
    carbohydratesInput.textContent = `W: ${(ingredient.Carbohydrates * weightInput.value / 100).toFixed(2)} g`;
    //energyInput.value = (((ingredient.Protein + ingredient.Carbohydrates) * 4 + ingredient.Fat * 9) * weightInput.value / 100).toFixed(2);

    updateRecipeMacro();
}

const updateRecipeMacro = () => {
    const recipeRatio = document.querySelector('.js--summary__macro--ratio');
    const recipeEnergy = document.querySelector('.js--summary__macro--energy');
    const recipeProtein = document.querySelector('.js--summary__macro--protein');
    const recipeFat = document.querySelector('.js--summary__macro--fat');
    const recipeCarbohydrates = document.querySelector('.js--summary__macro--carbohydrates');

    recipeRatio.textContent = currentRecipe.getRatio();
    recipeEnergy.textContent = currentRecipe.getEnergy();
    recipeProtein.textContent = currentRecipe.getProtein();
    recipeFat.textContent = currentRecipe.getFat();
    recipeCarbohydrates.textContent = currentRecipe.getCarbohydrates();
}

const changeRecipeName = event => {
    currentRecipe.name = event.target.value;
    recipeNameError.textContent = !currentRecipe.name ? 'Nazwa dania jest wymagana.' : '';
}

const incrementWeight = event => {
    const button = event.target;
    const weightInput = button.closest('li').querySelector('.ingredients-list__ingredient-weight');
    weightInput.value++;
    weightInput.dispatchEvent(new Event('input'));
    recipeIngredientsError.textContent = '';
}

const decrementWeight = event => {
    const button = event.target;
    const weightInput = button.closest('li').querySelector('.ingredients-list__ingredient-weight');
    if (weightInput.value > 0) {
        weightInput.value--;
        weightInput.dispatchEvent(new Event('input'));
    }

    if (!+currentRecipe.getEnergy()) {
        recipeIngredientsError.textContent = 'Dodaj przynajmniej 1 składnik';
    }
}

let replacer = (key, value) => {
    if (typeof value === 'function') {
        return value.toString();
    }
    return value;
}

let reviver = (key, value) => {
    if (typeof value === 'string' &&
        value.indexOf('function ') === 0) {
        let functionTemplate = `(${value})`;
        return eval(functionTemplate);
    }
    return value;
}

document.addEventListener('DOMContentLoaded', main);