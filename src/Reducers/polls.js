import { RECEIVE_POLLS } from '../Actions/polls'

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls,
            }
        default:
            return state
    }
}