import { SET_AUTH_USER } from '../Actions/types'

export default (state = null, action) => {
    switch(action.type) {
        case SET_AUTH_USER:
            return action.id
        default:
            return state
    }
}