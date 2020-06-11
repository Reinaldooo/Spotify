import { combineReducers } from 'redux'

import authReducer from './auth';
import contentReducer from './content';

const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
})

export default rootReducer;
