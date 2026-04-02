// Seleciona elementos do DOM
const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido = document.getElementById('lista-pedido');
const totalElemento = document.getElementById('total');
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

// Estado do carrinho
let total = 0;

// Função para converter texto em número.
function converterPreco(precoTexto) {
    return parseFloat(
        precoTexto
            .replace("R$", "")
            .replace(",", ".")
            .trim()
    );
}

// Atualiza o total na tela
function atualizarTotal() {
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona item ao pedido
function adicionarItem(nome, preco) {
    const itemPedido = document.createElement('li');
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    listaPedido.appendChild(itemPedido);

    total += preco;
    atualizarTotal();
}

// Evento de clique nos serviços
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        const servico = botao.closest('.servico');

        const nome = servico.querySelector("h2").textContent;
        const precoTexto = servico.querySelector(".preco").textContent;

        const preco = converterPreco(precoTexto);

        adicionarItem(nome, preco);
    });
});

// Finaliza o pedido
botaoFinalizarPedido.addEventListener("click", () => {
    if (total === 0) {
        alert("Nenhum serviço foi adicionado.");
        return;
    }

    alert(`Pedido finalizado!\n${totalElemento.textContent}`);

    // Formatação
    listaPedido.innerHTML = "";
    total = 0;
    atualizarTotal();
});