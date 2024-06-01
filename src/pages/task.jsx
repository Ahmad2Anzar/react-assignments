import {Box,Heading,Button,Container,Flex} from "@chakra-ui/react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Card,SimpleGrid,Select,HStack ,CardHeader,Stack,StackDivider,Text, CardBody, CardFooter } from '@chakra-ui/react'



export default  function Tasks()
{
   const [loading,setLoading]=useState(false)
   const [tasks,setTasks]=useState([])
   const [err,setErr]=useState(false)
   const [sortOrderValue,setSortOrderValue]=useState('')
   const [filterValue,setFilterValue]=useState("")
   const Navigate=useNavigate()
        

   function Cards({title,status,priority,id}){
    return(
      <Card>
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Title
          </Heading>
          <Text pt='2' fontSize='sm'>
           {title}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Status
          </Heading>
          <Text pt='2' fontSize='sm'>
            {status}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Priority
          </Heading>
          <Text pt='2' fontSize='sm'>
            {priority}
          </Text>
        </Box>
      </Stack>
    </CardBody>
    <CardFooter>
    
      <Button variant='solid' colorScheme='blue' onClick={()=>Navigate(`/tasks/view/${id}`)} >
        View Task
      </Button>
      </CardFooter>
  </Card>
    )
  }

    function handleClick(){
       Navigate('/tasks/create')
    }
   

   async function fetchAndUpdateData(sortOrderValue,filterValue){
    setLoading(true)
   try {

    let queryParams={}
    filterValue?queryParams.status=filterValue:null
    queryParams._sort = sortOrderValue ? "priority" : queryParams._sort;
    queryParams._order = sortOrderValue ? sortOrderValue : queryParams._order;


    let res=await axios({
      method:"get",
      url:`http://localhost:3000/tickets`,
      params:queryParams,
     })
     setLoading(false)
     setTasks(res?.data)
     
   } catch (error) {
    setLoading(false)
    setErr(true)
    console.log(error)
   }
   }

   useEffect(()=>{
    fetchAndUpdateData(sortOrderValue,filterValue)
   },[sortOrderValue,filterValue])
   
 return(
   <Container maxW="container.lg">
    <Box>
       <Heading  as="h1" size="xl" textAlign="center" margin={10} >
           Tasks Page
        </Heading>
        <Flex direction="row-reverse">
          <Button variant="outline" onClick={handleClick}>Create Tickets</Button>
        </Flex>
      <HStack spacing={10} padding={20  }>
      <Select placeholder='Sort By Priority' value={sortOrderValue} onChange={(e)=>{setSortOrderValue(e.target.value)}}>
        <option value='asc'>Low to High</option>
        <option value='desc'>High to Low</option>
        
      </Select>
      <Select placeholder='Filter By Status' value={filterValue}  onChange={(e)=>{setFilterValue(e.target.value)}}>
        <option value='completed'>Completed</option>
        <option value='incompleted'>Incompleted</option>
        <option value='inprogress'>Inprogress</option>
      </Select>
      </HStack>
    </Box>
    <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={4}>
    {tasks?.map((Tasks)=>(<Cards  {...Tasks} key={Tasks.id}/>)
    )}
    </SimpleGrid> 
    
   
    </Container>

 )
}