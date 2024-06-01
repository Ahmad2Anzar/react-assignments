import {Box,Heading,Button,useToast} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"





export default  function Home()
{
   const toast=useToast()
   const navigate= useNavigate()
   function handleclick()
   {
      toast({
         title: 'u R going to about page.',
         description: "We've created your account for you.",
         status: 'success',
         duration: 3000,
         isClosable: true,
       })
       navigate('/about')
   }

 return(
   <>
    <Box>
        <Heading  as="h1" size="xl"  >
           Home Page
        </Heading>
        <Button colorScheme='teal' variant='outline' onClick={handleclick}>
    Click Me
  </Button>
    </Box></>
 )
}