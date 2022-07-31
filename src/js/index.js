// window.alert('Hellow Word VB');
/* quando clicar na seta de avançar temos que mostrar o proximo
cartão da lista.

objetivos 1: seta avançar
 passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
 passo 2 - dar um jeito de identificar o clique o usuario na seta avançar
 passo 3 - fazer aparecer o proximo cartão da lista
 passo 4 - buscar o cartão selecionado e esconder

 objetivos 2: seta voltar
 passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
 passo 2 - dar um jeito de identificar o clique o usuario na seta voltar
 passo 3 - fazer aparecer o proximo cartão da lista
 passo 4 - buscar o cartão selecionado e esconder
 */

//objetivo 1
//passo 1
//document.getElementById('btn-avancar');//objeto pego do botão avançar
const btnAvancar = document.getElementById('btn-avancar');//variavel criada para armazenar o elemento do botão
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');//pegar todas as classes cartao

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){//indice cartaoatual
    cartoes[indiceCartao].classList.add('selecionado'); 
}

//passo 2
btnAvancar.addEventListener('click',function(){//pego o clique o botão avançar
    
    if (cartaoAtual === cartoes.length-1) cartaoAtual=-1;//se chegar ao fim para de executar a função cartoes.length-1 é o ultimo cartao que seria cartoes[2]
    esconderCartaoSelecionado();
    //passo 3
    cartaoAtual++;
    //fazer aparecer o proximo cartão da lista
    mostrarCartao(cartaoAtual);//passei o cartao atual para a funcção como parametro
    //passo 4 - buscar o cartao selecionado e esconder
    


});//funcionando perfeitamente o avançar

/////////fazer o voltar

btnVoltar.addEventListener('click',function(){//pego o clique o botão avançar
    
    if (cartaoAtual === 0) cartaoAtual=3;
    esconderCartaoSelecionado();
    //passo 3
    cartaoAtual--;
    //fazer aparecer o proximo cartão da lista
    mostrarCartao(cartaoAtual);
    //passo 4 - buscar o cartao selecionado e esconder
   //cartaoSelecionado.classList.remove('selecionado');

});//funcionando perfeitamente o voltar


