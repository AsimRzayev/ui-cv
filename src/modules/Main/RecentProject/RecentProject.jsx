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
  

//   console.log(repos.sort(function (a, b) {
//     var key1 = new Date(a.created_at).getTime();
//     var key2 = new Date(b.created_a).getTime();

//     if (key1 < key2) {
//         return -1;
//     } else if (key1 === key2) {
//         return 0;
//     } else {
//         return 1;
//     }
// }),"test")
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {repos.reverse().slice(0,2).map(repo=> <GithubItem repo={repo} />)}
    </Grid>
  )
}

export default RecentProject