import axios from 'axios';
import { GET_CHAMPIONS, ADD_CHAMPIONS, DELETE_CHAMPIONS, CHAMPIONS_LOADING} from '../actions/types';

export const getChampions = () => dispatch => {
    dispatch(setChampionsLoading());
    axios
        .get('/api/champions')
        .then(res => 
            dispatch({
                type: GET_CHAMPIONS,
                payload: res.data
            })
            );
};

export const deleteChampions = (id) => dispatch => {
    axios.delete(`/api/champions/${id}`.then(res =>
        dispatch({type: DELETE_CHAMPIONS, payload: id})
        ));
};

export const addChampions = (champion) => dispatch => {
    axios
        .post('/api/champions', champion)
        .then(res => 
            dispatch({
                type: ADD_CHAMPIONS,
                payload: res.data
            })
            );
    
    return {
        type: ADD_CHAMPIONS,
        payload: champion
    };
};

export const setChampionsLoading = () => {
    return {
        type: CHAMPIONS_LOADING
    }
}

