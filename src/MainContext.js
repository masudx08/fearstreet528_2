import React, {useState} from 'react'
export const MyContext = React.createContext();

export default function MainContext({children}) {
 const [user, setUser] = useState({})

  const defaultValue = {
   user, setUser
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}