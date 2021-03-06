import React, { useContext } from "react";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { motion, AnimatePresence, animate } from "framer-motion";
import "./appointment.css";
import { useForm, Controller } from "react-hook-form";
import { postAppointment } from "../../services/services";
import { MyContext } from "../../MainContext";

const Modal = ({ showModal, setShowModal }) => {
  const defaultValues = { ReactDatepicker: new Date() };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm(defaultValues);

  const { user } = useContext(MyContext);
  const handleAppointment = (data) => {
    console.log(data);
    postAppointment(JSON.stringify({ ...data, status: "pending" }));
  }; // your form submit function which will invoke after successful validation

  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          initial={{ x: "-99vw" }}
          animate={{ x: "0" }}
          transition={{ delay: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ y: "-99vw" }}
            animate={{ y: "0" }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <form onSubmit={handleSubmit((data) => handleAppointment(data))}>
              <label>Full Name</label>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  //   pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.FirstName?.type === "required" && (
                <p>This field is required</p>
              )}
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
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                value={user.email || ""}
              />
              <label>Date of Birth</label>
              <input {...register("dob", { required: true })} />
              <div style={{display:'flex'}}>
              <div>
                <label>Schedule Date</label>
                <input
                  {...register("scheduleDate", { required: true })}
                  type="date"
                />
              </div>
              <div>
              <label>Schedule Time</label>
              <select {...register("scheduleTime", { required: true })}  style={{padding: '10px'}} >
                {times.map((time, i) => {
                  return <option key={i} value={time}>{time}H</option>;
                })}
              </select>
              </div>
              </div>
              

              <label>Your Problems</label>
              <input {...register("problem", { required: true })} />

              <input type="submit" />
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
