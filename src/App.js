import './App.css';

import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Appointment, Brand, Cta, Navbar } from './Components';
import { Footer, Blog, Header, What, Possibility, Ourdoctors, ContactUs, Admin } from './containers';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="App">
            <Helmet>
                <title>Telemedicine</title>
            </Helmet>
            <div className="gradientbg">
                <Navbar />
                <Header />
                <Appointment showModal={showModal} setShowModal={setShowModal} />
            </div>
            <Brand />
            <What />
            <Ourdoctors />
            {/*<Possibility/>*/}
            {/*<Cta/>*/}
            <Blog />
            <ContactUs />
            <Admin />
            <Footer />
            <MessengerCustomerChat pageId="103214868939799" appId="477258803868285" />
        </div>
    )
};

export default App;