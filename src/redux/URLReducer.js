 import {SET_URL} from './actions/types';

export default function URLReducer(state = "", action) {
  switch (action.type) {
    case "SET_QUESTION_DOCS_URL":
      return action.payload
    default:
      return state
  }
}