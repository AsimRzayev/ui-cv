import {   Stack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import CardBackground from '../components/CardBackground'
import Loading from '../components/Loading'

import Navbar from '../components/Navbar'
import { getProfile } from '../services/ProfileService'
import Contacts from './Contacts/Contacts'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Profile from './Profile'
import Tech from './Tech'

export default function MainLayout() {
  
  const {isLoading,data:user}=useQuery(["getProfile"],getProfile)

  return (
    <Stack spacing={4}  w="32%" >
        <Navbar/>
        <CardBackground >
        {isLoading?<Loading/>:  <Profile isLoading={isLoading} user={user}/>}
        </CardBackground>
        <CardBackground >
          {isLoading?<Loading/>:<Contacts user={user}/>}
        </CardBackground>

        <CardBackground heading="Tech Stack" >
          <Tech/>
        </CardBackground>

        <CardBackground  heading="Experience">
           <Experience/>
        </CardBackground>
        <CardBackground  heading="Education">
           <Education/>
        </CardBackground>
    </Stack>
  )
}
