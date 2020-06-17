import {userName} from './signinreducer'

import { combineReducers } from "redux";

const storeCombineReducers = combineReducers({userName:userName});

export default storeCombineReducers;