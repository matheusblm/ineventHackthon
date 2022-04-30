import {  Button, Flex,  Text,  Input,  HStack,VStack, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
            <Flex w="100%" h="100%">
            <VStack w="40%"  h="100%" justifyContent="center">
                <Flex flexDir="column" gridGap="10px" height="400px" p="50px" border="1px" borderColor="gray.300" borderRadius="10px"shadow="xl"> 
                 <Heading size="md" textAlign="center">Entrar</Heading>
                <Text>Email:</Text>
                    <Input />
                <Text>Senha:</Text>
                    <Input type="password" />
                    <Button>
                        <Link to="/dashboard"> Entrar</Link>
                       </Button>
                    <HStack justifyContent="center">                 
                    <Text >Cadastre-se </Text>
                    <Text color="#176585"> <Link to="/register">aqui!</Link></Text> 
</HStack>
                </Flex>
            </VStack>
            <VStack w="60%" bg="#176585" h="100%"></VStack>
            </Flex>
    )
}