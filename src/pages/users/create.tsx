import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const CreateUserFormSchema = yup.object().shape({ 
    name: yup.string().required('Name is required'),
    email: yup.string().required('E-mail is required').email('E-mail unavailable'),
    password: yup.string().required('Password is required').min(6, 'Minimo 6 characteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'passwords are not the same') 
  })

export default function CreateUser() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout (resolve, 2000));
        console.log(values);
    }
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Create user</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Full name"{...register('name')}  {...register('name')} error={errors.name} />
                            <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Password" {...register('password')} error={errors.password} />
                            <Input name="password_confirmation" type="password" label="Password confirmation" 
                           {...register('password_confirmation')} error={errors.password_confirmation}
                            />

                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                            <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
                            </Link>
                            <Button type="submit" colorScheme="purple"
                            isLoading={isSubmitting}
                            >
                                Save
                            </Button>
                        </HStack>
                    </Flex>
    
                </Box>
            </Flex>
        </Box>
    );
}