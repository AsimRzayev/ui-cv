import React from 'react'
import {Box, Flex, GridItem,Heading,Text, useToast} from "@chakra-ui/react"
import {FiLink2} from "react-icons/fi"
import {BsStar} from "react-icons/bs"
import {BiGitBranch} from "react-icons/bi"
const colors={
  HTML:"red",
  TypeScript:"blue",
  JavaScript:"yellow"
}
const GithubItem = ({repo}) => {
  const toast=useToast();
  const  handleCopy=async ()=>{
   await navigator.clipboard.writeText(repo.clone_url);
    toast({
      position:"top-right",
      title: 'Link copied',
      description: "Git clone url copied",
      status: 'success',
      duration: 1500,
      isClosable: true,
    })
   window.open(repo.svn_url)
  }
  return (
    <GridItem bg="white" borderRadius="xl" px={6} py={8} boxShadow="md"  target="_blank" onClick={handleCopy}  >
        <Heading as="h2" fontSize="medium" display="flex"  columnGap={1} alignItems="center" fontWeight="medium" color="gray.600" > <FiLink2/> {repo.name}</Heading>
        <Text as="p" color="gray.500" mt={1}>{repo.description
}</Text>
        <Flex mt={8} justifyContent="space-between">
            <Flex columnGap={4}>
              <Text display="flex" columnGap={1} alignItems="center" color="gray.600"><BsStar/> {repo.stargazers_count
}</Text>
              <Text display="flex" columnGap={1} alignItems="center" color="gray.600"><BiGitBranch/>{repo.forks}</Text>
            </Flex>

            <Text display="flex" columnGap={1}  alignItems="center" color="gray.600"><Box bg={colors[`${repo.language}`]} w="16px" h="16px" borderRadius="xl"></Box>{repo.language}</Text>
        </Flex>
    </GridItem>
  )
}

export default GithubItem