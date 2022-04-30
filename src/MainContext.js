import React, {useState, useEffect} from 'react'
import { getAppointment, getContact, getUser } from './services/services';
export const MyContext = React.createContext();

export default function MainContext({children}) {
 const [user, setUser] = useState({})
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);

 useEffect(()=>{
  getUser().then(res=>setUser(res))
  getContact().then((res) => {
    setContacts(res);
  });
  getAppointment().then((res) => {
    setAppointments(res);
  });
},[])
  const defaultValue = {
   user, setUser,
   contacts, setContacts,
   appointments, setAppointments
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}