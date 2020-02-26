import { SEARCH_USERS, GET_REPOS, GET_USER, SET_LOADING, CLEAR_USERS } from '../types'

const handlers = {
    [GET_REPOS]: (state, action) => ({
        ...state,
        repos: action.payload,
        loading: false,
    }),
    [SEARCH_USERS]: (state, action) => ({
        ...state,
        users: action.payload,
        loading: false,
    }),
    [GET_USER]: (state, action) => ({
        ...state,
        user: action.payload,
        loading: false,
    }),
    [SET_LOADING]: (state, action) => ({
        ...state,
        loading: true,
    }),
    [CLEAR_USERS]: (state, action) => ({
        ...state,
        users: [],
    }),
    DEFAULT: state => state,
}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
