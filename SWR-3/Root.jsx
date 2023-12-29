import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Link } from "react-router-dom";

export function Root(){
  return(
    <BrowserRouter>
      <App />
      <Link to="/users">Users</Link>
    </BrowserRouter>
  )
}