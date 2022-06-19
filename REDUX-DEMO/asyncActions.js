const redux = require('redux')
const axios = require('axios')
const reduxThunk = require('redux-thunk').default
const reduxLogger = require('redux-logger')



const createAppStore = redux.createStore;

/** Combine Reducer */
const combineReducers = redux.combineReducers
/** REDUX-LOGGER */
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAIL = 'FETCH_USER_FAIL'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFail = (error) => {
    return {
        type: FETCH_USER_FAIL,
        payload: error
    }
}

const reducerFunc = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAIL:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            break;
    }
}

const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map((user) => user.name);
            dispatch(fetchUserSuccess(users))
        }).catch((error) => {
            dispatch(fetchUserFail(error?.message))
        })
    }
}

const store = createAppStore(reducerFunc, applyMiddleWare(reduxThunk, logger));

store.subscribe(() => { })

store.dispatch(fetchUsers())