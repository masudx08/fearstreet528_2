import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
const signatureUrl = "http://localhost:4000/";
const backendUrl = 'http://localhost:5555/app/';

const postContact =(data)=>{
  fetch(backendUrl+'contact', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res => {
    console.log( 'success')
  })
}

const getContact = () => {
  return fetch(backendUrl+'contact')
  .then(res => res.json())
}

const deleteContactById = (id) => {
  return fetch(backendUrl+'contact/'+id, {method:'DELETE'})
}
const postAppointment = (data) => {
  fetch(backendUrl+'appointment', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res => {
    console.log('success')
  })
}
const getAppointment = () => {
  return fetch(backendUrl+'appointment')
  .then(res=>res.json())
}

const deleteAppointmentById = (id) => {
  return fetch(backendUrl + 'appointment/' + id, { method: 'DELETE' })
}

const getSignature = (meetingNumber, role, userName, userEmail, passWord, registrantToken) => {
    let data = {
        meetingNumber: meetingNumber,
        role: role
    }

    return fetch(signatureUrl, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(response => {
        debugger
        startMeeting(response.signature, meetingNumber, userName, userEmail, passWord, registrantToken)
    }).catch(error => {
      console.log(error)
    })
}

const startMeeting = (signature, meetingNumber, userName, userEmail, passWord, registrantToken) => {
    let meetingSDKElement = document.getElementById('meetingSDKElement');
    debugger
    const apiKey = 'QPSsutvqQZCO_K205pUfKQ';
    let client = ZoomMtgEmbedded.createClient();

  client.init({
    debug: true,
    zoomAppRoot: meetingSDKElement,
    language: 'en-US',
    customize: {
      meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
      toolbar: {
        buttons: [
          {
            text: 'Custom Button',
            className: 'CustomButton',
            onClick: () => {
              console.log('custom button');
            }
          }
        ]
      }
    }
  });

  client.join({
    apiKey: apiKey,
    signature: signature,
    meetingNumber: meetingNumber,
    password: passWord,
    userName: userName,
    userEmail: userEmail,
    tk: registrantToken
  })
}

export {
  postContact, postAppointment,
  getContact, getAppointment,
  deleteContactById, deleteAppointmentById,
  getSignature
}