import { Button, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({ 
  email: yup.string().required('E-mail is required').email('E-mail unavailable'),
  password: yup.string().required('Password is required')
  
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout (resolve, 2000));
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" p="220" aling="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" 
      onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {...register('email')} 
          error={errors.email}
          />
          <Input name="password" type="password" label="Password" {...register('password')} error={errors.password} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="purple" size="lg" isLoading={isSubmitting}>Login</Button>

      </Flex>
    </Flex>
  )
}
