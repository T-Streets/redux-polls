import RECEIVE_POLLS from './types'

export const receivePolls = polls => ({
        type: RECEIVE_POLLS,
        polls
})