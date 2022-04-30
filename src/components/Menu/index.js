import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import {HiOutlineUserCircle} from "react-icons/hi"
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
          <Flex w="15%"  h="100%" flexDir="column" borderRadius={4} color="gray.200">
   <Flex h="100%" flexDir="column" gridGap="100px" bg="#176585" p="10px">
           <Box>
<Text>LOGO MANEIRA</Text>
    </Box>
    <Box textAlign="center">
        <Icon as={HiOutlineUserCircle} fontSize="4xl"/>
<Text>Nome do Usuario</Text>
    </Box>
    <Flex flexDir="column" gridGap="10px">  
    <Link to="/dashboard">
        <HStack w="100%" _hover={{bg:"gray.400", borderRadius: "5px"}} transition="0.75s">
        <Text >Evento</Text>
        <Text color="red.500">LIVE</Text>
        </HStack>
    </Link>
        <Link to="/dashboard">
        <Text w="100%" _hover={{bg:"gray.400", borderRadius: "5px"}} transition="0.75s">Seus Eventos</Text>
    </Link>
           <Link to="/events">
        <Text w="100%" _hover={{bg:"gray.400", borderRadius: "5px"}} transition="0.75s">Eventos Publicos</Text>
    </Link>
    
        <Link to="/agenda">
        <Text w="100%" _hover={{bg:"gray.400", borderRadius: "5px"}} transition="0.75s">Agenda</Text>
    </Link>
    </Flex>
    <Button colorScheme="white" variant="outline">
        <Link to="/">
         <Text textAlign="center" >Sair</Text>
        </Link>
    </Button>
    </Flex>
   </Flex>
    )
}