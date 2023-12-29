import { UseGithubUser } from "./UseGithubUser";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json())

export function App(){
  return(  
    <SWRConfig value={{fetcher}}>
      <UseGithubUser username= 'example'/>
    </SWRConfig>
  )
}