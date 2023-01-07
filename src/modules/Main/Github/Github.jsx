import React from 'react'
import {Grid} from "@chakra-ui/react"
import GithubItem from './GithubItem'
import { getRepos } from '../../../services/GithubService'
import { useQuery } from '@tanstack/react-query'
import Loading from "../../../components/Loading"



const Github = () => {
  
  const {data:repos,isLoading} =useQuery(["getRepos"],getRepos)

  if(isLoading){
     return <Loading/>
  }
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {repos.filter(x=>x.language).map(repo=> <GithubItem repo={repo} />)}
    </Grid>
  )
}

export default Github