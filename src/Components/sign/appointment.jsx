import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { motion, AnimatePresence, animate } from 'framer-motion'
import './appointment.css';
import { useForm, Controller } from "react-hook-form";
import {postAppointment} from "../../services/services";



const Modal = ({ showModal, setShowModal }) => {
    const defaultValues = { ReactDatepicker: new Date() }
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm(defaultValues);



    const handleAppointment = data => {
        postAppointment(JSON.stringify(data))
    }; // your form submit function which will invoke after successful validation


    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop"
                    initial={{ x: '-99vw' }}
                    animate={{ x: '0' }}
                    transition={{ delay: 0, }}


                >
                    <motion.div className="modal"
                        initial={{ y: '-99vw' }}
                        animate={{ y: '0' }}
                        transition={{ delay: 0.5, type: 'spring', }}

                    >
                        <form onSubmit={handleSubmit((data)=>handleAppointment(data))}>
                            <label>Full Name</label>
                            <input
                                {...register("name", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {errors?.FirstName?.type === "required" && <p>This field is required</p>}
                            {errors?.FirstName?.type === "maxLength" && (
                                <p>First name cannot exceed 20 characters</p>
                            )}
                            {errors?.FirstName?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                            

                            {/* <label>Date of Birth</label>
                            <Controller
                                control={control}
                                name="DoB"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                        
                                    />
                                )}
                            /> */}

                            {/* <label>Gender Selection</label>
                            <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select> */}
                            <label>Email</label>
                            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            <label>Date of Birth</label>
                            <input {...register("dob", { required: true })} />
                            <label>Schedule</label>
                            <input {...register("schedule", { required: true })} />
                            <label>Your Problems</label>
                            <input {...register("problem", { required: true })} />



                            <input type="submit" />
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </form>

                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>


    )
}

export default Modal;
