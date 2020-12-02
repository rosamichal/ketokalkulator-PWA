import '../scss/main.scss';

import {
    getIngredients
} from './ingredients'

// uncomment the lines below to enable PWA
import {
    registerSW
} from './pwa.js';

registerSW();

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallButton();
});

let recipeName;
let ingredientsList;
let btnAddIngredient;
let btnSaveRecipe;
let btnNewRecipe;
let btnInstall;
let allRecipes = [];
let recipeContent;
let currentRecipe;
let recipeNameError;
let recipeIngredientsError;
let recipeNote;
let summaryElement;
let headerElement;
let recipePopup;
let popupEditButton;
// let popupDeleteButton;
let popupCloseButton;
let popupRecipeName;
let popupRecipeIngredientsList;
let popupNoteWrapper;
let popupNote;
let popupCarbohydrates;
let popupProtein;
let popupFat;
let popupEnergy;
let popupRatio;

let popupIngredientsList;
let popupIngredientsListCloseButton;
let popupIngredientsListSearch;
let popupIngredientsListList;

let recipeSearch;
let noRecipeFoundLabel;

const main = () => {
    prepareDOMElements();
    addEventListeners();
    newRecipe();
    loadRecipes();
}

const prepareDOMElements = () => {
    recipeName = document.querySelector('.js--recipe-name');
    recipeNote = document.querySelector('.js--recipe-note');
    ingredientsList = document.querySelector('.js--ingredients-list');
    btnAddIngredient = document.querySelector('.js--btn-add-ingredient');
    btnSaveRecipe = document.querySelector('.js--btn-save-recipe');
    btnNewRecipe = document.querySelector('.js--btn-new-recipe');
    btnInstall = document.querySelector('.js--btn-install');
    recipeContent = document.querySelector('.js--recipe-list-content');
    recipeNameError = document.querySelector('.js--name-error');
    recipeIngredientsError = document.querySelector('.js--ingredients-error');
    summaryElement = document.querySelector('.js--summary');
    headerElement = document.querySelector('.js--header');
    recipePopup = document.querySelector('.js--recipe-popup');
    popupCloseButton = document.querySelector('.js--popup__close-button');
    popupEditButton = document.querySelector('.js--popup__edit-button');
    // popupDeleteButton = document.querySelector('.js--popup__delete-button');
    popupRecipeName = document.querySelector('.js--popup__name');
    popupRecipeIngredientsList = document.querySelector('.js--popup__ingredients-list');
    popupNoteWrapper = document.querySelector('.js--popup__note-wrapper');
    popupNote = document.querySelector('.js--popup__note');
    popupCarbohydrates = document.querySelector('.js--popup__macro-carbohydrates');
    popupProtein = document.querySelector('.js--popup__macro-protein');
    popupFat = document.querySelector('.js--popup__macro-fat');
    popupEnergy = document.querySelector('.js--popup__macro-energy');
    popupRatio = document.querySelector('.js--popup__macro-ratio');
    popupIngredientsList = document.querySelector('.js--ingredients-list-popup');
    popupIngredientsListCloseButton = document.querySelector('.js--ingredients-list-popup__close-button');
    popupIngredientsListSearch = document.querySelector('.js--ingredients-list-popup__search');
    popupIngredientsListList = document.querySelector('.js--ingredients-list-popup__list');
    recipeSearch = document.querySelector('.js--recipe-search');
    noRecipeFoundLabel = document.querySelector('.js--no-recipe-found-label');
}

const addEventListeners = () => {
    window.addEventListener('scroll', setFixedToRecipeSummary)
    btnSaveRecipe.addEventListener('click', addRecipe);
    btnNewRecipe.addEventListener('click', newRecipe);
    btnInstall.addEventListener('click', installPwaApp);
    btnAddIngredient.addEventListener('click', addIngredient);
    recipeName.addEventListener('input', changeRecipeName);
    recipeNote.addEventListener('input', changeRecipeNote);
    popupCloseButton.addEventListener('click', closePopup);
    popupEditButton.addEventListener('click', popupEditRecipe);
    // popupDeleteButton.addEventListener('click', deleteRecipe);
    popupIngredientsListCloseButton.addEventListener('click', closePopup);
    popupIngredientsListSearch.addEventListener('input', searchIngredients);
    recipeSearch.addEventListener('input', searchRecipes);
}

