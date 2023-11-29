import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
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
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
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
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
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
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
