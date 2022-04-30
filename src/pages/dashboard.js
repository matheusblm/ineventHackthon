import { Box, Flex, Heading } from "@chakra-ui/react"
import { EventCard } from "../components/EventCard"
import { Menu } from "../components/Menu"

export const Dashboard = () => {

    const events = [{name: "Evento da Proerd",organize: "Loja do Ze", participants: 10, date: "30-04-2022", hour: "13:00", live: false }
    ,{name: "Evento da Proerd",organize: "Loja do Ze", participants: 10, date: "30-04-2022", hour: "13:00", live: false }
    ,{name: "Evento da Proerd",organize: "Loja do Ze", participants: 10, date: "30-04-2022", hour: "13:00" },{name: "Evento da Proerd",organize: "Loja do Ze", participants: 10, date: "30-04-2022", hour: "13:00", live: true }]
    return (
    <Flex w="100%" h="100%" >
        <Menu />
    <Box w="85%"  h="100%" >
        <Heading size="xl" textAlign="center" m="15px" fontWeight="thin">Seus Eventos</Heading>
        <Flex flexWrap="wrap" gridGap="10px" justifyContent="center">
        {events.map((item, idx) => < EventCard key={idx} event={item}/> )}
        </Flex>
   </Box>
   
    </Flex>
    )
}