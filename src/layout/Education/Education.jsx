import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../components/Loading'
import { getEducation } from '../../services/ProfileService'
import EducationItem from './EducationItem'


const Education = () => {
 
  const {isLoading,data:educationList}=useQuery(["getEducation"],getEducation)
if(isLoading){
  return <Loading/>
}

return educationList?.map((experience,idx)=>{
  return <EducationItem  experience={experience} key={idx} />
})
}

export default Education
