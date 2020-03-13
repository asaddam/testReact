import { INPUT_ALAMAT,
    LOADING_ALAMAT,
    ADD_ALAMAT_SUCCESS,
    ADD_ALAMAT_FAIL,
    ADD_ALAMAT  
} from '../actions/types';

const INITIAL_STATE = {
    listAlamat: []
}



export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ALAMAT :
            return { listAlamat: action.payload }
        case ADD_ALAMAT_SUCCESS :
            return INITIAL_STATE
        default :
            return state      
    }
}