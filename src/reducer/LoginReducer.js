import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS
} from '../constants/loginConstants';

export const loginReducer = (state={},action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {Loading:true,LoginDetails:[]}
        case LOGIN_SUCCESS:
            return {loading:false,Logindetails:action.payload}

        case LOGIN_FAILED:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}