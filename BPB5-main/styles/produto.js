 import{catalogoProdutos} from "./dados.js";
 import { findProduto, carregaProduto } from "./funcoes.js";
let id = localStorage.getItem('prodId')
console.log(id);

let sacolaCompras = JSON.parse(localStorage.getItem("sacolasCompras"))
if(sacolaCompras == null){
    sacolaCompras = []
}

let produto1 = findProduto(catalogoProdutos,id)
let selecaoProduto1 = document.querySelector("#pagProducts")

carregaProduto(produto1,selecaoProduto1)

let botaoComprar = document.querySelector(".add")
console.log(botaoComprar)

document.addEventListener('DOMContentLoaded', function() {

    const botaoComprar = document.querySelector('#add'); // Replace with the actual ID
    const sacolaCompras = JSON.parse(localStorage.getItem('sacolasCompras')) || [];
    console.log(botaoComprar)

    botaoComprar.addEventListener('click', () => {
        let quantidade = parseInt(document.querySelector("div.product_info input").value);
        let newProduto = {...produto,quantidade};
        alert("item adicionado no carrinho");
        sacolaCompras.push(newProduto);
        localStorage.setItem('sacolasCompras', JSON.stringify(sacolaCompras));
        console.log(sacolaCompras);})}) 