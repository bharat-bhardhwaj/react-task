import axios from 'axios';

import {
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../constants/RegisterConstants';

export const registerResults =(ans) => async(dispatch) =>  {

    try{
        dispatch({type:REGISTER_REQUEST})

        const {data} = await axios.post('https://staging.fastor.in:8090/v1/pwa/user/register',ans);

        dispatch({
            type:REGISTER_SUCCESS,
            payload:data
        })


    }catch (error) {
        dispatch({
            type:REGISTER_FAILED,
            payload:error
        })
    }
}