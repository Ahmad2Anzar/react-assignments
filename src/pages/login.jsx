import {Box,Heading,Input,Button,VStack} from "@chakra-ui/react"
import {useState,useContext, useEffect} from "react"
import axios from "axios"
import { AuthContext } from "../components/authentifiaction"
import { Navigate } from "react-router-dom"
import LoadingIndicator from "../components/loading"
import ErrorIndicator from "../components/error"
import { useState,useEffect } from "react"
import {useRef} from "react"



export default  function Login()
{  
    const[loading,setLoading]=useState(false)
    const[err,setErr]=useState=(false)
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("")
  const inputRef=useRef(null)
   const {login,authDetails:{isAuthenticated,},authDetails:{lemail}} = useContext(AuthContext);
   const handlefocus=()=>{
    inputRef.current.focus()
   }

   useEffect(()=>{
         handlefocus()
   },[])

   async function handleClick()
    { setLoading(true)
      try {
        let res= await axios({
            method:"post",
            url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
            data:{email,password}
         })
         login(res?.data?.token,email)
         
      } catch (error) {
         setLoading(false)
         setErr(true)
      }
    }

    if(loading){
        return(
            <LoadingIndicator/>
        )
    }
    if(err){
        return(
            <ErrorIndicator/>
        )
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