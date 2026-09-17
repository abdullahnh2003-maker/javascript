console.log("========================")
console.log("======= MATERI 4 =======")
console.log("========================")
console.log(document);
console.log(document.title);
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);
const kicauCat = document.getElementById('kicau-cat')
// console.log(kicauCat)
const kicauImgSource = kicauCat.src;
console.log(kicauImgSource);
// kicauCat.remove()
kicauCat.style.border = '5px solid red';

const headerTitle = document.querySelector("h1");
headerTitle.textContent = "SINAU JS DOM";
console.log(headerTitle);

const domParagraf = document.querySelectorAll("p");
domParagraf[0].style.color = 'blue';
domParagraf[1].style.color = 'green';

// target berdasarkan ID
const btnChangeColor = document.getElementById('btn-change')
console.log(btnChangeColor)
// berikan button berdasarkan id
btnChangeColor.addEventListener("click", function () {
    // munculkan alert dialog
    alert("Button dimiliki");
    kicauCat.style.border = '5px solid indigo';
});