# Stylo Community (React + Vite + Tailwind)

## Estrutura

- `src/layouts/RootLayout.jsx`: layout global (Navbar + Footer + Outlet)
- `src/components/*`: componentes reutilizáveis
- `src/pages/*`: páginas (Início, Sobre, História, Comunidade, Projetos, Contato)
- `src/styles/index.css`: Tailwind + classes CSS que existiam inline no HTML
- `src/config/links.js`: links (Discord/GitHub/X/YouTube) para você trocar

## Como rodar

```bash
npm install
npm run dev
```

## Notas

- O tema usa `darkMode: 'class'` e o `index.html` já vem com `class="dark"`.
- As telas originais (PNG) estão em `public/original/`.
