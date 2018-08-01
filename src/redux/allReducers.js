import { combineReducers } from 'redux';

import {Title} from './Title';
import {Player} from './Player';
import {LastMatch} from './LastMatch';
import {MatchInfo} from './MatchInfo';


import URLReducer from './URLReducer';


const allReducers =  combineReducers({
  Title,
  URLReducer,
  Player,
  MatchInfo,
  LastMatch
});

export default allReducers

