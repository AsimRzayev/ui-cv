import { Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes'

const Navbar = () => {
  return (
    <Flex bg="white" py={4} justifyContent="space-around" borderRadius="md" >
        <Link as={NavLink} to={ROUTES.home} fontSize="xl" fontWeight="medium" transition="0.5s ease" _hover={{
            color:"blue"
        }} >Home</Link>
        <Link as={NavLink} to={ROUTES.blogs} fontSize="xl" fontWeight="medium"       transition="0.5s ease" _hover={{
            color:"blue"
        }}>Blogs</Link>
        <Link as={NavLink} to={ROUTES.projects} fontSize="xl" fontWeight="medium"  
        transition="0.5s ease"
        _hover={{
            color:"blue"
        }}  >Projects</Link>
    </Flex>
  )
}

export default Navbar