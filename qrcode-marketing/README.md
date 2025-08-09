# qrcode-marketing
Este projeto é uma aplicação para geração de QR Codes que direcionam para mensagens de marketing. A estrutura do projeto permite a criação de landing pages que exibem essas mensagens de forma atraente.

## Estrutura do Projeto
```
qrcode-marketing
├── src
│   ├── generate-qrcode.js       # Script Node.js para gerar QR Codes
│   └── messages
│       └── mensagens.json       # Mensagens de marketing em formato JSON
├── public
│   ├── index.html               # Página principal exibida ao escanear o QR Code
│   ├── styles
│   │   └── style.css            # Estilos CSS para as páginas HTML
│   └── mensagens
│       └── exemplo.html         # Exemplo de landing page
├── package.json                  # Configuração do npm e dependências
├── .gitignore                    # Arquivos e pastas a serem ignorados pelo Git
└── README.md                     # Documentação do projeto
```

## Instruções de Configuração

1. **Clone o repositório:**
   ```
   git clone <URL do repositório>
   cd qrcode-marketing
   ```

2. **Instale as dependências:**
   ```
   npm install
   ```

3. **Gere os QR Codes:**
   Execute o script para gerar QR Codes a partir das mensagens armazenadas em `src/messages/mensagens.json`.

4. **Hospedagem no GitHub Pages:**
   Para hospedar a aplicação no GitHub Pages, faça o seguinte:
   - Certifique-se de que os arquivos HTML estão na pasta `public`.
   - Faça o push do seu código para o repositório no GitHub.
   - Vá até as configurações do repositório e ative o GitHub Pages na aba "Pages".

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Este projeto está licenciado sob a MIT License.