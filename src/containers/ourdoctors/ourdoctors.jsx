import React from 'react';
import './ourdoctors.css';
import derek from '../../assets/derek.jpg'
import grey from '../../assets/grey.jpg'
import richardwebber from '../../assets/richardwebber.jpg'

const Ourdoctors = () => {
    return <div className="wrapper section__margin" id='doctors'>
        <h1 className='gradienttext'> Our Doctors</h1>
        <div className="doctors  ">
            <div className="doctor">
                <div className="team_img">
                    <img src={derek} width="300"></img>
                </div>
                <h3>Derek Shepherd, MD</h3>
                <p>Derek Shepherd, M.D is a renowned neurosurgeon who completed his residency at the University of Washington, Seattle. He is currently the head of neurosurgery.</p>
            </div>

            <div className="doctor">
                <div className="team_img">
                    <img src={grey} width="325"></img></div>
                <h3>Meredith Grey, MD</h3>
                <p>Meredith Grey, M.D completed her residency at Emory University. She is the head of general surgery. She trained under the world-renowned general surgeon and program director, Richard Webber.</p>
            </div>

            <div className="doctor">
                <div className="team_img">
                    <img src={richardwebber} width="300"></img>
                    <h3>Richard Webber, MD</h3>
                    <p>Richard Webber, M.D completed his residency at the University of Washington, Seattle. He trains interns on a day-to-day, is an attending general surgeon and is the Residency program director at the hospital.</p>
                </div>
            </div>
        </div>
    </div>
};

export default Ourdoctors;
