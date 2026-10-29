console.log('=== SKL 2 - RECIPE FINDER ===');
const recipesDataLocal = []; // koleksi data resep dari api (global variable)
// local storage untuk menyimpan data resep favorit
// ambil data favorit dari local storage jika ada atau set ke array kosong jika tidak ada
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const $favoriteCount = document.querySelector('#favorite-count');
// pakai $ diawal variable untuk menandai elemen DOM
const $cuisineFilter = document.getElementById('cuisine-filter');
const $difficultyFilter = document.getElementById('difficulty-filter');
const $searchForm = document.getElementById('search-form'); // by id value
// const $searchFormAlt = document.querySelector('#search-form'); // by id (pake #)
const $heroTag = document.querySelector('.eyebrow'); // by class (pke .)
const $heroTitle = document.querySelector('h1'); // by tag
$heroTag.textContent = '🔥 RECIPE FINDER APP';
$heroTitle.textContent = 'Find your favorite recipe all over the world';
$heroTitle.style.color = 'gold';
$heroTag.style.color = '#000';
$heroTag.style.backgroundColor = '#fff';

// event listener untuk menangani apa yang terjadi di elemen DOM
const $searchInput = document.querySelector('#search-input');
const $searchBtn = document.querySelector('#search-form button');

const checkSearchValue = localStorage.getItem('searchValue');
console.log({ checkSearchValue });
// objek untuk filter data resep ke local storage
const filters = { search: '', cuisine: 'asian', difficulty: 'easy' };
// e -> event object atau parameter untuk menangani event
$searchBtn.addEventListener('click', function (e) {
    e.preventDefault(); // mencegah halaman auto refresh atau submit
    const searchValue = $searchInput.value;
    const filteredRecipes = recipesDataLocal.filter(
      recipe => recipe.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    renderRecipes(searchValue === '' ? recipesDataLocal : filteredRecipes); 
});

function renderRecipes(recipesData = []) {
    const loadingState = document.querySelector('#loading-state');
    const recipeGrid = document.querySelector('#recipe-grid');
    const recipeCount = document.querySelector('#recipe-count');
    const totalRecipe = recipesData.length;
    recipeCount.textContent = `${totalRecipe} recipes`;
    // render total favorite recipes ke UI
    $favoriteCount.textContent = favorites.length;
    loadingState.style.display = 'none';
    let recipeCardsHtml = '';
    for (let i = 0; i < totalRecipe; i++) {
      const recipe = recipesData[i]; // recipe object
      const isFavorite = favorites.includes(recipe.id);
        const totalCookTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;
        recipeCardsHtml += `
            <article class="recipe-card">
                <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">

                <div class="recipe-body">
                <span class="recipe-cuisine">${recipe.cuisine}</span>
                <h3 class="recipe-title">${recipe.name}</h3>

                <div class="recipe-meta">
                    <span>⭐ ${recipe.rating}</span>
                    <span>⏱ ${totalCookTime} min</span>
                    <span>${recipe.difficulty}</span>
                </div>

                <div class="recipe-actions">
                    <button class="detail-button" onclick="showRecipeDetail(${recipe.id})">
                    View Detail
                    </button>

                    <button class="like-button" onclick="toggleFavorite(${recipe.id})" title="Favorite">
                      ${isFavorite ? '❤️' : '♡'}
                    </button>
                </div>
                </div>
            </article>
        `;
    }
    // set semua data recipe cards ke grid layout
    recipeGrid.innerHTML = recipeCardsHtml;
}

async function getRecipesApi() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();    
    // destructuring assignment untuk mengambil data dari objek sebagai variable baru
    const { recipes, total, skip, limit } = data;
    return recipes;
}

$difficultyFilter.addEventListener('change', function (e) {
    const selectedDifficulty = e.target.value; // apa yg user pilih
    if (selectedDifficulty === '') {
        renderRecipes(recipesDataLocal); // render seperti awal
    } else {
      // filter data resep berdasarkan difficulty
      const filteredRecipes = recipesDataLocal.filter(recipe => recipe.difficulty === selectedDifficulty);
      console.log({ filteredRecipes });    
      renderRecipes(filteredRecipes);
    }
});

$cuisineFilter.addEventListener('change', function (e) {
    const selectedCuisine = e.target.value; // apa yg user pilih
    const filteredRecipes = recipesDataLocal.filter(recipe => recipe.cuisine === selectedCuisine);
    // inline if statement untuk render data resep berdasarkan cuisine terpilih
    // [logic nya apa] ? [jika benar] : [jika salah]
    renderRecipes(selectedCuisine === '' ? recipesDataLocal : filteredRecipes); 
});

function renderCuisineOptions(recipesData) {
    const cuisineList = recipesData.map(recipe => recipe.cuisine)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .sort();
    // render list cuisine ke dropdown filter cuisine
    let cuisineOptionsHtml = '<option value="">All Cuisine</option>';
    for (let i = 0; i < cuisineList.length; i++) {
        const cuisine = cuisineList[i];
        cuisineOptionsHtml += `<option value="${cuisine}">${cuisine}</option>`;
    }
    $cuisineFilter.innerHTML = cuisineOptionsHtml;    
}

function toggleFavorite(recipeId) {
    const isFavorite = favorites.includes(recipeId);
    if (isFavorite) {
        // hapus dari array favorites jika sdh ada
        favorites = favorites.filter(id => id !== recipeId);
    } else {
        // tambahkan ke array favorites jika tidak ada
        favorites.push(recipeId);
    }
    // render total favorite recipes ke UI
    $favoriteCount.textContent = favorites.length;
    // simpan ke local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

async function main() {
    const recipesData = await getRecipesApi();
    // ... (spread operator) untuk menggabungkan array recipesData ke array recipesDataLocal
    recipesDataLocal.push(...recipesData);
    renderCuisineOptions(recipesData); 
    renderRecipes(recipesData);
}
// load main function ke browser
main()