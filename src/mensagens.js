// Mensagens para gerar QR codes
const MENSAGENS = [
    {
        id: 1,
        name: "brinde_paulo_bebidas",
        titulo: "[Paulo Bebidas] - Premiado",
        mensagem: "Parabéns você ganhou um brinde!\n\nVá ao Paulo Bebidas para retirar.",
        route: "/premiado",
    },
    {
        id: 2,
        name: "tente_novamente",
        titulo: "[Paulo Bebidas] - Não Premiado",
        mensagem: "Infelizmente não foi dessa vez, continue tentando.",
        route: "/nao-premiado",
    }
];

module.exports = MENSAGENS;