import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import {  Heading, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Loading from '../components/Loading'

const Profile = ({user,isLoading}) => {
  if(isLoading) {
    return <Loading/>
 }
  return (
    <Stack w="full" textAlign="center" alignItems="center" spacing={6}> 
     <Avatar size='2xl' name='Segun Adebayo' src={user.imageUrl} bg="purple" outline="2px solid purple" outlineOffset={2} />
     <Heading as="h2"  color="gray.600" fontSize="xl">{user.firstName}&nbsp;{user.lastName}</Heading>
    <Text color="gray.500">⚡ {user.interests.map((interest,idx)=>{
      if(idx!==user.interests.length-1)
      {
        return interest+" | "
      }
      else{
        return interest
      }
      })} ⚡</Text>
    <Button variant="outline" size="sm" colorScheme="gray" fontWeight="medium"  textTransform="uppercase">Download Resume</Button>
    </Stack>
  )
}

export default Profile