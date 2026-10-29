console.log("==== SKL2 - recipe finder ====");

const recipesDataLocal = [];
// localStorage untk menimpan data resepfavorit
// ambil data favorit dr local storage 
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const $difficultyFilter = document.getElementById("difficulty-filter");
const $cuisineFilter = document.getElementById("cuisine-filter");
const $searchForm = document.getElementById("search-form");


const $heroTag = document.querySelector(".eyebrow");
const $heroTitle = document.querySelector("h1");

$heroTag.textContent = "🔥   Resep Makanan";
$heroTitle.textContent = "Cari Resep Favoritmu";

$heroTitle.style.color = "gold";
$heroTag.style.color = "#000";
$heroTag.style.backgroundColor = "#fff";

const $searchInput = document.querySelector("#search-input");
const $searchBtn = document.querySelector("#search-form button");

const cheakSearchValue = localStorage.getItem("searchValue");

console.log({ cheakSearchValue });

const filters = {
  search: "",
  cuisine: "",
  difficulty: "",
};

$searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchValue = $searchInput.value.trim();

  filters.search = searchValue;

  localStorage.setItem("searchValue", searchValue);

  filterRecipes();
});

function filterRecipes() {
  const filteredRecipes = recipesDataLocal.filter(function (recipe) {
    const matchSearch = recipe.name.toLowerCase().includes(filters.search.toLowerCase());

    const matchCuisine = filters.cuisine === "" || recipe.cuisine === filters.cuisine;

    const matchDifficulty = filters.difficulty === "" || recipe.difficulty === filters.difficulty;

    return matchSearch && matchCuisine && matchDifficulty;
  });

  renderRecipes(filteredRecipes);

  const recipeCount = document.querySelector("#recipe-count");

  if (recipeCount) {
    recipeCount.textContent = `${filteredRecipes.length} recipes`;
  }
}

function renderRecipes(recipesData = []) {
  const loadingState = document.querySelector("#loading-state");


  const recipeGrid = document.querySelector("#recipe-grid");

  loadingState.style.display = "none";

  let recipeCardsHtml = "";

  for (let i = 0; i < recipesData.length; i++) {
    const recipe = recipesData[i];

    const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

    recipeCardsHtml += `
      <article class="recipe-card">
        <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-body">
          <span class="recipe-cuisine">${recipe.cuisine}</span>
          <h3 class="recipe-title">${recipe.name}</h3>
          <div class="recipe-meta">
            <span>⭐️ ${recipe.rating}</span>
            <span>⏱️ ${totalTime} min</span>
            <span>${recipe.difficulty}</span>
          </div>
          <div class="recipe-actions">
            <button class="detail-button" onclick="showRecipeDetail(${recipe.id})">
              View Detail
            </button>
            <button class="like-button" onclick="toggleFavorite(${recipe.id})" title="Favorite">
              ♡
            </button>
          </div>
        </div>
      </article>
    `;
  }

  recipeGrid.innerHTML = recipeCardsHtml;

  const recipeCount = document.querySelector("#recipe-count");

  if (recipeCount) {
    recipeCount.textContent = `${recipesData.length} recipes`;
  }

  const emptyState = document.querySelector("#empty-state");

  if (emptyState) {
    emptyState.style.display = recipesData.length === 0 ? "block" : "none";
  }
}

async function getRecipesApi() {
  const response = await fetch("https://dummyjson.com/recipes");

  const data = await response.json();

  const { recipes, total, skip, limit } = data;

  return recipes;
}

$difficultyFilter.addEventListener("change", function (e) {
  filters.difficulty = e.target.value;

  filterRecipes();
});

function rendercuisineOptions(recipesData) {
  const cuisineList = recipesDataLocal
    .map((recipe) => recipe.cuisine)
    .filter((cuisine, index, arr) => arr.indexOf(cuisine) === index)
    .sort();

  let cuisineOptionsHtml = `<option value="">All Cuisine</option>`;

  for (let i = 0; i < cuisineList.length; i++) {
    const cuisine = cuisineList[i];

    cuisineOptionsHtml += `
      <option value="${cuisine}">${cuisine}</option>
    `;
  }

  $cuisineFilter.innerHTML = cuisineOptionsHtml;
}

$cuisineFilter.addEventListener("change", function (e) {
  filters.cuisine = e.target.value;

  filterRecipes();
});

async function main() {
  const recipesData = await getRecipesApi();

  recipesDataLocal.push(...recipesData);

  console.log({ recipesDataLocal });

  rendercuisineOptions(recipesDataLocal);

  renderRecipes(recipesData);
}

main();
