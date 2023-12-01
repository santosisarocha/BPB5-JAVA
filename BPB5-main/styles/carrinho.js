let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){
    pedidos = []
}
console.log(pedidos)
console.log(sacolaCompras)
let cartList = document.querySelector('ul.carinho')


sacolaCompras.forEach(item => {
    let html = `
    <li class="container" id="${item.codigoProduto}>
                <img class="image_carrinho" src="${item.imagemProduto}">
                <a class="text_carrinho">${item.produto} ${item.descricao}</a>
                <a class="quantidade_carrinho">${item.quantidade}</a>
                <a class="preco_carrinho">${item.preco}</a>
                <div class="lixo_carrinho">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.9961 6H21.9961V5C21.9961 4.20435 21.68 3.44129 21.1174 2.87868C20.5548 2.31607 19.7917 2 18.9961 2H12.9961C12.2004 2 11.4374 2.31607 10.8748 2.87868C10.3122 3.44129 9.99609 4.20435 9.99609 5V6H4.99609C4.73088 6 4.47652 6.10536 4.28899 6.29289C4.10145 6.48043 3.99609 6.73478 3.99609 7C3.99609 7.26522 4.10145 7.51957 4.28899 7.70711C4.47652 7.89464 4.73088 8 4.99609 8H5.99609V26C5.99609 26.5304 6.20681 27.0391 6.58188 27.4142C6.95695 27.7893 7.46566 28 7.99609 28H23.9961C24.5265 28 25.0352 27.7893 25.4103 27.4142C25.7854 27.0391 25.9961 26.5304 25.9961 26V8H26.9961C27.2613 8 27.5157 7.89464 27.7032 7.70711C27.8907 7.51957 27.9961 7.26522 27.9961 7C27.9961 6.73478 27.8907 6.48043 27.7032 6.29289C27.5157 6.10536 27.2613 6 26.9961 6ZM11.9961 5C11.9961 4.73478 12.1015 4.48043 12.289 4.29289C12.4765 4.10536 12.7309 4 12.9961 4H18.9961C19.2613 4 19.5157 4.10536 19.7032 4.29289C19.8907 4.48043 19.9961 4.73478 19.9961 5V6H11.9961V5ZM23.9961 26H7.99609V8H23.9961V26ZM13.9961 13V21C13.9961 21.2652 13.8907 21.5196 13.7032 21.7071C13.5157 21.8946 13.2613 22 12.9961 22C12.7309 22 12.4765 21.8946 12.289 21.7071C12.1015 21.5196 11.9961 21.2652 11.9961 21V13C11.9961 12.7348 12.1015 12.4804 12.289 12.2929C12.4765 12.1054 12.7309 12 12.9961 12C13.2613 12 13.5157 12.1054 13.7032 12.2929C13.8907 12.4804 13.9961 12.7348 13.9961 13ZM19.9961 13V21C19.9961 21.2652 19.8907 21.5196 19.7032 21.7071C19.5157 21.8946 19.2613 22 18.9961 22C18.7309 22 18.4765 21.8946 18.289 21.7071C18.1014 21.5196 17.9961 21.2652 17.9961 21V13C17.9961 12.7348 18.1014 12.4804 18.289 12.2929C18.4765 12.1054 18.7309 12 18.9961 12C19.2613 12 19.5157 12.1054 19.7032 12.2929C19.8907 12.4804 19.9961 12.7348 19.9961 13Z" fill="black"/>
                    </svg>
            </li>`
            
    cartList.innerHTML += html
    });
    console.log(sacolaCompras)
    
    let botaoDel = document.querySelectorAll("div.lixo_carrinho")
    botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
        let item = event.target.parentElement.parentElement
        cartList.removeChild(item)
        console.log(item.id)
        let index = sacolaCompras.findIndex( i => i.codigoProduto == item.id)
        sacolaCompras.splice(index,1)
        console.log(sacolaCompras)
        localStorage.setItem('sacolaCompras',JSON.stringify(sacolaCompras))
    }
    ))
    
    let finalizar = document.querySelectorAll(".finish")
    finalizar.forEach(botao => botao.addEventListener('click', ()=> {
        
        let endereco = {
            nome: document.querySelector("input#nome").value,
            logradouro: document.querySelector("input#logradouro").value,
            bairro: document.querySelector("input#bairro").value,
            cidade: document.querySelector('input#cidade').value,
            estado: document.querySelector('input#estado').value
        }
        
       let codPedido = pedidos.length
        if(pedidos == null || pedidos == 0){
            codPedido = 1
        }
    
        let pedido = {
            itens: sacolaCompras, 
            endereco: endereco, 
            id: codPedido
        }// crio um objeto que guarda uma lista de produtos e o endereco do comprador
        pedidos.push(pedido) // coloco o pedido na lista de pedidos
        localStorage.setItem('pedidos',JSON.stringify(pedidos))     
        console.log(pedido)  
    
    
    }))
    
    