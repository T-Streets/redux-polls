import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { setAuthUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTH_ID = 'dan_abramov'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveUsers(users))
                dispatch(receivePolls(polls))
                dispatch(setAuthUser(AUTH_ID))
                dispatch(hideLoading())
            })
    }
}