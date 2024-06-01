import {Box,Heading,Input,Button,VStack} from "@chakra-ui/react"
import {useState,useContext} from "react"
import axios from "axios"
import {AuthContext} from "../context/AuthContext"
import { Navigate } from "react-router-dom"



export default  function Login()
{  
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("")

   const {login,authDetails:{isLoggedIn}} = useContext(AuthContext);


   async function handleClick()
    {
      try {
        let res= await axios({
            method:"post",
            url:"https://reqres.in/api/login",
            data:{email,password}
         })
         login(res?.data?.token)
         
      } catch (error) {
         console.log(error)
      }
    }

    if(isLoggedIn){
      return(
         <Navigate to="/"/>
      )
    }
 return(
    <Box>
        <Heading  as="h1" size="xl" textAlign="center" >
           Login Page
        </Heading>
        <VStack spacing={4}  margin={4}  >
        <Box><Input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></Box>
        <Box><Input type="password" placeholder="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/></Box>
        <Box><Button colorScheme='teal' variant='outline' onClick={handleClick}>
         Login
        </Button></Box>
        </VStack>
    </Box>
 )
}