import{
  RECIEVE_LAST_MATCH,
} from './actions/types'
      
export const LastMatch = (state = {last: ""}, action) => {
  switch (action.type) {
    case RECIEVE_LAST_MATCH:
      return {last: action.data }
    default:
      return state
  }
}