const newRecipe = () => {
    recipeName.value = '';
    ingredientsList.innerHTML = '';
    recipeNote.value = '';

    currentRecipe = {
        name: "",
        ingredients: [],
        note: "",
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

            return f === 0 ? '-- : 1' : (p + c) === 0 ? 'sam tłuszcz' : `${(f / (p + c)).toFixed(1)} : 1`
        }
    };
    addIngredient();

    updateRecipeMacro();
}

const loadRecipes = searchString => {
    allRecipes = JSON.parse(localStorage.getItem('allRecipes')) || [];
    if (searchString) {
        allRecipes = allRecipes.filter(recipe => recipe.name.toUpperCase().includes(searchString.trim().toUpperCase()));
    }
    renderAllRecipes();
}

const compareRecipe = (a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
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
    if (!+currentRecipe.energy) {
        recipeIngredientsError.textContent = 'Dodaj przynajmniej 1 składnik';
        return;
    }

    currentRecipe.ingredients = currentRecipe.ingredients.filter(ingredient => ingredient.weight > 0);

    persistRecipeMacro(currentRecipe);
    const recipeIndex = allRecipes.findIndex(recipe => recipe.name === currentRecipe.name);
    if (recipeIndex === -1) {
        allRecipes.push(currentRecipe);
    } else {
        allRecipes[recipeIndex] = currentRecipe;
    }
    renderAllRecipes();

    localStorage.setItem('allRecipes', JSON.stringify(allRecipes));
    newRecipe();
}

const persistRecipeMacro = recipe => {
    let protein = 0;
    let fat = 0;
    let carbohydrates = 0;

    recipe.ingredients.forEach(item => {
        protein += item.weight * item.ingredient.Protein / 100;
        fat += item.weight * item.ingredient.Fat / 100;
        carbohydrates += item.weight * item.ingredient.Carbohydrates / 100;
    });

    recipe.protein = protein.toFixed(2);
    recipe.fat = fat.toFixed(2);
    recipe.carbohydrates = carbohydrates.toFixed(2);
    recipe.energy = ((protein + carbohydrates) * 4 + fat * 9).toFixed(2);
    recipe.ratio = fat === 0 ?
        '-- : 1' :
        (protein + carbohydrates) === 0 ?
            'sam tłuszcz' :
            `${(fat / (protein + carbohydrates)).toFixed(1)} : 1`;
}

const renderAllRecipes = () => {
    recipeContent.innerHTML = '';
    if (allRecipes.length === 0) {
        noRecipeFoundLabel.classList.remove('hidden');
    } else {
        noRecipeFoundLabel.classList.add('hidden');
        allRecipes.sort(compareRecipe).forEach(recipe => renderRecipe(recipe));
    }
}

const searchRecipes = event => {
    const searchString = event.target.value;
    loadRecipes(searchString);
}

