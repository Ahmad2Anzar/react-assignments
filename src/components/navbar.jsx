import {useContext} from "react"
import { AuthContext } from "./authentifiaction"
import { Box, Flex,Button,Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export default function Navbar(){
    const {authDetails,logout}=useContext(AuthContext)
    return(
    <Box>
        <Flex justifyContent="space-around">
            <p>{authDetails.email}</p>
            <Link to="/" label="Home"/>
            {(authDetails.isAuthenticated)?<Button onClick={()=>{logout}}>Logout</Button>:null}
        </Flex>
    </Box>)
}