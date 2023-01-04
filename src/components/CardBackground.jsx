import { Box, Heading } from '@chakra-ui/layout';
import React from 'react'


const CardBackground=({heading,children})=>{

  return (
    <Box w="full" bg="white" borderRadius="xl" px={6} py={5}>
     {heading &&  <Heading as="h2" color="gray.500" fontWeight="medium" fontSize="xl" mb={4}>{heading}</Heading>}
        {children}
    </Box>
  )
}
export  default CardBackground;
