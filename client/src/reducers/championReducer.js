import { GET_CHAMPIONS, ADD_CHAMPIONS, DELETE_CHAMPIONS, CHAMPIONS_LOADING} from '../actions/types';



const initialState = {
    champions: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_CHAMPIONS:
            return {
                ...state,
                champions: action.payload,
                loading: false
            }
        case DELETE_CHAMPIONS:
            return {
                ...state,
                champions: state.champions.filter(champion => champion._id !== action.payload)
            }    
        case ADD_CHAMPIONS:
            return {
                ...state,
                champions: [action.payload, ...state.champions]
            };
        case CHAMPIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}