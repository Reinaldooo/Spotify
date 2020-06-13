import { combineReducers } from 'redux'

import authReducer from './auth';
import contentReducer from './content';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
  settings: settingsReducer,
})

export default rootReducer;
