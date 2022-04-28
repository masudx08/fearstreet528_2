import React, {useState, useEffect} from 'react'
import { getUser } from './services/services';
export const MyContext = React.createContext();

export default function MainContext({children}) {
 const [user, setUser] = useState({})

 useEffect(()=>{
  getUser().then(res=>setUser(res))
},[])
  const defaultValue = {
   user, setUser
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}