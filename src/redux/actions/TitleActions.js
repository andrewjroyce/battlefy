import {SET_TITLE} from './types'
    
export const setTitle = (text) => {
    return {
        type: SET_TITLE,
        payload: text
    }
}
