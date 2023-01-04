import {  Heading, ListItem, Text } from '@chakra-ui/react'
import moment from 'moment/moment'
import React from 'react'
const ExperienceItem = ({experience}) => {
  return (
        <ListItem d="flex" borderLeft="1.5px solid" pb={2} borderLeftColor="gray.200" position="relative"  _before={{
            content:`""`,
            w:"8px",
            h:"8px",
            bg:'gray.100',
            borderRadius:"10px",
            position:"absolute",
            top:"7px",
            left:"-4.5px"
        }} px={4}>
            <Text as="p" color="gray.500" fontSize="sm">{moment(experience.startDate).locale("az").format("MMMM YY")} - {experience.endDate?moment(experience.endDate).locale("az").format("MMMM YY"):"Present"}</Text>
            <Heading fontSize="xl" color="gray.500" fontWeight="medium" my={1}>{experience.position}</Heading>
            <Text as="p" fontSize="xl" color="gray.500">{experience.company}</Text>
        </ListItem>
  
  )
}

export default ExperienceItem