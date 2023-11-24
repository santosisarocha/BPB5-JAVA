document.addEventListener('DOMContentLoaded', function () {
    let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras")) || [];

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    if (pedidos == null) {
        pedidos = [];
    }

    let cartList = document.querySelector('ul.cart_list');

    sacolaCompras.forEach(produto => {
        let html = `
        <div class="dropdown-content">
            <a href="#">${produto.produto}</a>
            <a href="#">${produto.descricao}</a>
        </div>
        `;
        cartList.innerHTML += html;
    });

    let botaodel = document.querySelectorAll("i.del-bnt");
    botaodel.forEach(botao => botao.addEventListener('click', (event) => {
        let item = event.target.parentElement.parentElement;
        cartList.removeChild(item);
        console.log(item.id);
        let index = sacolaCompras.findIndex(i => i.codigoProduto == item.id);
        sacolaCompras.splice(index, 1);
        console.log(sacolaCompras);
        localStorage.setItem('sacolaCompras', JSON.stringify(sacolaCompras));
    }));

    let finalizar = document.querySelectorAll(".finish");
    finalizar.forEach(botao => botao.addEventListener('click', () => {
        let endereco = {
            nome: document.querySelector("input#nome").value,
            logradouro: document.querySelector("input#logradouro").value,
            bairro: document.querySelector("input#bairro").value,
            cidade: document.querySelector('input#cidade').value,
            estado: document.querySelector('input#estado').value
        }

        let codPedido = pedidos.length;
        if (pedidos == null || pedidos == 0) {
            codPedido = 1;
        }

        let pedido = {
            itens: sacolaCompras,
            endereco: endereco,
            id: codPedido
        }
        pedidos.push(pedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
    }));
});
