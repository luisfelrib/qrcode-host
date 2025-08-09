# QRCode Host 📱

Um gerador simples e eficiente de QR codes para mensagens de texto que são exibidas diretamente no celular quando escaneadas, sem necessidade de URLs ou internet.

## 🎯 Objetivo

Criar QR codes que exibem mensagens simples diretamente no celular quando escaneados, como:
- "Parabéns você ganhou um brinde, vá ao Paulo Bebidas para retirar"
- Promoções e ofertas especiais
- Mensagens de eventos
- Instruções rápidas

## 📋 Características

- ✅ QR codes com **texto puro** (sem URLs)
- ✅ Mensagens exibidas **diretamente no celular**
- ✅ Geração em lote a partir de arquivo JSON
- ✅ Criação de QR codes customizados
- ✅ Imagens PNG de alta qualidade (300x300px)
- ✅ Fácil de usar e configurar

## 🚀 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd qrcode-host

# Instale as dependências
npm install
```

## 🎮 Como Usar

### Gerar todos os QR codes das mensagens
```bash
npm start
# ou
node src/index.js
```

### Estrutura das mensagens
Edite o arquivo `src/messages/mensagens.json` para adicionar suas próprias mensagens:

```json
{
  "mensagens": [
    {
      "id": 1,
      "titulo": "Seu Título",
      "mensagem": "Sua mensagem aqui",
      "url": "opcional - não será usado nos QR codes"
    }
  ]
}
```

### Uso programático
```javascript
const { gerarQRCodeCustomizado, gerarTodosQRCodes } = require('./src/index.js');

// Gerar QR code customizado
await gerarQRCodeCustomizado(
    'Parabéns! Você ganhou um brinde.\n\nVá ao Paulo Bebidas para retirar.',
    'meu_qrcode_especial'
);

// Gerar todos os QR codes do JSON
await gerarTodosQRCodes();
```

## 📁 Estrutura do Projeto

```
qrcode-host/
├── package.json              # Configurações do projeto
├── src/
│   ├── index.js              # Código principal
│   └── messages/
│       └── mensagens.json    # Mensagens para gerar QR codes
└── qrcodes/                  # QR codes gerados (PNG)
    ├── qrcode_1_titulo.png
    └── ...
```

## 📱 Como Funciona

1. **Geração**: O sistema cria QR codes contendo apenas texto
2. **Escaneamento**: Usuario escaneia com câmera do celular
3. **Exibição**: A mensagem aparece diretamente na tela do celular
4. **Sem Internet**: Não precisa de conexão ou abrir sites

## 🛠️ Funcionalidades Disponíveis

### `gerarTodosQRCodes()`
Gera QR codes para todas as mensagens do arquivo JSON.

### `gerarQRCodeCustomizado(mensagem, nomeArquivo)`
Cria um QR code específico com mensagem personalizada.

### `gerarQRCode(texto, arquivo)`
Função base para gerar QR codes individuais.

## ⚙️ Configurações

Os QR codes são gerados com as seguintes configurações:
- **Tamanho**: 300x300 pixels
- **Formato**: PNG
- **Cores**: Preto no branco
- **Margem**: 2 pixels
- **Qualidade**: Alta definição para impressão

## 📝 Exemplos de Uso

### Brinde/Promoção
```
Parabéns você ganhou um brinde!

Vá ao Paulo Bebidas para retirar.
```

### Evento
```
Evento Especial

Participe do nosso evento e ganhe brindes exclusivos!
```

### Instrução
```
Wi-Fi Grátis

Senha: minhasenha123
Conecte-se e aproveite!
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 🔧 Dependências

- [qrcode](https://www.npmjs.com/package/qrcode) - Biblioteca para gerar QR codes

## 📞 Suporte

Se você encontrar problemas ou tiver sugestões, abra uma issue no repositório.

---

**Dica**: Teste sempre os QR codes gerados com diferentes celulares para garantir compatibilidade! 📱✨