import { Box, Flex, Spacer, Button, ButtonGroup, Heading } from '@chakra-ui/react'
import imgHome from '../img/animacao.png'
import imgCard1 from '../img/card1.png'
import imgCard2 from '../img/card2.png'
import imgCard3 from '../img/card3.png'
import imgCard4 from '../img/card4.png'
import logo from '../img/logo.png'

export const Home = () => {
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' padding='10px'>
                <Box p='2' marginLeft='100px'>
                    <img src={logo} />
                </Box>
                <Spacer />
                <ButtonGroup gap='3' marginRight='100px'>
                    <Button color='white' size='lg' backgroundColor='#27B1BF' _hover={{ opacity: '0.7' }}>Entrar</Button>
                    <Button color='#27B1BF' size='lg' backgroundColor='#fff' borderColor='#27B1BF' variant='outline'>Cadastre-se</Button>
                </ButtonGroup>
            </Flex>

            <Heading as='h2' size='xl' textAlign='left' marginBottom='40px' marginTop='20px' fontWeight='100' marginLeft='350px'>
                UMA FORMA FÁCIL E GRATUITA <br/>DE GERIR SEUS EVENTOS
            </Heading>

            <Flex>
                <Box w='50%' display='flex' justifyContent='center'>
                    <img src={imgHome} />
                </Box>
                <Box w='45%' display='flex' justifyContent='center' flexDirection='column'>
                    <Box display='flex'>
                        <Box border='1px solid #27B1BF' padding='15px' borderRadius='20px' marginRight='20px' width='240px' height='210px'>
                            <img src={imgCard1} />
                            <Heading size='xs' fontWeight='normal'>CONECTE PESSOAS DO MUNDO INTEIRO DE FORMA ACESSÍVEL</Heading>
                        </Box>
                        <Box border='1px solid #27B1BF' backgroundColor='#27B1BF' padding='15px' borderRadius='20px' display='flex' justifyContent='center' flexDirection='column' width='240px' height='210px'>
                            <Box display='flex' justifyContent='center'><img src={imgCard2} /></Box>
                            <Heading size='xs' fontWeight='normal' color='#fff' textAlign='center' paddingTop='9px'>UTILIZE DE FORMAS PRESENCIAIS E VIRTUAIS</Heading>
                        </Box>
                    </Box>
                    <Box display='flex' marginTop='10px'>
                        <Box border='1px solid #27B1BF' marginRight='20px' backgroundColor='#27B1BF' padding='15px' borderRadius='20px' display='flex' justifyContent='center' flexDirection='column' width='240px' height='210px'>
                            <Box display='flex' justifyContent='center'><img src={imgCard3} /></Box>
                            <Heading size='xs' fontWeight='normal' color='#fff' textAlign='center' paddingTop='9px'>CRIE SOLUÇÕES INOVADORAS</Heading>
                        </Box>
                        <Box border='1px solid #27B1BF' padding='15px' borderRadius='20px' width='240px' height='210px'>
                            <img src={imgCard4} />
                            <Heading size='xs' fontWeight='normal' textAlign='center'>FAÇA REUNIÕES GRATUITAS E
                                DE QUALIDADE</Heading>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}