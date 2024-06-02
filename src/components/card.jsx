import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'




export default function Card({id,title,price,image,category}){
    const navigate=useNavigate()
    return(<Card >
    <CardBody>
      <Image
        src={image}
        
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
       
        <Text color='blue.600' fontSize='2xl'>
          {price}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {category}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
       
        <Button variant='ghost' colorScheme='blue' onClick={()=>{
           navigate(`/product/detail/${id}`)
        }
               
        }>
          View Details
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>)
}