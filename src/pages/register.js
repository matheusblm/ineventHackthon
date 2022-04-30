import {  Button, Flex,  Text,  Input,  VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
            <Flex w="100%" h="100%">
            <VStack w="50%" bg="#176585" h="100%"></VStack>
            <VStack w="50%"  h="100%" justifyContent="center">
                <Flex flexDir="column" gridGap="10px" height="500px" p="50px" border="1px" borderColor="gray.300" borderRadius="10px"shadow="xl" > 
                <Text>Email:</Text>
                    <Input />
                <Text>Nome de usuario</Text>
                    <Input />
                <Text>Senha:</Text>
                    <Input  type="password" />
                    <Button>
                        <Link to="/login">Cadastrar!</Link>
                        </Button>
                                        <HStack justifyContent="center">                 
                    <Text >Ja possui uma conta? Entre </Text>
                    <Text color="#176585"> <Link to="/login">aqui!</Link></Text> 
</HStack>
                </Flex>
            </VStack>
            </Flex>
    )
}