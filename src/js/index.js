const setaAvancar = document.getElementById('seta-avancar');    // Variavel que encontra a clase "seta-avancar" no HTML
const setaVoltar = document.getElementById('seta-voltar');
const cartoes = document.querySelectorAll('.cartao');  // Variavel que sinalizada no HTML todos os elementros com a class "cartoes" 
let cartaoAtual = 0; // Variavel inicio da minha lista de cartoes 

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

setaAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

    esconderCartaoSelecionado();
})

setaVoltar.addEventListener('click', function () {

    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

})

