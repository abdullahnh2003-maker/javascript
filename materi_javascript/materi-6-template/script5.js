console.log('========================');
console.log(' MATERI 6 - CONSUME API');
console.log('========================');
const API_URL = 'https://dummyjson.com/products';

const productGrid = document.getElementById('product-grid');
const loadingState = document.getElementById('loading-state');
const resultSummary = document.getElementById('result-summary');
const categorySelect = document.getElementById('category-select');


function renderProduct(dataProducts) {
  productGrid.innerHTML = ''; // reset isi product grid
  dataProducts.map(dataProduct => {
    // ubah key dari object dataProduct menjasi variabel -> destructuring assignment
    // untuk memudahkan penggunaan variabel di dalam string template
    const { id, title, price, category, thumbnail, rating } = dataProduct;
    // gunakan += untuk menambahkan string ke dalam productGrid.innerHTML
    // secara iteratif untuk menghindari overwriting atau tertimpah
      productGrid.innerHTML += `
        <article class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${thumbnail}" alt="${title}" loading="lazy">
          </div>
 
          <div class="product-body">
            <span class="product-category">
              ${category}
            </span>
 
            <h3 class="product-title">
              ${title}
            </h3>
 
            <div class="product-meta">
              <span class="product-price">
                $${price}
              </span>
 
              <span class="product-rating">
                ⭐️ ${rating}
              </span>
            </div>
 
            <button type="button" class="detail-btn" data-id="${id}">
              Lihat Detail
            </button>
          </div>
        </article>
      `;
  });
}


// function di variabel di sebut juga arrow function atau anonymous function
const getPrducts = async() => {
    try {
        const response = await fetch(API_URL); // mengambil reponse dari API
        const data = await response.json(); // data dijadikan object javascript
        // console.log(data);
        // destructuring assignment { key 1, key 2, ... }
        // untuk mengambil data berdasarkan key dari object data
        const { limit, products, skip, total } = data;
        renderProduct(products); // memanggil fungsi untuk mereder produk ke halaman
        productGrid.hidden = false; // menghilangkan hidden dari productGrid
        resultSummary.hidden = true; // menyembunyikan result summary text
        loadingState.hidden = true; // menghilangkan hidden dari loadingState
    } catch (error) {
        alert('Something went wrong! Please try again later.');
        console.error('Error on getProducts:', error);
    }
};

const getProductCategoties = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        categorySelect.innerHTML = `<option value="all">Semua kategori</option>}`;
        data.map(category => {
            categorySelect.innerHTML += `<option value="${category.slug}">${category.name}</option>`
        });
    } catch (error) {
        console.log("error on getproductcategories:", error)
    }
    }

    

// panggil fungsi untuk mengambil data dari API
getProductCategoties();
getPrducts();