// Criando a classe
class Jokenpo {
    constructor (){
        this.placar = {
            vitoria: 0,
            derrota: 0,
            empate: 0
        };
        this.opcoesJogo = ['pedra', 'papel', 'tesoura'];

        // atributos/variaveis para manipulação do DOM
        this.btnPedra = document.getElementById('pedra');
        this.btnPapel = document.getElementById('papel');
        this.btnTesoura = document.getElementById('tesoura');
        this.btnReiniciarPlacar = document.getElementById('reiniciarPlacar');
        this.resultado = document.getElementById('result');
        this.vitoria = document.getElementById('vitoria');
        this.derrota = document.getElementById('derrota');
        this.empate = document.getElementById('empate');
        
        // Método static para inicializar jogo
        this.inicializarEventos();
        this.reiniciarPlacar();

        // Evento para retornar dados do storage
        document.addEventListener('DOMContentLoaded', () => this.restaurarDados())
    }    
    // métodos
    inicializarEventos(){ // Com listeners
        this.btnPedra.addEventListener('click', () => this.jogar('pedra'));
        this.btnPapel.addEventListener('click', () => this.jogar('papel'));
        this.btnTesoura.addEventListener('click', () => this.jogar('tesoura'));
    }
    jogar(escolhaDoJogador){
        //Transformando a escolha em uma variável
        const escolhaMaquina = this.sortearEscolha();
        if (escolhaDoJogador === escolhaMaquina) {
            this.resultado.innerText = `Empate, ambos escolheram ${escolhaMaquina}`
            this.atualizarPlacar('empate')
        }else if ((escolhaDoJogador === 'pedra' && escolhaMaquina === 'tesoura') || (escolhaDoJogador === 'papel' && escolhaMaquina === 'pedra') || (escolhaDoJogador === 'tesoura' && escolhaMaquina === 'papel')){
            this.resultado.innerText = `Ganhou, a máquina escolheu ${escolhaMaquina}`;
            this.atualizarPlacar('vitoria')
        } else {
            this.resultado.innerText = `Perdeu, a máquina escolheu ${escolhaMaquina}`;
            this.atualizarPlacar('derrota')
        }
    }
    sortearEscolha(){
        const maquina = this.opcoesJogo[Math.floor(Math.random() * 3)]; // Faz com que o math random percorra por dentro da index 
        return maquina;
    }
    atualizarPlacar(parametroPlacar){
        if (parametroPlacar === 'empate'){
            this.placar.empate++
            this.empate.innerText = `Empates: ${this.placar.empate}`
            this.localStorage()
        }else if (parametroPlacar === 'vitoria'){
            this.placar.vitoria++
            this.vitoria.innerText = `Vitórias: ${this.placar.vitoria}`
            this.localStorage()
        }else {
            this.placar.derrota++
            this.derrota.innerText = `Derrota: ${this.placar.derrota}`
            this.localStorage()
        }
    }
    reiniciarPlacar(){
        this.btnReiniciarPlacar.addEventListener('click', () => {
            this.placar = {
                vitoria: 0,
                derrota: 0,
                empate: 0
            };
            this.vitoria.innerText = 'Vitórias: 0';
            this.derrota.innerText = 'Derrotas: 0';
            this.empate.innerText = 'Empates: 0';
            this.resultado.innerHTML = 'Escolha seu movimento para começar!'
            localStorage.removeItem('salvarDados')
        })
    }
    localStorage(){
        const placarAtualizado = this.placar
        localStorage.setItem('salvarDados', JSON.stringify(placarAtualizado))
    }
    restaurarDados(){
        const dadoSalvos = localStorage.getItem ('salvarDados')
        if (dadoSalvos) {
            this.placar = JSON.parse(dadoSalvos);
            this.vitoria.innerText = `Vitórias: ${this.placar.vitoria}`;
            this.derrota.innerText = `Derrotas: ${this.placar.derrota}`;
            this.empate.innerText = `Empates: ${this.placar.empate}`;
        }
    }
} 

// Objeto
const jogo = new Jokenpo();

