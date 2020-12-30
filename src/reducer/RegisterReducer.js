import {
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../constants/RegisterConstants';

export const registerReducer = (state={},action) => {
    switch(action.type){
        case REGISTER_REQUEST:
            return {Loading:true,results:[]}
        case REGISTER_SUCCESS:
            return {loading:false,results:action.payload}

        case REGISTER_FAILED:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}