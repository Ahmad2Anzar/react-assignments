import {useState,useEffect} from "react"
import LoadingIndicator from "../components/loading"
import ErrorIndicator from "../components/error"
import { Container,Select,HStack, SimpleGrid,  } from "@chakra-ui/react"
import Card from "../components/card"
export default function Home()
{async function fetch(sortvalue,filtervalue){
    setLoading(true)
    try {
        let queryparams={}
        if(filtervalue){
            queryparams.filter=filtervalue;
        }
        if(sortvalue){
            queryparams.sort="price";
            queryparams.order=sortvalue
        }

        let res=await AxiosContext({
            method:"get",
            url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
        }
    )
    let product=res?.data 
    setProduct(product)
    } catch (error) {
        setLoading(false)
        setErr(true)
    }
}

useEffect(()=>{
    fetch(sortvalue,filtervalue)
},[sortvalue,filtervalue])

    const[loading,setLoading]=useState(false)
    const[err,setErr]=useState(false)
    const[products,setProduct]=useState([])
    const[filtervalue,setFilterValue]=useState("")
    const[sortvalue,setSortValue]=useState("")



    if(loading){return  <LoadingIndicator/>}
    if(err){return  <ErrorIndicator/>}

    return(
      <Container>
       <HStack>
       <Select placeholder='Filter by category' value={filtervalue} onChange={(e)=>{setFilterValue(e.target.value)}}>
  <option value='men'>Men</option>
  <option value='women'>Women</option>
  <option value='kids'>Kids</option>
  <option value="homedecor">HomeDecor</option>
</Select>

<Select placeholder='sort by Price' value={sortvalue} onChange={(e)=> {setSortValue(e.target.value)}}>
  <option value='asc'>Low to High</option>
  <option value='dsc'>High to Low</option>
  
</Select>
       </HStack>
      
      <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={5}>
      {products?.map((e)=>(
        <Card {...e} key={e.id} />
      ))}

      </SimpleGrid>


     

      </Container>
        
    )
}