import {combineReducers} from 'redux';
import experimentalState from './experimentalReducer';

export default combineReducers({
  experimentalState: experimentalState,
});
