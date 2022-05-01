import React, { useContext, useState } from "react";
import { MyContext } from "../../MainContext";
import { addMeetLink } from "../../services/services";
import "./doctorportal.css";
import { handleAppointment } from "../../services/services";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export default function DoctorPortal() {
  const { appointments, user } = useContext(MyContext);
  const [calenderValue, setCalenderValue] = useState(new Date());
  const [hour, setHour] = useState(1)
  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <>
      <Calendar onChange={setCalenderValue} value={calenderValue} />
      <label>Schedule Time</label>
      <select
        onChange={(e)=>setHour(e.target.value)}
        style={{ padding: "10px" }}
      >
        {times.map((time, i) => {
          return (
            <option key={i} value={Number(time)}>
              {time}H
            </option>
          );
        })}
      </select>
      <div className="doctorPortalContainer">
        {appointments
          .filter(
            (item) =>
              item.status == "approved" &&
              user?.role == "doctor" &&
              new Date(item.scheduleDate).toDateString() ==
                calenderValue.toDateString() 
              && item.scheduleTime == hour
          )
          .map((item, i) => {
            return (
              <div key={i}>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Dob: {item.dob}</p>
                <p>
                  Schedule Date: {new Date(item.scheduleDate).toDateString()}
                </p>
                <p>Schedule Time: {item.scheduleTime}H</p>
                <p>problem: {item.problem}</p>
                <p>status: {item.status}</p>
                {item.link && (
                  <p>
                    link:{" "}
                    <a
                      style={{ color: "blue" }}
                      href={item.link}
                      target="_blank"
                    >
                      meet link
                    </a>
                  </p>
                )}
                <Meet item={item} />
              </div>
            );
          })}
      </div>
    </>
  );
}

function Meet({ item }) {
  const { appointments, setAppointments } = useContext(MyContext);
  const [link, setLink] = useState();
  const id = item._id;
  function submitInput() {
    addMeetLink({ link, id }).then((res) => {
      console.log(res);
    });
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
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="meet link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={submitInput}>submit</button>
      </div>
      <button style={{ marginTop: "10px" }} onClick={completeAppointment}>
        Complete Appointment
      </button>
    </div>
  );
}
