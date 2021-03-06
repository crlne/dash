import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Checkbox, Th, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    useEffect(() => {
        fetch('https://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])


    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>

                        <Link href="/users/create" passHref>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="purple"
                        leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                         Add new
                        </Button> 
                        </Link>

                    </Flex>
                
                 <Table colorScheme="whiteAlpha">
                     <Thead>
                         <Tr>
                             <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                <Checkbox colorScheme="purple" />
                             </Th>
                             <Th>User</Th>
                             { isWideVersion && <Th>Registration date</Th> }
                             <Td width="8"></Td>
                         </Tr>
                     </Thead>
                     <Tbody>
                         <Tr>
                             <Td px={["4", "4", "6"]} >
                                 <Checkbox colorScheme="purple" />
                             </Td>
                             <Td>
                                 <Box>
                                     <Text fontWeight="bold">Caroline Ferreira</Text>
                                     <Text fontSize="sm" color="gray.300">carol.lages@outlook.com</Text>
                                 </Box>
                             </Td>
                             { isWideVersion && <Td>05 de Abril, 2021</Td> }
                            
                         </Tr>
                     </Tbody>
                 </Table>

                 <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}