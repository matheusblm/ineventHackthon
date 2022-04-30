import { Box, Heading, Select, Stack} from '@chakra-ui/react'
import imgLive from '../img/live.jpg'

export const Live = () => {
    return (
        <>
            <Box h='100%' backgroundColor={'black'} display='flex' padding='50px'>
                <Box display='flex' flexDirection='column' w='60%'>
                    <Box>
                        <img src={imgLive} />
                    </Box>
                    <Box backgroundColor='white' h='300px' marginTop='30px'>
                        <Heading>Info</Heading>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' w='50%' padding={50}>
                    <Box padding='20px' backgroundColor='white' h='200px'>
                        <Heading size="xl">Grupos</Heading>
                        <Heading size="md">Selecione o grupo que quer participar</Heading>
                       
                    </Box>
                    <Box marginTop='50px' backgroundColor='white' h='300px'>
                        <Heading size='xl'>Chat</Heading>
                    </Box>
                </Box>
            </Box>
        </>

    )
}