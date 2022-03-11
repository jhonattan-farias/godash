import { Box, Button, Checkbox, Flex, Text, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
    useEffect(() => {
        fetch('/api/users').then(res => res.json).then(data => console.log(data))
    },[])

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
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    
                    <Flex mb='8' justify='space-between' align='center'>
                        
                        <Heading size='lg'  fontWeight='normal' >
                            Usuarios
                        </Heading>
                        
                        <Link href='/users/create' passHref>
                            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        
                        <Thead>
                        
                        <Tr>
                           
                            <Th px='6' color='gray.300' w='8'>
                                <Checkbox colorScheme='pink'/>
                            </Th>
                            
                            <Th>
                                Usuario
                            </Th>
                            
                            <Th>

                            </Th>
                        </Tr>
                        </Thead>

                        <Tbody>
                            
                            <Tr>
                               
                                    <Th color='gray.300' w='8'>
                                        <Checkbox colorScheme='pink'/>
                                    </Th>
                                
                                <Td>
                                
                                    <Box>
                                        <Text fontWeight='bold'>
                                            Jhonattan
                                        </Text>
                                
                                        <Text fontWeight='bold' fontSize='sm' color='gray.300'>
                                            Jhonattan.far23@gmail.com
                                        </Text>
                                    </Box>
                                </Td>

                                <Td>12 de fevereiro de 2002</Td>
                                <Td>
                                <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon fontSize='16' as={RiPencilLine} />}>
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                            <Tr>
                               
                                    <Th color='gray.300' w='8'>
                                        <Checkbox colorScheme='pink'/>
                                    </Th>
                                
                                <Td>
                                
                                    <Box>
                                        <Text fontWeight='bold'>
                                            Jhonattan
                                        </Text>
                                
                                        <Text fontWeight='bold' fontSize='sm' color='gray.300'>
                                            Jhonattan.far23@gmail.com
                                        </Text>
                                    </Box>
                                </Td>

                                <Td>12 de fevereiro de 2002</Td>
                                <Td>
                                <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon fontSize='16' as={RiPencilLine} />}>
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>                        
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}