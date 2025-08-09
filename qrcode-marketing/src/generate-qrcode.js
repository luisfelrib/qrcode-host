const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Função para gerar QR Code a partir de uma mensagem ou URL
const generateQRCode = async (input, outputPath) => {
    try {
        await QRCode.toFile(outputPath, input);
        console.log(`QR Code gerado e salvo em: ${outputPath}`);
    } catch (err) {
        console.error('Erro ao gerar QR Code:', err);
    }
};

// Lê as mensagens do arquivo JSON
const messagesPath = path.join(__dirname, 'messages', 'mensagens.json');
const outputDir = path.join(__dirname, '..', 'public', 'mensagens');

// Cria o diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Lê o arquivo de mensagens
fs.readFile(messagesPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo de mensagens:', err);
        return;
    }

    const messages = JSON.parse(data);
    
    // Gera QR Codes para cada mensagem
    Object.keys(messages).forEach(async (key) => {
        const message = messages[key];
        const outputPath = path.join(outputDir, `${key}.png`);
        await generateQRCode(message, outputPath);
    });
});