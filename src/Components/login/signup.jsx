import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import {
    auth, registerWithEmailAndPassword,
    signInWithGoogle, signInWithFacebook
} from './firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";




import "./signup.css"
import { TextField } from "@material-ui/core";


const Signup = ({ showModal, setShowModal }) => {



    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    // const [validPwd, setValidPwd] = useState(false);
    //const [passwordCF, setpasscf] = useState(false);


    useEffect(() => {
        if (loading) return;
        if (user) navigate("#home");
    }, [user, loading]);




    const register = () => {


        registerWithEmailAndPassword(name, email, password);


    };


    return (

        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="shadow"
                    initial={{ x: '-99vw' }}
                    animate={{ x: '0' }}
                    transition={{ delay: 0, }}
                >

                    <motion.div className="modal_"
                        initial={{ y: '-99vw' }}
                        animate={{ y: '0' }}
                        transition={{ delay: 0.5, type: 'spring', }}

                    >

                        <form >
                            <h1 class='user__title'> Register with social media </h1>

                            <button
                                className="register__btn register__google"
                                onClick={signInWithGoogle}
                            >Register with Google
                            </button>
                            <button
                                className="register__btn register__facebook"
                                onClick={signInWithFacebook}
                            >Register with Facebook
                            </button>
                            
                            <h1 class='user__title'> Register with email </h1>
                            <label>Full Name</label>
                            <TextField
                                type="text"
                                autoComplete="off"
                                value={name}
                                placeholder="Enter Full name"
                                onChange={(e) => setName(e.target.value)}
                                {...register("name", {
                                    required: true,
                                    maxLength: 30,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {error?.name?.type === "required" && <p>This field is required</p>}
                            {error?.name?.type === "maxLength" && (
                                <p> name cannot exceed 30 characters</p>
                            )}
                            {error?.name?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}



                            <label>Email</label>
                            <TextField
                                autoComplete="off"
                                class="email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {error?.email?.type === "required" && <p>This field is required</p>}
                            {error?.email?.type === "pattern" && (
                                <p>Invaild email</p>
                            )}

                            <label>Password </label>
                            <TextField
                                autoComplete="off"
                                class="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                {...register("password",
                                    {
                                        required: true,
                                        pattern: regularExpression
                                    })} />
                            {error?.password?.type === "required" && <p>This field is required</p>}
                            {error?.password?.type === "pattern" && (
                                <p>password should contain atleast one number and one special characterl</p>
                            )}




                            <input className="btn" type="submit" value="Sign up" onClick={register} />
                            <button onClick={() => setShowModal(false)}>Cancel</button>


                            <br />

                        </form>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>

    );
}

export default Signup;