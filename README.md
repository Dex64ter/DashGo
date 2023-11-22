## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# App Dashgo

## Configurando projeto

Nesse projeto, o principal objetivo é aprender e praticar interfaces declarativas uma alternativa de estilização para as aplicações. Interface declarativa ou UI declarativa nada mais é do que a aplicação de um paradigma de programação (programação declarativa) que tem seu foco em descrever o resultado desejado e como ele deve se parecer, ao invés de listar todos os passos de execução até se obter este resultado.

Isso significa que ele não representa o fluxo de controle, mas apenas o resultado desejado. Hoje em dia é crescente a aplicação desse conceito na construção de aplicativos mobile e web, sendo cada vez mais notório a utilização de frameworks como Flutter e SwiftUI.

Criando nosso projeto com o comando: ``` yarn create-next-app dashgo ```

Vamos a organização das pastas do projeto. Dentro de _/src_ colocaremos as pastas _/pages_ e _/components_ assim como a _/styles_ mais a frente.

Dentro de pages, teremos os arquivos **_app.tsx** o arquivo principal do projeto, com a importação do AppProps do "next/app". E também teremos o arquivo **index.tsx** sendo a página "Home" da nossa aplicação.

### Configurando Chackra UI

O Chackra UI é uma biblioteca de componentes modular e acessível que fornece os blocos de construção necessários para criar suas aplicações React.

Vamos adicionar o Chackra UI com o seguinte comando:

```yarn add @chakra-ui/react @chakra-ui/icons @emotion/react@^11 @emotion/styled@^11 framer-motion@^4```

Após isso temos toda a configuração das estilizações desejadas que a própria biblioteca nos deixa a disposição para utilizarmos.

Para isso, criamos a nossa pasta _/styles_ com os arquivos **config.ts** e o **theme.ts**. No theme.ts temos a nossa configuração própria dos estilos utilizando a biblioteca ```@chackra-ui/react``` com a ferramenta extendTheme que nos permite configurar, conforme a documentação da biblioteca, as estilizações específicas da aplicação.

E para podermos acessar essa nova configuração, dentro do arquivo **_app.tsx** importamos o ChackraProvider, que é basicamente um componente de contexto que passará a estilização para toda a aplicação, colocando-o em volta das estruturas do retorno.

```typescript
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'; 
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // resetCSS já vem true por padrão
    <ChakraProvider theme={ theme }>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
```

### Configurando Font

Para configurar a fonte do projeto, como nós já sabemos, importamos os links do google fonts e criamos o arquivo **_document.tsx** onde dentro dele colocamos todas as estruturas padrões de um documento para a web mas com componentes do next.

Dentro da estrutura Head, colocamos os links para as fontes escolhidas para a aplicação.

```typescript
// _document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```