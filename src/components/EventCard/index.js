import { Flex, Text, HStack } from "@chakra-ui/react"
export const EventCard = ({
event
}) => {
    return (
        <Flex w="400px" h="100px"  border="1px" borderColor="gray.300"borderRadius="10px" flexDir="column" gridGap="5px" p="10px" boxShadow="md" color="gray.700" fontWeight="thin">
            <HStack justifyContent="space-between">
            <Text> {event.name}</Text>
             <Text> {event.organize}</Text>
            </HStack>
            <Text>Num. Participantes: {event.participants}</Text>
          <HStack justifyContent="space-between">
        <Text>Dia: {event.date}</Text>
        <Text>Horario: {event.hour}</Text>
          </HStack>
        </Flex>
    )
}