const renderRecipe = (recipe) => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe-list-item');
    recipeItem.addEventListener('click', showRecipePopup); //toggleIngredientsList

    const recipeHeader = document.createElement('h2');
    recipeHeader.classList.add('recipe-list-item__header');
    recipeHeader.textContent = recipe.name;
    recipeItem.appendChild(recipeHeader);

    const macroContent = document.createElement('div');
    macroContent.classList.add('recipe-list-item__macro');
    recipeItem.appendChild(macroContent);

    const protein = document.createElement('span');
    protein.textContent = `B: ${recipe.protein}`;
    macroContent.appendChild(protein);

    const fat = document.createElement('span');
    fat.textContent = `T: ${recipe.fat}`;
    macroContent.appendChild(fat);

    const carbohydrates = document.createElement('span');
    carbohydrates.textContent = `W: ${recipe.carbohydrates}`;
    macroContent.appendChild(carbohydrates);

    const recipeSummary = document.createElement('div');
    recipeSummary.classList.add('recipe-list-item__summary');
    recipeItem.appendChild(recipeSummary);

    const kcal = document.createElement('span');
    kcal.textContent = `Kcal: ${recipe.energy}`;
    recipeSummary.appendChild(kcal);

    const ratio = document.createElement('span');
    ratio.textContent = `Stosunek ketogenny ${recipe.ratio}`;
    recipeSummary.appendChild(ratio);

    const ingredientListWrapper = document.createElement("div");
    ingredientListWrapper.classList.add("recipe-list-item__ingredients-list-wrapper", "js--ingredients-list-wrapper", "hidden");
    recipeItem.appendChild(ingredientListWrapper);

    const ingredientsHeader = document.createElement("h3");
    ingredientsHeader.classList.add("recipe-list-item__ingredients-header");
    ingredientsHeader.innerText = "Składniki";
    ingredientListWrapper.appendChild(ingredientsHeader);

    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("recipe-list-item__ingredients-list")
    ingredientListWrapper.appendChild(ingredientsList);

    recipe.ingredients.map(item => {
        const ingredientItem = document.createElement("li");
        ingredientItem.innerText = `${item.weight} g ${item.ingredient.Name}`;
        ingredientsList.appendChild(ingredientItem);
    })

    if (recipe.note) {
        const noteWrapper = document.createElement("div");
        noteWrapper.classList.add("js--note-wrapper", "hidden");
        recipeItem.appendChild(noteWrapper);

        const noteHeader = document.createElement("h3");
        noteHeader.classList.add("recipe-list-item__note-header");
        noteHeader.innerText = "Notatka";
        noteWrapper.appendChild(noteHeader);

        const noteContent = document.createElement("p");
        noteContent.classList.add("recipe-list-item__note-content");
        noteContent.innerText = recipe.note;
        noteWrapper.appendChild(noteContent);
    }

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
    //const recipeIndex = Array.from(recipeContent.children).indexOf(recipe);
    const recipeName = recipe.querySelector('.recipe-list-item__header').textContent;

    fillEditedRecipe(recipeName);

    event.stopPropagation();
}

const popupEditRecipe = event => {
    fillEditedRecipe(popupRecipeName.textContent);
    closePopup(event);
}

const fillEditedRecipe = recipeName => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // Deep Clone
    currentRecipe = JSON.parse(JSON.stringify(allRecipes.find(recipe => recipe.name === recipeName)));

    loadCurrentRecipe();
}

const deleteRecipe = event => {
    const recipe = event.target.closest('.recipe-list-item');
    const recipeIndex = Array.from(recipeContent.children).indexOf(recipe);

    allRecipes.splice(recipeIndex, 1);
    localStorage.setItem('allRecipes', JSON.stringify(allRecipes));
    recipeContent.removeChild(recipe);

    if (allRecipes.length === 0){
        noRecipeFoundLabel.classList.remove('hidden');
    }
}

const loadCurrentRecipe = () => {
    recipeName.value = currentRecipe.name;
    recipeNote.value = currentRecipe.note;
    ingredientsList.innerHTML = '';
    currentRecipe.ingredients.forEach(element => {
        renderIngredient(element);
    })
}

