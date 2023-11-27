export function carregaCard(listaProduto, gridProduto){
    listaProduto.forEach(produto => {
        const html = `
        <div class="product_card" id="${produto.codigoProduto}">
        <a href="produto1.html" onclick="returnId(${produto.codigoProduto})">
        <div class="product_grid" id="${produto.codigoProduto}">
        <div class="product_item">
        <img src="${produto.imagemProduto}" class="product_image">
        <h3 class="textproducts1_pag_products">${produto.produto}</h3>
        <h3 class="textproducts2_pag_products">${produto.descricao}</h3>
        <p class="emoji-text">${produto.emoji}</p>
        </a>
        </div> `
        gridProduto.innerHTML += html;
    })
}

// export function pegarCodProduto(){
//     let itens = document.querySelectorAll("div.product_card")
//     itens.forEach(item => item.addEventListener('click',(evento)=>{
//         let prodID = evento.target.id
//         localStorage.setItem('prodId', prodID)
//     }))
// }

export function findProduto(listaProduto, id){
    let produto = listaProduto.find(produto => produto.codigoProduto == id)
    return produto
}

export function carregaProduto(produto,selecaoProduto){
    let html = `
    <div class="produtosProduto">
    <div class="pagProducts_text1">
    <h2>${produto.descricao}</h2>
    </div>
    <div class="pagProducts_img">
    <img class="pagproducts1" src="${produto.imagemProduto}">
    <div class="pagtextproducts">
    <h3>${produto.produto}</h3>
    <h3>${produto.descricao}</h3>
    <p class="pagemoji-text">${produto.emoji}</p>
    </div>
    </div>
    <div class="pagProducts_preco">
    <h3>RS ${produto.preco}</h3>
    <input type="number" name="" id="inputQuantidade" value="1">
    <button class="add">ADD</button>    
    </div>
    <div class="pagProducts_descricao">
    <h4>Infused with marine-inspired ingredients that nourish 
    and replenish your skin’s moisture, it’s the perfect skin
    treat after bath or as a skin-refresher. Our lightweight
    airy formula glides onto skin without skimping on hydration. 
    The tranquil scent of Ocean Glow will leave you feeling 
    refreshed and renewed.</h4>
    </div>
    <div class="pagProducts_review">
    <h2>Review snapshot</h2>
    <h1>5.0</h1>
    <h3> ⭐ ⭐ ⭐ ⭐ ⭐</h3>
    </div>
    </div>`
    selecaoProduto.innerHTML = html
}