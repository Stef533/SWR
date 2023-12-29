import { UseGithubUser } from "./UseGithubUser";
import {Routes} from 'react-router-dom'
import { Route } from "react-router-dom";

export function App(){
  return(
  
    <Routes>
    <Route path='/users' element= {<UseGithubUser />} />
    </Routes>
    
  )
}