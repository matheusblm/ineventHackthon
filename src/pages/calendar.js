import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Menu } from "../components/Menu";
import { Box, Flex, Heading } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const myEventsList = [ 
  { start: new Date(), end: new Date(), title: "Evento do Proerd" }
];

export const Agenda = () =>  {
  return (
        <Flex w="100%" h="100%" >
        <Menu />
    <Box w="85%"  h="100%" >
        <Heading size="xl" textAlign="center" m="15px" fontWeight="thin">Sua Agenda</Heading>
        <Flex flexWrap="wrap" gridGap="10px" justifyContent="center">
           <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
        </Flex>
   </Box>
   
    </Flex>
  
  );
}