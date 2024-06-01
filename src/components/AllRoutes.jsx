import Home from "../pages/home"
import About from "../pages/about"
import Login from "../pages/login"
import Contact from "../pages/contact"
import Tasks from "../pages/task"
import ViewTicket from "../pages/ticketview"
import CreateTicket from "../pages/createtask"
import EditTicket from "../pages/edittask"
import { useContext } from "react"
import {Routes,Route,Navigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

 

function PageWrapper({children}) {
  const {authDetails}=useContext(AuthContext)
  if(!authDetails?.isLoggedIn)
    {return(
      <Navigate to="/login" />
    )}
 return children;
}


export default function AllRoutes()
{
  return(
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>
        <Route path="/about" element={<PageWrapper><About/></PageWrapper>}/>
        <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>}/> 
        <Route path="/tasks" element={<PageWrapper><Tasks/></PageWrapper>}/>
        <Route path="/tasks/edit/:id" element={<PageWrapper><EditTicket/></PageWrapper>}/>       
        <Route path="/tasks/view/:id" element={<PageWrapper><ViewTicket/></PageWrapper>}/>
        <Route path="/tasks/create" element={<PageWrapper><CreateTicket/></PageWrapper>}/>
    </Routes>
  )
}