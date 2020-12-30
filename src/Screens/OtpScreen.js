import React, { useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { Form, Button} from 'react-bootstrap'
import {LoginOutput} from '../actions/loginaction';
import {detailsOutput} from '../actions/detailsAction';
import DetailsScreen from './DetailsScreen';


function OtpScreen(props) {

    const dispatch = useDispatch();
    

    const [otp,setOtp] = useState('');

    const login = useSelector((state) => state.loginReducer)
    const {Logindetails} = login

    const submitHandler =(e) => {

        e.preventDefault()

        const ans ={
            phone: props.phone,
            otp : otp,
            dial_code:props.dial
        }

        dispatch(LoginOutput(ans));

        if(localStorage.getItem('token')){
            dispatch(detailsOutput())
        }

        
    }
    
  
    

  return (
    
    <div>

        {Logindetails?.status !='Success' ? (

            <div>
                  <Form onSubmit ={submitHandler}>
   <Form.Group controlId='Otp'>
  <Form.Label>Enter OTP</Form.Label>
  <Form.Control
    type='Number'
    placeholder='Enter OTP'
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
  ></Form.Control>
</Form.Group>

<Button type='submit' variant='primary'>
  confirm otp
</Button>
   </Form>
            </div>
        ) : (
            <div>
                <DetailsScreen/>
            </div>
        )}

 
                
  </div>

  )
}

OtpScreen.propTypes = {}

export default OtpScreen
