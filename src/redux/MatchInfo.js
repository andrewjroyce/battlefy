import{
  RECIEVE_LAST_MATCH_INFO,
} from './actions/types'
      
export const MatchInfo = (state = {info: ""}, action) => {
  switch (action.type) {
    case RECIEVE_LAST_MATCH_INFO:
      return {info: action.data }
  default:
    return state
  }
}