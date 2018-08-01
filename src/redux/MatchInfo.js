import{
  RECIEVE_LAST_MATCH_INFO,
} from './actions/types'
      
      export const MatchInfo = (state = {info: ""}, action) => {
        console.log(action.data)
      switch (action.type) {
        case RECIEVE_LAST_MATCH_INFO:
          return {info: action.data }
        default:
          return state
      }
    }