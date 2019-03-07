import { getInitialData } from '../utils/api'
import { receivePolls } from './users'
import { receiveUsers } from './users'
import { setAuthUser } from './authedUser'

const AUTH_ID = 'dan_abramov'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveUsers(users))
                dispatch(receivePolls(polls))
                dispatch(setAuthUser(AUTH_ID))
            })
    }
}