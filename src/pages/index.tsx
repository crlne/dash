import { Button, Flex, FormLabel, Input, Stack, FormControl } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" p="220" aling="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        
        <Stack spacing="4">
          <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>

        <Input name="email" type="email" id="email" focusBorderColor="purple.500" bgColor="gray.900" 
        variant="filled" _hover={{ bgColor: 'gray.900' }} size="lg"
        />
         </FormControl>

         <FormControl>
         <FormLabel htmlFor="password">Password</FormLabel>

        <Input name="password" type="password" id="password" focusBorderColor="purple.500" bgColor="gray.900"
        variant="filled" _hover={{ bgColor: 'gray.900' }} size="lg"
        />
         </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="purple" size="lg">Login</Button>

      </Flex>
    </Flex>
  )
}
