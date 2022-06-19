/** STORE - START (STEP-3)*/
const redux = require('redux');
const createAppStore = redux.createStore;
/** STORE - END*/

/** bindActionCreators  (STEP-5)*/
const bindActionCreators = redux.bindActionCreators;

/** Combine Reducer */
const combineReducers = redux.combineReducers

/** REDUX-LOGGER */
const applyMiddleWare = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


/** ACTIONS - START (STEP-1)*/
const CAKE_ORDERED = 'CKAE_ORDERED'
const CAKE_RESET = 'CAKE_RESET'

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESET = 'ICECREAM_RESET'

//ACTION creator is a function that returns object 
const orderCake_Action = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}
const resetCake_Action = (qty = 1) => {
    return {
        type: CAKE_RESET,
        payload: qty
    }
}

const orderIceCream_Action = () => {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}
const resetIceCream_Action = (qty = 1) => {
    return {
        type: ICECREAM_RESET,
        payload: qty
    }
}
/** ACTIONS - END*/


/** REDUCER - START (STEP-2)*/
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

/** STEP - 7 START */
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes <= 0 ? 0 : state.numOfCakes - action.payload,
            }
        case CAKE_RESET:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }

        default:
            return state
    }
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {

        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams <= 0 ? 0 : state.numOfIceCreams - action.payload,
            }
        case ICECREAM_RESET:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            }
        default:
            return state
    }
}
/** STEP - 7 END */


const myAppreducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes <= 0 ? 0 : state.numOfCakes - action.payload,
            }
        case CAKE_RESET:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams <= 0 ? 0 : state.numOfIceCreams - action.payload,
            }
        case ICECREAM_RESET:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            }
        default:
            return state
    }
}


/** REDUCER - END*/
/** STEP - 7 START */
const rootReducer = combineReducers({
    cakeReduce: cakeReducer,
    iceCreamReduce: iceCreamReducer
})

const store = createAppStore(rootReducer, applyMiddleWare(logger))
/** STEP - 7 END */

/** STORE - START (STEP-4)*/

// Its holding the Appliction state
// const store = createAppStore(myAppreducer) // We are commenting because we are using combineReducer

console.log(`initial state :: `, store.getState())


// const unsubscribe = store.subscribe(() => console.log(`updated the state::: `, store.getState()))
const unsubscribe = store.subscribe(() => { }) // Removing log statement because we are using REDUX-Logger

// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(orderCake_Action())
// store.dispatch(resetCake_Action(10))
// store.dispatch(orderCake_Action())

/** (STEP-6) START*/
const actions = bindActionCreators({ orderCake_Action, resetCake_Action, orderIceCream_Action, resetIceCream_Action }, store.dispatch)
actions.orderCake_Action()
actions.orderCake_Action()
actions.orderCake_Action()
actions.orderCake_Action()
actions.resetCake_Action(10)
actions.orderIceCream_Action()
actions.orderIceCream_Action()
actions.orderIceCream_Action()
actions.resetIceCream_Action(10)
/** (STEP-6) END*/

unsubscribe()
/** STORE - END*/