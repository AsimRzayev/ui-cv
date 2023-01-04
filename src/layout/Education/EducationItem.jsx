import {  Heading, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const EducationItem = ({experience}) => {
  return (
    <List>
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
            <Text as="p" color="gray.500" fontSize="sm">{experience.startYear} - {experience.endDate?experience.endYear:"Present"}</Text>
            <Heading fontSize="xl" color="gray.500" fontWeight="medium" my={1}>{experience.degree}</Heading>
            <Text as="p" fontSize="xl" color="gray.500">{experience.university}</Text>
        </ListItem>
    </List>
  )
}

export default EducationItem