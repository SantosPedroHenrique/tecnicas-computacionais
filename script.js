const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ["No início ficou com medo do que essa tecnologia pode fazer. ",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["Quis saber como usar IA no seu dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza a IA para ajudar a pesquisar e escrever o trabalho, citando as fontes de forma adequada.",
                afirmacao: ["Sempre busca usar as ferramentas de forma responsável e ética.",
                    "Entende que a IA é uma ferramenta poderosa que precisa de supervisão humana."
                ]
            },
            {
                texto: "Pede para a IA escrever o trabalho inteiro para você, sem se preocupar em revisar ou aprender o conteúdo.",
                afirmacao: ["Acha mais fácil usar a IA para fazer tudo, sem se preocupar em entender o assunto.",
                    "Percebe que essa atitude pode prejudicar seu aprendizado no longo prazo."
                ]
            }
        ]
    } // Aqui fecha a segunda pergunta
]; // Aqui fecha o array de perguntas