import{Routes,Route} from "react-router-dom"
import Login from "../pages/login"
import Home from "../pages/home"
import { AuthContext } from "./authentifiaction"
import { Navigate } from "react-router-dom"


import { useContext } from "react"

function Private({children}) {
 const {authDeatils}=useContext(AuthContext)
 if(!authDeatils?.isAuthenticated){
    return<Navigate to="/login"/>
 }
 return children
}
export default function AllRoutes(){
    return(
        <Routes>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/"  element={<Private><Home/></Private>}/>
            <Route  path="/product/detail/:id"/>
             
        </Routes>
    )
}