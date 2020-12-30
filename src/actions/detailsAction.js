import axios from 'axios';

import {
    DETAILS_FAILED,
    DETAILS_REQUEST,
    DETAILS_SUCCESS
} from '../constants/detailsConstants';

export const detailsOutput =() => async(dispatch) =>  {

    try{
        dispatch({type:DETAILS_REQUEST})




        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }

        const {data} = await axios.get('https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&',config);

        dispatch({
            type:DETAILS_SUCCESS,
            payload:data
        })

     


    }catch (error) {
        dispatch({
            type:DETAILS_FAILED,
            payload:error
        })
    }
}