import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack, } from "@chakra-ui/react";
import Link from "next/link";
import { } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {SubmitHandler, useForm} from 'react-hook-form'

interface CreateUserFormData {
    name:string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('E-mail Obrigatorio').email('E-mail Invalido'),
    password: yup.string().required('Senha obrigatória').min(6,'A senha precisa no minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null,yup.ref("password")], 'As senhas precisam ser iguais'),
})
  


export default function UserCreate(){
    const { handleSubmit, formState, register } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })



    const handleSubmitForm: SubmitHandler<CreateUserFormData> = (data) => {
        console.log(data)
    }   

    return (
        <Box>
            <Header />
            
            <Flex
                w='100%'
                my='6'
                maxWidth={1480}
                mx='auto'
                px='6'
            >
                <Sidebar />
                <Box
                    as='form' 
                    flex='1' 
                    borderRadius={8} 
                    bg='gray.800' 
                    p={['6','8']}
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
                    <Heading
                        size='lg'
                        fontWeight='normal'
                    >
                        Criar Usuario
                    </Heading>
                    <Divider my='6' borderColor='gray.600' />

                    <VStack
                        spacing={['6','8']}
                    >
                        <SimpleGrid
                            minChildWidth='240px'
                            spacing={['6','8']}
                            w='100%'
                        >
                            <Input 
                                name='name' 
                                type='name' 
                                label='Nome completo' 
                                {...register('name')}
                                error={formState.errors.name}
                            />
                            <Input 
                                name='email' 
                                label='E-mail' 
                                type='email' 
                                {...register("email")}
                                error={formState.errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth='240px'
                            spacing={['6','8']}
                            w='100%'
                        >
                            <Input 
                                name='password' 
                                type='password' 
                                label='Senha' 
                                {...register("password")}
                                error={formState.errors.password} 
                            />
                            <Input 
                                name='password_confirmation' 
                                type='password' 
                                label='Confirmação da senha' 
                                {...register("password_confirmation")}
                                error={formState.errors.password_confirmation} 
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex 
                        mt='8'
                        justify='flex-end'
                    >
                        <HStack
                            spacing='4'
                        >
                            <Link href='/users' passHref>
                                <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button type='submit' colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}