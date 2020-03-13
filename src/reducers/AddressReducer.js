import { INPUT_ALAMAT,
    LOADING_ALAMAT,
    ADD_ALAMAT_SUCCESS,
    ADD_ALAMAT_FAIL,
    ADD_ALAMAT  
} from '../actions/types';

const INITIAL_STATE = {
    jenisAlamat: '',
    namaPenerima: '',
    alamat: '',
    RT: '',
    RW: '',
    kotaKecamatan: '',
    kodePos: '',
    noPonsel: '',
    loading: false,
    error: '',
}


export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_ALAMAT :
            return { ...state, [action.payload.prop]: action.payload.value }
        case ADD_ALAMAT :
            return { listAlamat: state}
        case ADD_ALAMAT_FAIL :
            return { ...state, loading: false, error: action.payload }
        case LOADING_ALAMAT :
            return { ...state, loading: true, error: '' }
        case ADD_ALAMAT_SUCCESS :
            return INITIAL_STATE
        default :
            return state      
    }
}