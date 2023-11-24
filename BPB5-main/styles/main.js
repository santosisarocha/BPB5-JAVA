export const catalogoProdutos = [
    {
        codigoProduto: 1,
        produto: "Whipped Body Butters",
        preco: 299.99,
        descricao: "OCEAN GLOW WHIPPED",
        imagemProduto: "./image/products/image-removebg-preview (7).png",
        emoji: "🌊🐚"
    },
    {
        codigoProduto: 2,
        produto: "Whipped Body Butters",
        preco: 299.99,
        descricao: "COCO COLADA WHIPPED",
        imagemProduto: "./image/products/image-removebg-preview (1).png",
        emoji: "🥥💮"
    },
    {
        codigoProduto: 3,
        produto: "Whipped Body Butters",
        preco: 299.99,
        descricao: "MOONLIGHT GLOW WHIPPED",
        imagemProduto: "./image/products/image-removebg-preview (3).png",
        emoji: "🌃🥳🎉"
    },
    {
        codigoProduto: 4,
        produto: "Whipped Body Scrubs",
        preco: 299.99,
        descricao: "APPLE MACCHIATO",
        imagemProduto: "./image/products/image-removebg-preview (8).png",
        emoji: "🍎🍏"
    },
    {
        codigoProduto: 5,
        produto: "Whipped Body Scrubs",
        preco: 299.99,
        descricao: "PINK HIBISCUS SHEA",
        imagemProduto: "./image/products/image-removebg-preview (5).png",
        emoji: "🌺🌷🌺"
    },
    {
        codigoProduto: 6,
        produto: "Whipped Body Scrubs",
        preco: 299.99,
        descricao: "TROPICAL MANGO SHEA SUGAR",
        imagemProduto: "./image/products/image-removebg-preview (6).png",
        emoji: "🥭🍹🥭"
    },
    {
        codigoProduto: 7,
        produto: "Bare Shave",
        preco: 299.99,
        descricao: "CLEANSES AND REVITALIZES HAIR",
        imagemProduto: "./image/products/image-removebg-preview (10).png",
        emoji: "💐💗🌷🌻"
    },
    {
        codigoProduto: 8,
        produto: "Bare Shave",
        preco: 299.99,
        descricao: "BARE COCONUT LIME ",
        imagemProduto: "./image/products/image-removebg-preview (11).png",
        emoji: "🍈🥥🍋"
    },
    {
        codigoProduto: 9,
        produto: "Bare Shave",
        preco: 299.99,
        descricao: "BARE TAHITIAN VANILLA BEAN",
        imagemProduto: "./image/products/image-removebg-preview (12).png",
        emoji: " 💜🌼💜 "
    }
]; 

const product_grid = document.querySelector("#home_product_grid");

for (let i = 0; i < catalogoProdutos.length; i++) {
    const produto = `
        <div class="product_item">
            <img src="${catalogoProdutos[i].imagemProduto}" class="product_image">
            <h3 class="textproducts1_pag_products">${catalogoProdutos[i].produto}</h3>
            <h3 class="textproducts2_pag_products">${catalogoProdutos[i].descricao}</h3>
            <p class="emoji-text"> ${catalogoProdutos[i].emoji}</p>
        </div>`;
    product_grid.innerHTML += produto;
}

export function findProduto(catalogoProdutos, codigoProduto){
    let produto = catalogoProdutos.find(produto => produtocodigoProduto)
    return produto
}


