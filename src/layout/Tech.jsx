import { Badge, Flex } from '@chakra-ui/react'
import {  useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../components/Loading'
import { getTech } from '../services/ProfileService'

export default function Tech() {
const {isLoading,data:tech}=useQuery(["getTech"],getTech)
if(isLoading){
    return <Loading/>
}
  return (
    <Flex flexWrap='wrap' justifyContent="center" columnGap={2} rowGap={2} px={2}>{
        tech?.map(t=><Badge key={t} bg="blue" fontSize="xs" py={1} px={2} borderRadius="xl" color="white">{t}</Badge>)
    }</Flex>
  )
}
