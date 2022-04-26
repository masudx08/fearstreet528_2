import React, { useState } from 'react';
import './zoom.css';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { getSignature } from '../../services/services';
import { Helmet } from 'react-helmet';

const Zoom = () => {
	function startMeetingClicked(e) {
		e.preventDefault();
		getSignature('123456789', 0, 'React', '', '', '');
	}

	return (
		<div className="zoom-container">
			<Helmet>
				<title>Telemedicine | Zoom Demo</title>
			</Helmet>
			<div id="meetingSDKElement" className="zoomWindow">
				{/* Zoom Meeting SDK Component View Rendered Here */}
			</div>
			<Box textAlign='center'>
				<Button onClick={startMeetingClicked} variant="contained">Join Meeting</Button>
			</Box>
		</div>
	)
}

export default Zoom;