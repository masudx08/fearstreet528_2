import React, { useState, useEffect } from 'react';
import './admin.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { getContact, getAppointment, deleteContactById, deleteAppointmentById } from '../../services/services';
const Admin = () => {
    const [contacts, setContacts] = useState([])
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        getContact()
            .then(res => {
                setContacts(res)
            })
        getAppointment()
            .then(res => {
                setAppointments(res)
            })
    }, [])

    const deleteContact = (id) =>{
        deleteContactById(id)
        .then(res=>{
            if(res.status==200){
                const filteredContact = contacts.filter(item=>item._id !== id)
                setContacts(filteredContact)
            }
        })
    }
    const deleteAppointment = (id) =>{
        deleteAppointmentById(id)
        .then(res=>{
            if(res.status==200){
                const filteredAppointment = appointments.filter(item=>item._id !== id)
                setAppointments(filteredAppointment)
            }
        })
    }
 
    return <div className='main section__margin'>

        <div className='contact'>
            {
                contacts.map((contact, i) => {
                    return (
                        <Card key={i} className='card' sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {contact.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        {contact.email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {contact.text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={()=>deleteContact(contact._id)} size="small" color="primary">
                                    Close
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </div>


        <div className='appointments'>
            {
                appointments.map((appointment, i) => {
                    return (
                        <Card key={i} className='card' sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Name: {appointment.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Email: {appointment.email}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Date of Birth: {appointment.dob}
                                    </Typography>
                                    {/* <Typography gutterBottom variant="h7" component="div">
                                        Gender: Male
                                    </Typography> */}
                                    <Typography gutterBottom variant="h7" component="div">
                                        Appointment Time: {appointment.appointmentTime}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Problem: {appointment.problem}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  onClick={()=>deleteAppointment(appointment._id)}  size="small" color="primary">
                                    Close
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </div>

    </div>








}


export default Admin;
