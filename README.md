## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
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

### Página: Sign in

  Vamos implementar a primeira página da aplicação. A página de Sign in, o que é basicamente um formulário para que o usuário insira seus dados e consiga acessar a aplicação. A diferença dessa implementação é que todo o processo da página será feito com a ajuda do ChakraUI.

  Dentro do código da página estamos utilizando estruturas do próprio Chakra como o Flex, Input, FormLabel, etc. Cada um deles já possui uma estilização própria por padrão e em cada um deles podemos adicionar estilizações específicas que desejarmos:

  ```typescript
  import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import Head from "next/head";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Home | dashgo</title>
      </Head>

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" // 2rem divide por 4 ou 32px multiplica por 4
        borderRadius={8}
        flexDir="column"
      >
        <Input
          id="email"
          name="input"
          type="email"
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: "gray.900"
          }}
          size={"lg"}
        />

        <Input          
          id="password"
          name="password"
          type="password"
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled" 
          _hover={{
            bgColor: "gray.900"
          }}
          size={"lg"}
        />

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
```
  A estrutura Flex, especificamente, é como uma div html com a propriedade flex, tanto que no inspecionar da página, essa configuração estará descrito nela. Dentro dessa _tag_ do Chakra conseguimos modificar o tamanho e a posição dos elementos presentes dentro dela além de modificar a estrutura como um bloco do tipo flex.

  O diferencial do \<Flex>\</Flex> é que ele pode se comportar como outras estruturas html utilizando a propriedade **"as"** que no nosso caso acima, usamos para tratá-lo como um _form_ do html.

  No fim temos a nossa primeira tela sem escrever uma linha se quer de arquivo css.

![Imagem de como ficará a página Sign in](/public/pageSignIn.png)

  As demais propriedades de cada estrutura do Chakra podem ser vistas e estudadas na documentação do [Chakra](https://chakra-ui.com/docs/components).

### Component: Input

  Na nossa organização de pastas dos componentes, percebemos uma diferença das outras aplicações feitas. Dessa vez, criamos uma pasta com todos os componentes que estarão presentes em determinada estrutura apenas para direcionamento, mas não criaremos pastas separadas para cada componente criado como era antes
  
  Razão disso se deve ao fato de não precisarmos, nessa aplicação, de um arquivo de estilização separado, agora toda ela é injetada diretamente no html.

  ![Organização das pastas em Components](/public/ComponentsOrg.png)

Fizemos o component __Input__ do formulário pois essa estrutura será utilizada em vários outros lugares da aplicação, sabendo disso, ele foi criado com a extensão de todas as proprieades de um "Input" padrão e com a obrigatoriedade dos dados _name_ e _type_ e opcionalmente o nome da "Label".

```typescript
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !! label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput          
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled" 
        _hover={{
          bgColor: "gray.900"
        }}
        size={"lg"}
        {...rest}
      />
    </FormControl>
  )
}
```

  Foi feito apenas uma alteração do nome das estruturas do Chakra por problemas de conflito com o nome do componente, dessa forma não há problemas.

  E sua utilização nas páginas:

```typescript
  // pages/index.tsx
  // SignIn()
  <Stack spacing={4}>
    <Input name="email" label="E-mail" type="email"/>
    <Input name="password" label="Senha" type="password"/>
  </Stack>
```