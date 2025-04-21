// Variaveis
const btnPedra = document.getElementById('pedra');
const btnPapel = document.getElementById('papel');
const btnTesoura = document.getElementById('tesoura');
const btnReiniciarPlacar = document.getElementById('reiniciarPlacar');
const resultado = document.getElementById('result');
const vitoria = document.getElementById('vitoria');
const derrota = document.getElementById('derrota');
const empate = document.getElementById('empate');

// Variavel com o placar em forma de objeto.
let placar = {
    vitoria: 0,
    derrota: 0,
    empate: 0
}

function jogar(jogador) {
    const opcoes = ['pedra', 'papel', 'tesoura']; // Vetor com as 3 opções
    const maquina = opcoes[Math.floor(Math.random() * 3)]; // faz com que o math radom percorra o index do vetor

    if (jogador === maquina) {
        resultado.innerHTML = `Empatou! A máquina escolheu ${maquina}`;
        placar.empate++;
        empate.innerText = 'Empates: ' +  placar.empate;
    } else if ((jogador === 'pedra' && maquina === 'tesoura') || (jogador === 'papel' && maquina === 'pedra') || (jogador === 'tesoura' && maquina === 'papel')){
        resultado.innerHTML = `Ganhou! A máquina escolheu ${maquina}`;
        placar.vitoria++;
        vitoria.innerText = 'Vitórias: ' + placar.vitoria;
    } else {
        resultado.innerHTML = `Perdeu! A máquina escolheu ${maquina}`;
        placar.derrota++;
        derrota.innerText = 'Derrotas: ' + placar.derrota;
    }
}

// Eventos para cada botão
btnPapel.addEventListener('click', () => (jogar('papel')));
btnPedra.addEventListener('click', () => (jogar('pedra')));
btnTesoura.addEventListener('click', () => (jogar('tesoura')));

// Evento para reiniciar o placar

btnReiniciarPlacar.addEventListener('click', () => {
    placar = {
        vitoria: 0,
        derrota: 0,
        empate: 0
    }
    vitoria.innerText = 'Vitórias: ' + 0;
    derrota.innerText = 'Derrotas: ' + 0;
    empate.innerText = 'Empates: ' + 0;

    resultado.innerText = 'Faça um movimento para começar'
})