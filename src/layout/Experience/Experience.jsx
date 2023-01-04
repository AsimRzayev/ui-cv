import { List } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../components/Loading'
import { getExperience } from '../../services/ProfileService'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
 
  const {isLoading,data:experienceList}=useQuery(["getExperience"],getExperience)
if(isLoading){
  return <Loading/>
}

return(<List>{experienceList?.map((experience,idx)=>{
  return <ExperienceItem   experience={experience} key={idx} />
})}
</List>
)
}

export default Experience
