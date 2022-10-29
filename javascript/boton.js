const divBoton = document.querySelector('.div-boton');
const divProducts = document.querySelector('.products');

divBoton.addEventListener("click",() =>{divProducts.classList.toggle("products_visible")});