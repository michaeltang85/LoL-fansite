import { combineReducers } from 'redux';
import championReducer from './championReducer';

export  default combineReducers({
    champion: championReducer
}
    
)