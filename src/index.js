const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Carrega as mensagens do arquivo JavaScript
const MENSAGENS = require('./mensagens');

// Base URL para os links dos QR codes (GitHub Pages)
const BASE_URL = process.env.BASE_URL || 'https://luisfelrib.github.io/qrcode-host';

// Diretórios de saída
const outputDir = path.join(__dirname, '..', 'qrcodes');
const htmlDir = path.join(__dirname, '..', 'docs');

// Garante que as pastas existam
for (const dir of [outputDir, htmlDir]) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Função para gerar QR code para uma mensagem (ou URL)
async function gerarQRCode(mensagem, filename) {
    try {
        const qrCodePath = path.join(outputDir, `${filename}.png`);

        await QRCode.toFile(qrCodePath, mensagem, {
            color: {
                dark: '#f00303ff',
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
        console.log(`📱 Conteúdo: "${mensagem}"`);
        console.log('---');

        return qrCodePath;
    } catch (error) {
        console.error(`❌ Erro ao gerar QR code:`, error);
    }
}

// Gera uma página HTML com a mensagem
async function gerarPaginaHTML(item, filename) {
    const htmlPath = path.join(htmlDir, filename);
    await fs.promises.mkdir(path.dirname(htmlPath), { recursive: true });
    const conteudoHTML = `<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>${item.titulo}</title>\n<style>body{font-family:Arial,sans-serif;padding:1rem;}h1{font-size:1.5rem;}p{white-space:pre-line;font-size:1.2rem;}</style>\n</head>\n<body>\n<h1>${item.titulo}</h1>\n<p>${item.mensagem}</p>\n</body>\n</html>`;

    await fs.promises.writeFile(htmlPath, conteudoHTML, 'utf8');
    console.log(`📝 Página gerada: ${filename}`);
    return htmlPath;
}

// Função principal para gerar todas as páginas e QR codes
async function gerarQRCodes() {
    console.log('🚀 Gerando páginas HTML e QR codes...\n');

    for (const item of MENSAGENS) {
        const route = item.route ? item.route.replace(/^\//, '') : `${item.id}_${item.name}`;
        const htmlFilename = path.join(route, 'index.html');
        await gerarPaginaHTML(item, htmlFilename);

        const url = `${BASE_URL}${item.route || `/${route}`}`;
        const qrFilename = `qrcode_${item.id}_${item.name}`;
        await gerarQRCode(url, qrFilename);
        console.log(`🌐 URL: ${url}`);
        console.log('---');
    }

    console.log(`\n🎉 Concluído! ${MENSAGENS.length} páginas em 'docs/' e QR codes em 'qrcodes/'`);
}

// Executa quando o arquivo é chamado diretamente
if (require.main === module) {
    gerarQRCodes();
}

module.exports = {
    gerarQRCode,
    gerarPaginaHTML,
    gerarQRCodes,
    MENSAGENS,
    BASE_URL
};