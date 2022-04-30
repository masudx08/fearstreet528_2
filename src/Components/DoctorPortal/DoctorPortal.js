import React, { useContext, useState } from 'react'
import { MyContext } from '../../MainContext'
import { addMeetLink } from '../../services/services'
import './doctorportal.css'
import {
  handleAppointment,
} from "../../services/services";
function Meet({item}){
  const {appointments, setAppointments} = useContext(MyContext)
  const [link, setLink] = useState()
  const id = item._id

  function submitInput(){
    addMeetLink({link, id})
    .then(res=>{
      console.log(res)
    })
  }
  const completeAppointment = () => {
    handleAppointment({ id, status: "completed" }).then((res) => {
      if (res.status == 200) {
        const filteredAppointment = appointments.filter(
          (item) => item._id !== id
        );
        setAppointments(filteredAppointment);
      }
    });
  };
  return (
    <div>
      <div style={{display:'flex'}}>
      <input type="text" placeholder='meet link' value={link}  onChange={e=>setLink(e.target.value)} />
      <button onClick={submitInput}>submit</button>
      </div>
      <button style={{marginTop:'10px'}} onClick={completeAppointment}>Complete Appointment</button>
    </div>
  )
}

export default function DoctorPortal() {
  const {appointments} = useContext(MyContext)
  return (
    <div className='doctorPortalContainer'>
      {
        appointments
        .filter((item)=>item.status == 'approved')
        .map((item, i)=>{
          return(
            <div key={i}>
             <p>name: {item.name}</p> 
             <p>email: {item.email}</p> 
             <p>dob: {item.dob}</p> 
             <p>problem: {item.problem}</p> 
             <p>status: {item.status}</p> 
             {item.link  && <p>link: <a style={{color:'blue'}} href={item.link} target="_blank">meet link</a></p>}
             <Meet item={item} />
            </div>
          )
        })
      }
    </div>
  )
}
