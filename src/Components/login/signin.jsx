import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import {
  auth, logInWithEmailAndPassword,
  signInWithGoogle,signInWithFacebook
} from './firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";



import "./signin.css"
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";

const Signin = ({ showModal, setShowModal }) => {
 

  function postLogin() { };
  //var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("#home");
  }, [user, loading]);

  const signin = () =>{
    logInWithEmailAndPassword(email,password);
  }

  const logout = async()=>{
    setShowModal(false);
    await signOut(auth);
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className="shadow_"
          initial={{ x: '-99vw' }}
          animate={{ x: '0' }}
          transition={{ delay: 0, }}
        >

          <motion.div className="modal-"
            initial={{ y: '-99vw' }}
            animate={{ y: '0' }}
            transition={{ delay: 0.5, type: 'spring', }}

          >

            <form >
              <h1 class='user__title'> Welcome back </h1>
              <label>Email</label>
              <input
                class="email"
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
              {error?.email?.type === "required" && <p>This field is required</p>}
              {error?.email?.type === "pattern" && (
                <p>Invaild email</p>
              )}

              <label>Password </label>
              <input
                class="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required= {true}
                
                  />
              {error?.password?.type === "required" && <p>This field is required</p>}
              {error?.password?.type === "pattern" && (
                <p>password should contain atleast one number and one special characterl</p>
              )}

              <button
                className="signin__btn register__google"
                onClick={signInWithGoogle}
              >Sign in with Google
              </button>
              <button
                className="signin__btn register__facebook"
                onClick={signInWithFacebook}
                >Sign in with Facebook
                            </button>
              <input className="btn" type="submit" value="Sign in" onClick={signin} />
              <button onClick={logout}>Sign out</button>
              <br />

            </form>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>

  );
}

export default Signin;