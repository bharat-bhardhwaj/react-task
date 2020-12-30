import React, { useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { Form, Button,} from 'react-bootstrap'
import {registerResults} from '../actions/Registeraction';
import OtpScreen from './OtpScreen'
function LoginScreen(props) {

    const dispatch = useDispatch();

  
    const Register = useSelector((state) => state.registerReducer)
    const {results} = Register
    

    
  
    const [Phoneno,setPhoneno] = useState('');
    const [dial,setDial] = useState('');



    const submitHandler = (e) =>{
        e.preventDefault()
        const ans ={
            phone:Phoneno,
            dial_code:dial
            
        }

        
        dispatch(registerResults(ans))

        



    }

  return (
    <div>

    <div id='container'></div>


    {results?.status !='Success' ? (

<Form onSubmit={submitHandler}>

<Form.Group controlId='Phoneno'>
  <Form.Label>Enter dial</Form.Label>
  <Form.Control
    type=''
    placeholder='Enter dial code'
    value={dial}
    onChange={(e) => setDial(e.target.value)}
  ></Form.Control>
</Form.Group>

<Form.Group controlId='Phoneno'>
  <Form.Label>Enter phone no</Form.Label>
  <Form.Control
    type='Number'
    placeholder='Enter Phone'
    value={Phoneno}
    onChange={(e) => setPhoneno(e.target.value)}
  ></Form.Control>
</Form.Group>

<Button type='submit' variant='primary'>
  Signin
</Button>
</Form>
    )

:(
   <div>
    <OtpScreen phone={Phoneno} dial={dial} />
   </div>
)}
     
          
    
     
    </div>
  )
}

export default LoginScreen
