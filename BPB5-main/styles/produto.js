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
newProduto = selecaoProduto1

document.addEventListener('DOMContentLoaded', function() {

    const botaoComprar = document.querySelector('.add'); // Substitua pelo ID real
    const sacolaCompras = JSON.parse(localStorage.getItem('sacolasCompras')) || [];

    botaoComprar.addEventListener('click', function() {
        alert("Item adicionado com sucesso");       

        sacolaCompras.push(newProduto);
        localStorage.setItem('sacolasCompras', JSON.stringify(sacolaCompras));
        console.log(sacolaCompras);
    });
});


    