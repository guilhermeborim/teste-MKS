## Desafio de Front-End
Desafio proposto peela empresa MKS Desenvolvimento de Sistemas.

## Links do projeto
- [Repositorio do desafio](https://github.com/MKS-desenvolvimento-de-sistemas/mks-frontend-challenge)
- [Projeto no Vercel](https://teste-mks-tawny.vercel.app/products)

## Tecnologias utilizadas
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

## Passo-a-passo para
<details>
  <summary>Rodar o projeto localmente</summary><br>
  
  1. Clone o repositório `git clone https://github.com/guilhermeborim/teste-MKS.git`<br>
  2. Entre na pasta do repositório que você acabou de clonar `cd teste-MKS`<br>
  3. Instale as dependências `npm install`<br>
  4. Inicialize o projeto `npm run dev`<br>
  5. Abra o navegador<br>
  6. Acesse a URL [http://localhost:3000/products](http://localhost:3000/products)<br>

</details>

<details>
  <summary>Rodar os testes</summary><br>
  
  1. Abra o terminal<br>
  2. Dentro do diretório do projeto de o seguinte comando `npm run test`<br>

  OBS: não é necessário estar rodando o projeto localmente para rodar os testes.
</details>

## Estrutura do projeto
<details>
  <summary>Arquivos</summary><br>

```
.
├── public
│   ├── favicon.ico
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── src
│   ├── __tests__
│   │   ├── data
│   │   │   └── products.ts
│   │   ├── helpers
│   │   │   └── renderWithProvider.tsx
│   │   ├── 00-index.test.tsx
│   │   ├── 01-header.test.tsx
│   │   ├── 02-footer.test.tsx
│   │   ├── 03-producrCart.test.tsx
│   │   ├── 04-emptyCart.test.tsx
│   ├── @types
│   │   ├── interfaces
│   │   │   └── index.ts
│   │   └── styled.d.ts
│   ├── assets
│   │   ├── cart-icon.svg
│   │   ├── iphone-x.png
│   │   ├── logo.svg
│   │   └── shopping-bag.svg
│   ├── components
│   │   ├── CartCard
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── CartModal
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Footer
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── ProductCard
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── hooks
│   │   └── index.ts
│   ├── pages
│   │   ├── api
│   │   │   └── fetchProducts.ts
│   │   ├── products
│   │   │   └── index.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   ├── redux
│   │   ├── reducers
│   │   │   └── cart.ts
│   │   └── store
│   │       └── index.ts
│   ├── styles
│   │   ├── global.ts
│   │   ├── styles.ts
│   │   └── themes
│   │       └── default.ts
│   └── utils
│       └── index.ts
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

</details>
