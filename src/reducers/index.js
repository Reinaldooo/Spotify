import { combineReducers } from 'redux'

import authReducer from './auth';
import contentReducer from './content';
import userReducer from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
  user: userReducer,
})

export default rootReducer;
