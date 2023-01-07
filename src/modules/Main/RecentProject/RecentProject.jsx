import React from 'react'
import {Grid} from "@chakra-ui/react"
import GithubItem from './RecentProjectItem'
import { getRepos } from '../../../services/GithubService'
import { useQuery } from '@tanstack/react-query'
import Loading from "../../../components/Loading"



const RecentProject = () => {
  
  const {data:repos,isLoading} =useQuery(["getRepos"],getRepos)

  console.log(repos)
  if(isLoading){
     return <Loading/>
  }
  

  let recentPosts=repos.sort(function(a, b) { 
    a = new Date(a.created_at);
    b = new Date(b.created_at);
    return a >b ? -1 : a < b ? 1 : 0;
   })

   
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {recentPosts.slice(0,2).map(repo=> <GithubItem repo={repo} />)}
    </Grid>
  )
}

export default RecentProject