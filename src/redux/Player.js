import{
  RECEIVE_ITEMS,
} from './actions/types'
      
export const Player = (state = {player: ""}, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {player: action.data }
    default:
      return state
  }
}