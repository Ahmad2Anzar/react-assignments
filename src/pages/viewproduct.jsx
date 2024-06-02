//sir time km tha to ismein error aur loading indicator nhin use hai baki sb mein use hai



import { Toast } from "@chakra-ui/react"

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const { isOpen, onOpen, onClose } = useDisclosure()




export default function ViewProduct(){
 const {id}=useParams
 const[sPro,setSPro]=useState({})
 const cancelRef = React.useRef()

async function getsingle(id){
    try {
        let res=await axios({
            method:"get",
            url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
        })
        
        let data=res?.data
        setSPro(data)
       

    } catch (error) {
        alert("somethingwent wrong")
    }
}

useEffect(()=>{
    getsingle()
},[id])

function handleClick(){

}

 return(

    <Card maxW='sm'>
  <CardBody>
    <Image
      src='sPro.image'
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{sPro.title}</Heading>
      <Text>
       {sPro.category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {sPro.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
     
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Add to Cart
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              COnfirm Add Product to Cart
            </AlertDialogHeader>

           
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3} >
               Add to Cart
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
    </ButtonGroup>
  </CardFooter>
</Card>
 )



}