//to delete
const toggleIngredientsList = event => {
    const recipe = event.target.closest('.recipe-list-item');
    const ingredientsList = recipe.querySelector('.js--ingredients-list-wrapper');
    const note = recipe.querySelector('.js--note-wrapper');
    ingredientsList.classList.toggle('hidden');
    note.classList.toggle('hidden');
}
const showRecipePopup = event => {
    const recipeListItem = event.target.closest('.recipe-list-item');
    const recipeName = recipeListItem.querySelector('.recipe-list-item__header').textContent;
    popupRecipeName.textContent = recipeName;

    const recipe = allRecipes.find(recipe => recipe.name === recipeName);

    let protein = 0;
    let fat = 0;
    let carbohydrates = 0;

    popupRecipeIngredientsList.innerHTML = '';
    recipe.ingredients.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.weight} g ${item.ingredient.Name}`;
        popupRecipeIngredientsList.appendChild(li);

        protein += item.weight * item.ingredient.Protein / 100;
        fat += item.weight * item.ingredient.Fat / 100;
        carbohydrates += item.weight * item.ingredient.Carbohydrates / 100;
    });

    if (recipe.note) {
        popupNoteWrapper.classList.remove('hidden');
        popupNote.textContent = recipe.note;
    }
    else {
        popupNoteWrapper.classList.add('hidden');
    }

    popupProtein.textContent = protein.toFixed(2);
    popupFat.textContent = fat.toFixed(2);
    popupCarbohydrates.textContent = carbohydrates.toFixed(2);
    popupEnergy.textContent = ((protein + carbohydrates) * 4 + fat * 9).toFixed(2);
    popupRatio.textContent = fat === 0 ?
        '-- : 1' :
        (protein + carbohydrates) === 0 ?
            'sam tłuszcz' :
            `${(fat / (protein + carbohydrates)).toFixed(1)} : 1`;

    recipePopup.classList.remove('hidden');
}

const showIngredientsListPopup = event => {
    popupIngredientsListSearch.value = '';
    const li = event.target.closest('.ingredients-list__item');
    const index = Array.from(ingredientsList.childNodes).indexOf(li);
    renderIngredientsList(getIngredients());
    popupIngredientsList.dataset.currentRecipeIngredientIndex = index;
    popupIngredientsList.classList.remove('hidden');
    popupIngredientsListSearch.focus();
}

const closePopup = event => {
    event.target.closest('.popup').classList.add('hidden');
}

const addIngredient = () => {
    currentRecipe.ingredients.push({
        weight: 0,
        ingredient: getIngredients()[0]
    })
    renderIngredient();
}

const renderIngredient = (ingredient) => {
    const li = document.createElement('li');
    li.classList.add('ingredients-list__item');

    const btnDecrement = document.createElement('button');
    btnDecrement.innerHTML = '<img src="./images/minus.svg" alt="" />';
    btnDecrement.addEventListener('click', decrementWeight);
    li.appendChild(btnDecrement);

    const inputWeight = document.createElement('input');
    inputWeight.type = "number";
    inputWeight.min = 0;
    inputWeight.classList.add('ingredients-list__ingredient-weight', 'input');
    inputWeight.addEventListener('input', inputWeightValueChanged);
    li.appendChild(inputWeight);

    const btnIncrement = document.createElement('button');
    btnIncrement.innerHTML = '<img src="./images/plus.svg" alt="" />';
    btnIncrement.addEventListener('click', incrementWeight);
    li.appendChild(btnIncrement);

    // const selectIngredients = document.createElement('select');
    // selectIngredients.classList.add('ingredients-list__ingredient', 'input', 'input--select');
    // fillIngredientsSelect(selectIngredients);
    // li.appendChild(selectIngredients);
    // const slimSelect = applySelectFilter(selectIngredients);
    const firstIngredient = getIngredients()[0];
    const ingredientName = document.createElement('span');
    ingredientName.classList.add('ingredients-list__ingredient');
    ingredientName.textContent = firstIngredient.Name;
    ingredientName.dataset.ingredientId = firstIngredient.Id;
    ingredientName.addEventListener('click', showIngredientsListPopup);
    li.appendChild(ingredientName);

    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<img src="./images/trash.svg" alt="" />';
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
        //slimSelect.set(ingredient.ingredient.Id);
        ingredientName.textContent = ingredient.ingredient.Name;
        ingredientName.dataset.ingredientId = ingredient.ingredient.Id;
        updateIngredientMacro(li);
    }

    ingredientsList.appendChild(li);

    recipeIngredientsError.textContent = '';
}

const searchIngredients = event => {
    const searchText = event.target.value;
    const filteredIngreadients = getIngredients().filter(ingredient => ingredient.Name.toUpperCase().includes(searchText.trim().toUpperCase()));
    renderIngredientsList(filteredIngreadients);
}

const renderIngredientsList = ingredients => {
    popupIngredientsListList.innerHTML = '';
    ingredients.forEach(ingredient => renderIngredientListItem(ingredient));
}

const renderIngredientListItem = ingredient => {
    const item = document.createElement('li');
    item.dataset.ingredientId = ingredient.Id;
    item.classList.add('popup__list-item');
    item.addEventListener('click', selectIngredient);

    const ingredientName = document.createElement('h3');
    ingredientName.textContent = ingredient.Name;
    ingredientName.classList.add('popup__list-item-header')
    item.appendChild(ingredientName);

    const macroWrapper = document.createElement('div');
    macroWrapper.classList.add('popup__list-item-macro-wrapper');
    item.appendChild(macroWrapper);

    const protein = document.createElement('div');
    protein.textContent = `B: ${ingredient.Protein} g`;
    macroWrapper.appendChild(protein);

    const fat = document.createElement('div');
    fat.textContent = `T: ${ingredient.Fat} g`;
    macroWrapper.appendChild(fat);

    const carbohydrates = document.createElement('div');
    carbohydrates.textContent = `W: ${ingredient.Carbohydrates} g`;
    macroWrapper.appendChild(carbohydrates);

    popupIngredientsListList.appendChild(item);
}

const selectIngredient = event => {
    const ingredientId = event.target.closest('.popup__list-item').dataset.ingredientId;
    const ingredientName = getIngredients().find(ingredient => ingredient.Id == ingredientId).Name;
    const recipeIngredientIndex = popupIngredientsList.dataset.currentRecipeIngredientIndex;
    const recipeIngredientListItem = ingredientsList.children[recipeIngredientIndex];
    const recipeIngredientListItemName = recipeIngredientListItem.querySelector('.ingredients-list__ingredient');
    recipeIngredientListItemName.textContent = ingredientName;
    recipeIngredientListItemName.dataset.ingredientId = ingredientId;

    updateIngredientMacro(recipeIngredientListItem);
    closePopup(event);
}

const inputWeightValueChanged = event => {
    updateIngredientMacro(event.target.closest('.ingredients-list__item'));
}

const applySelectFilter = select => {
    return new SlimSelect({
        select: select,
        onChange: () => {
            updateIngredientMacro(select.closest('.ingredients-list__item'));
        }

    })
}

const deleteIngredient = event => {
    const li = event.target.closest('li');

    const ingredientIndex = Array.from(ingredientsList.children).indexOf(li);
    currentRecipe.ingredients.splice(ingredientIndex, 1);

    ingredientsList.removeChild(li);

    updateRecipeMacro();
    if (!+currentRecipe.energy) {
        recipeIngredientsError.textContent = 'Dodaj przynajmniej 1 składnik';
    }
}

const updateIngredientMacro = li => {
    const weightInput = li.querySelector('.ingredients-list__ingredient-weight');
    const ingredientSelect = li.querySelector('.ingredients-list__ingredient');
    const proteinInput = li.querySelector('.ingredients-list__macro--protein');
    const fatInput = li.querySelector('.ingredients-list__macro--fat');
    const carbohydratesInput = li.querySelector('.ingredients-list__macro--carbohydrates');
    //const energyInput = li.querySelector('.ingredients-list__macro--energy');
    const ingredient = getIngredients().find(i => i.Id == ingredientSelect.dataset.ingredientId);

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
    persistRecipeMacro(currentRecipe);
    const recipeRatio = document.querySelector('.js--summary__macro--ratio');
    const recipeEnergy = document.querySelector('.js--summary__macro--energy');
    const recipeProtein = document.querySelector('.js--summary__macro--protein');
    const recipeFat = document.querySelector('.js--summary__macro--fat');
    const recipeCarbohydrates = document.querySelector('.js--summary__macro--carbohydrates');

    recipeRatio.textContent = currentRecipe.ratio;
    recipeEnergy.textContent = currentRecipe.energy;
    recipeProtein.textContent = currentRecipe.protein;
    recipeFat.textContent = currentRecipe.fat;
    recipeCarbohydrates.textContent = currentRecipe.carbohydrates;
}

const changeRecipeName = event => {
    currentRecipe.name = event.target.value;
    recipeNameError.textContent = !currentRecipe.name ? 'Nazwa dania jest wymagana.' : '';
}

const changeRecipeNote = event => {
    currentRecipe.note = event.target.value;
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

    if (!+currentRecipe.energy) {
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

const showInstallButton = () => {
    btnInstall.classList.remove('hidden');
}

const hideInstallButton = () => {
    btnInstall.classList.add('hidden');
}

const installPwaApp = () => {
    hideInstallButton();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
    });
}

const setFixedToRecipeSummary = () => {
    if (window.pageYOffset > (headerElement.offsetHeight + headerElement.offsetTop)) {
        summaryElement.classList.add('summary--fixed');
    } else {
        summaryElement.classList.remove('summary--fixed');
    }
}

document.addEventListener('DOMContentLoaded', main);