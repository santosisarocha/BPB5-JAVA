 import{catalogoProdutos} from "./dados.js";
 import { findProduto, carregaProduto } from "./funcoes.js";
let id = localStorage.getItem('prodId')

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

    const botaoComprar = document.querySelector('#seuIdDoBotaoComprar'); // Replace with the actual ID
    const sacolaCompras = JSON.parse(localStorage.getItem('sacolasCompras')) || [];

    botaoComprar.addEventListener('click', () => {
        let quantidade = parseInt(document.querySelector("div.product_info input").value);
        let newProduto = {...produto,quantidade};
        alert("item adicionado no carrinho");
        sacolaCompras.push(newProduto);
        localStorage.setItem('sacolasCompras', JSON.stringify(sacolaCompras));
        console.log(sacolaCompras);})}) 