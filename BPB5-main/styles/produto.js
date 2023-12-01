 import{catalogoProdutos} from "./dados.js";
 import { findProduto, carregaProduto } from "./funcoes.js";
let id = localStorage.getItem('prodId')
console.log(id);

let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))
console.log(sacolaCompras)

if(sacolaCompras == null){
    sacolaCompras = []
}

let produto = findProduto(catalogoProdutos,id)
let selecaoProduto1 = document.querySelector("#pagProducts")

carregaProduto(produto,selecaoProduto1)

let botaoComprar = document.querySelector("button.add")
console.log(botaoComprar)
/*newProduto = selecaoProduto1*/

botaoComprar.addEventListener('click', ()=> {
    let quantidade = parseInt(document.querySelector("#inputQuantidade").value)
    //produto.quantidade = quantidade
    //console.log(quantidade)
    //sacolaCompras.push(produto)
    let newProduto = {...produto,quantidade}
    alert("item adicionado ao carrinho")
    sacolaCompras.push(newProduto)
    localStorage.setItem('sacolaCompras',JSON.stringify(sacolaCompras))
    console.log(sacolaCompras)
})


