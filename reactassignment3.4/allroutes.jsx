import {Routes,Route} from "react-router-dom";
import courses from "./courses";
import learn from "./learn";
import fees from "./fees";


export deafult function AllRoutes()
{
    return(
        <Routes>
            <Route path="/courses"  element={<courses/>}></Route>
            <Route path="/fees"  element={<fees/>}></Route>
            <Route path="/learn"  element={<learn/>}></Route>
        </Routes>
    )
}