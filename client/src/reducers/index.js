import { combineReducers } from 'redux';

import auth from './auth';
import doctors from './doctors';

export const reducers = combineReducers({ auth, doctors });