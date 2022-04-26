import React from 'react';
import { useForm } from 'react-hook-form';
import { postContact } from '../../services/services';
import './contactus.css';

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const handleContact = (data) => {
        postContact(JSON.stringify(data))
    }

    return <div id="contactus" className="wrapper section__margin">
        <form onSubmit={handleSubmit((data) => handleContact(data))}>
            <h1 className='gradienttext'> Contact Us</h1>

            <div className="inputBox">
                <label htmlFor="name">Full Name:</label>
                <input {...register("name")} placeholder='Enter your full name' required></input>
            </div>

            <div className="inputBox">
                <label htmlFor="email"> Email:</label>
                <input {...register("email")} placeholder='example@email.com' required></input>
            </div>

            <div className="inputBox">
                <label htmlFor="message"> Message:</label>
                <textarea {...register("text")} placeholder='Please enter message' required rows="10" cols="60" ></textarea>
            </div>

            {/* <p>{data}</p> */}
            <input type="submit" value="Submit"></input>
        </form>
    </div>
};

export default ContactUs;
