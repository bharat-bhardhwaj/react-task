import {
    DETAILS_FAILED,
    DETAILS_REQUEST,
    DETAILS_SUCCESS
} from '../constants/detailsConstants';

export const DetailsReducer = (state={},action) => {
    switch(action.type){
        case DETAILS_REQUEST:
            return {Loading:true,details:[]}
        case DETAILS_SUCCESS:
            return {loading:false,details:action.payload}

        case DETAILS_FAILED:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}