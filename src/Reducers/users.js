import { RECEIVE_USERS } from '../Actions/users'
import { ADD_POLL } from '../Actions/polls'

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_POLL:
            const poll = action.poll
            const { author, id } = poll
            return {
                ...state,
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat([id])
                }
            }
        default:
            return state
    }
}