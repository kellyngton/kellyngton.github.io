# kellyngton.github.io

Portfólio pessoal estático publicado com GitHub Pages.

## Visão técnica

- **Tipo de projeto:** site estático (sem backend próprio)
- **Entrada principal:** `index.html`
- **Estilos em uso:** `assets/css/style.css`
- **Scripts em uso:** `assets/js/main.js`
- **Hospedagem:** GitHub Pages

## Stack e dependências

- HTML5
- CSS3 (layout responsivo e animações)
- JavaScript (vanilla)
- Google Fonts (`Inter`)
- DotLottie Web Component (CDN)
- Formspree (envio de formulário de contato)

## Estrutura do repositório

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── ...imagens e recursos visuais
├── script.js      # legado (não referenciado em index.html)
└── styles.css     # legado (não referenciado em index.html)
```

## Funcionalidades implementadas

- Navegação por âncoras para seções principais.
- Hero com animações de entrada e avatar DotLottie.
- Timeline de experiência com animação de máquina de escrever.
- Animações de reveal ao scroll via `IntersectionObserver`.
- Formulário de contato com envio AJAX para Formspree.
- Feedback visual de sucesso com terminal animado.
- Limite local de envios por dia via `localStorage`.

## Executar localmente

Como é um site estático, basta servir os arquivos localmente:

```bash
cd /home/runner/work/kellyngton.github.io/kellyngton.github.io
python3 -m http.server 8080
```

Acesse: `http://localhost:8080`.

## Manutenção

- Alterações de layout/tema: `assets/css/style.css`
- Alterações de comportamento/interações: `assets/js/main.js`
- Alterações de conteúdo: `index.html`
- Se trocar o endpoint de contato, atualize o atributo `action` do formulário em `index.html`.
