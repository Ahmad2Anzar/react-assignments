import {Button, Link as ChakraLink,Flex} from "@chakra-ui/react"
import {Link as ReactRouterLInk} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
const links=[
    {to:"/",
     label:"Home"   
    },
    {to:"/login",
    label:"Login"   
   },
   {to:"/about",
   label:"About"   
  },
  {to:"/contact",
  label:"Contact",   
 },
 {to:"/tasks",
 label:"Tasks"   
}
]



export default function Navbar()
{    

   const {logout,authDetails}= useContext(AuthContext)

    return(
        <Flex align="center" justify="space-around" background="teal.100" padding={4}>
       { links?.map((link)=> 
       <ChakraLink 
       color="teal.800"
        as={ReactRouterLInk} 
        key={link.to} 
        to={link.to} >
        {link.label}
        </ChakraLink>)}
       {authDetails.isLoggedIn? <Button onClick={logout}>Logout</Button>:null}
        </Flex>
     
    )
}