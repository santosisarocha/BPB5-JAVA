import { catalogoProdutos } from "./dados.js";
import { carregaCard } from "./funcoes.js";


let gridTodosProdutos = document.querySelector("#pagproducts")

carregaCard(catalogoProdutos,gridTodosProdutos)
// pegarCodProduto()