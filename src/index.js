const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Carrega as mensagens do arquivo JavaScript
const MENSAGENS = require('./mensagens');

// Cria diretório para salvar os QR codes se não existir
const outputDir = path.join(__dirname, '..', 'qrcodes');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Função para gerar QR code para uma mensagem
async function gerarQRCode(mensagem, filename) {
    try {
        const qrCodePath = path.join(outputDir, `${filename}.png`);
        
        await QRCode.toFile(qrCodePath, mensagem, {
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            width: 300,
            margin: 2,
            // Configurações para melhor compatibilidade
            errorCorrectionLevel: 'M',  // Nível médio de correção de erro
            type: 'png',                // Formato explícito
            quality: 0.92,              // Alta qualidade
            mode: 'byte'                // Modo byte para melhor suporte a caracteres
        });
        
        console.log(`✅ QR Code criado: ${filename}.png`);
        console.log(`📱 Mensagem: "${mensagem}"`);
        console.log('---');
        
        return qrCodePath;
    } catch (error) {
        console.error(`❌ Erro ao gerar QR code:`, error);
    }
}

// Função principal para gerar todos os QR codes
async function gerarQRCodes() {
    console.log('🚀 Gerando QR codes...\n');
    
    for (const item of MENSAGENS) {
        // Combina título e mensagem para aparecer no QR code
        const textoCompleto = `${item.titulo}\n\n${item.mensagem}`;
        const filename = `qrcode_${item.id}_${item.name}`;
        await gerarQRCode(textoCompleto, filename);
    }
    
    console.log(`\n🎉 Concluído! ${MENSAGENS.length} QR codes gerados na pasta 'qrcodes/'`);
}

// Executa quando o arquivo é chamado diretamente
if (require.main === module) {
    gerarQRCodes();
}

module.exports = {
    gerarQRCode,
    gerarQRCodes,
    MENSAGENS
};