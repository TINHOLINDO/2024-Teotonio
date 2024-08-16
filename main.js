const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "O que é o sistema 5x1 no voleibol?",
        alternativas: [
            {
                texto: "Um sistema de formação com cinco atacantes e um levantador",
                afirmacao: "No sistema 5x1, há um levantador e cinco atacantes, onde o levantador joga o tempo todo na posição de trás."
            },
            {
                texto: "Um sistema de cinco levantadores e um atacante",
                afirmacao: "O sistema 5x1 não envolve cinco levantadores, mas sim um levantador e cinco atacantes."
            }
        ]
    },
    {
        enunciado: "Qual é a principal vantagem do sistema 5x1?",
        alternativas: [
            {
                texto: "Maior consistência na posição do levantador",
                afirmacao: "A principal vantagem do sistema 5x1 é que o levantador permanece em uma única posição de ataque, oferecendo maior consistência na distribuição de bolas."
            },
            {
                texto: "Maior flexibilidade no ataque",
                afirmacao: "Embora o sistema 5x1 ofereça estabilidade na posição do levantador, a flexibilidade no ataque não é sua principal vantagem."
            }
        ]
    },
    {
        enunciado: "Como o sistema 5x1 afeta a rotação dos jogadores?",
        alternativas: [
            {
                texto: "Os jogadores atacantes rodam em torno do levantador",
                afirmacao: "No sistema 5x1, os jogadores atacantes rodam em torno do levantador, que permanece na mesma posição durante a rotação."
            },
            {
                texto: "O levantador troca de posição com um atacante a cada ponto",
                afirmacao: "No sistema 5x1, o levantador não troca de posição com um atacante a cada ponto, mas permanece fixo na mesma posição."
            }
        ]
    },
    {
        enunciado: "Qual é uma característica comum de um time que utiliza o sistema 5x1?",
        alternativas: [
            {
                texto: "Possuir um levantador forte e consistente",
                afirmacao: "Times que utilizam o sistema 5x1 geralmente têm um levantador forte e consistente, já que ele desempenha um papel crucial na formação e execução dos ataques."
            },
            {
                texto: "Rotação constante dos levantadores",
                afirmacao: "O sistema 5x1 não envolve rotação constante dos levantadores, pois o levantador permanece na mesma posição durante a rotação."
            }
        ]
    },
    {
        enunciado: "Quais são as posições típicas do levantador no sistema 5x1?",
        alternativas: [
            {
                texto: "Posições 1, 6 e 5",
                afirmacao: "No sistema 5x1, o levantador geralmente joga nas posições 1, 6 e 5, dependendo da rotação e do lado do jogo."
            },
            {
                texto: "Posições 2, 4 e 3",
                afirmacao: "O levantador não ocupa tipicamente as posições 2, 4 e 3 no sistema 5x1; ele permanece nas posições de trás, como 1, 6 e 5."
            }
        ]
    },
    {
        enunciado: "O que acontece quando o levantador está na linha de frente no sistema 5x1?",
        alternativas: [
            {
                texto: "Outro jogador assume o papel de levantador na linha de frente",
                afirmacao: "Quando o levantador está na linha de frente, outro jogador assume o papel de levantador na linha de trás, permitindo uma distribuição equilibrada dos ataques."
            },
            {
                texto: "O time deve mudar o sistema para 6x2",
                afirmacao: "Não é necessário mudar para o sistema 6x2; o levantador no sistema 5x1 pode ser substituído por outro jogador de posição de trás quando está na linha de frente."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim do quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();
