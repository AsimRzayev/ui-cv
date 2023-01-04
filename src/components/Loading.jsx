import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loading() {
  return (
    <Flex justifyContent="center" py={5}><Spinner/></Flex>
  )
}
