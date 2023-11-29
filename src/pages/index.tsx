import { Input } from "../components/Form/input";
import { Flex, Button, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Sign in | dashgo</title>
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
        <Stack spacing={4}>
          <Input name="email" label="E-mail" type="email"/>
          <Input name="password" label="Senha" type="password"/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
