import axios from 'axios';

import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS
} from '../constants/loginConstants';

export const LoginOutput =(ans) => async(dispatch) =>  {

    try{
        dispatch({type:LOGIN_REQUEST})

        const {data} = await axios.post('https://staging.fastor.in:8090/v1/pwa/user/login',ans);

        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })

        if(data.status == 'Success'){
            localStorage.setItem('token',data.data.token)
        }

        // localStorage.setItem('token',data)


    }catch (error) {
        dispatch({
            type:LOGIN_FAILED,
            payload:error
        })
    }
}