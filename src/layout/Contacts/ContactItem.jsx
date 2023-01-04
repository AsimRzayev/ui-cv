import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ContactItem = ({contactIcon,heading,desc}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" color="gray.600">
           <Flex columnGap={2} alignItems="center"> {contactIcon} <Text>{heading}</Text></Flex>
            <Text>{desc}</Text>
    </Flex>
  )
}

export default ContactItem