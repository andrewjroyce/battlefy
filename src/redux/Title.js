import{
    SET_TITLE,
} from './actions/types'
    
export const Title = (state = {title: "-"}, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {title: action.payload }
    default:
      return state
  }
}