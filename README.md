#  Redux Toolkit (feat. React)
React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.


# What is Redux?

` Redux is predictable state container for Javascript apps`
-   It is for Javascript apps
    -   Redux is not tied for React. Its commonly used with React, Angular, Vue or even vanilla Javascript.
    -   Redux is a library for Javascript applications.
-   It is a State container
    -   Redux store the state of your application.
-   It is Predictable
    -   The state of the application can change.
    -   In Redux, a pattern is enforced to ensure all state transitions are explict and can be tracked.
    -   The changes to your application's state become predictable

# Why Redux?

-   If you want to manage te global state of your application in a predictable way, redux can help you.
-   The pattern and tools provided by Redux make it easier to understand when, where, where and how the state in your application is being updated, and how your application logic will behave hen those changes occur. 
-   Redux guides you towards wirting code that is predictable and testable, which helps give you confidentce that your application will work as expected.

# What is Redux Toolkit?
-   Redux toolkit is the official, opinionated, batteries-included toolset fr efficient Redux development.
-   It is intended to be the standard way to write Redux logic in your application.

# Why Redux Toolkit?
-   Redux is great, but it does have a few shortcomings.
    -   Confiuring redix in an app seems complicated.
    -   In addition to redux, a lot of other packages have to be installed to get redux to do something useful.
    -   Redux requires too much bolerplate code.
-   Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experinece.

# 3 Core concepts in Redux
1.  STORE:
    - It holds the state of your application. 
2.  ACTION:
    - It describes what happened in the application. 
3.  REDUCER
    - It handles the action and decides how to update the state.  

# 3 Principles in Redux
1.  The Global state of your application is stored as an object inside a single store.
    -   Maintain our application state in a single object which whould be managed by Redux store.
2.  The only way to change the state is to `dispatch an action`, an object that describes what happened.
    -   To update the state of your app, you need to let REDUX know about that action 
    -   Not allowed to directly update the state object.
3.  To specify how the state tree is udpated based on actions, you write pure REDUCERS.
    -   REDUCER : (prevState, action)   =>  newState


# ACTIONS
-   The only way your application can interact with the store.
-   Carry some information form your app to the redux store
-   Plain Javascript objects
-   Have a `type` property that describes something that happened in the application.
-   The `type` property is typically define as a `string` constants.

```javascript
    const CAKE_ORDERED = 'CKAE_ORDERED'

    /** orderCake is a ACTION creator is a function that returns object */
    function orderCake() {
        return {
            type: CAKE_ORDERED,
            quantity: 1
        }
    }
```
# REDUCER
-   Specify how the app's state changes in response to actions sent to the store.
-   Function that accpets state and action as arguments, and return new state of the application.
    -   (prevState, action)   =>  newState

```javascript
    const initialState = {
        numOfCakes: 10
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case CAKE_ORDERED:
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1,
                }
            default:
                return state
        }
    }

```

# STORE
-   One store for entire application.
-   Holds application state
-   Allows access to state via `getState()`
-   Allows state to be udated via `dispatch(action)`
-   Registers listerners via `subscribe(listener)` 
-   Handles unregistering of listeners via the fuction returned by `subscribe(listener)`

1.  Imprort `redux` and crete Application store using `createStore`
```javascript
    const redux = require('redux')
    const createAppStore = redux.createStore
```
2.  Access `getState`, `subscribe` & `dispatch` from application store
```javascript
    const store = createAppStore(myAppreducer)

    console.log(`initial state :: `, store.getState())

    const unsubscribe = store.subscribe(() => console.log(`update the state::: `, store.getState()))

    store.dispatch(orderCake())
    store.dispatch(orderCake())
    store.dispatch(orderCake())
    store.dispatch(orderCake())
    store.dispatch(orderCake())
    store.dispatch(orderCake())
    store.dispatch(orderCake())

    unsubscribe()
```
3.  Output >
```javascript 
    initial state ::  { numOfCakes: 10 }
    updated the state:::  { numOfCakes: 9 }
    updated the state:::  { numOfCakes: 8 }
    updated the state:::  { numOfCakes: 7 }
    updated the state:::  { numOfCakes: 6 }
    updated the state:::  { numOfCakes: 5 }
    updated the state:::  { numOfCakes: 4 }
    updated the state:::  { numOfCakes: 3 }
    updated the state:::  { numOfCakes: 2 } 
```

4.  Overall Redux code

```javascript
    /** STORE - START (STEP-3)*/

    const redux = require('redux')

    const createAppStore = redux.createStore

    /** STORE - END*/

    /** ACTIONS - START (STEP-1)*/

    const CAKE_ORDERED = 'CKAE_ORDERED'

    //ACTION creator is a function that returns object 
    const orderCake_Action = () => {
        return {
            type: CAKE_ORDERED,
            quantity: 1
        }
    }

    /** ACTIONS - END*/


    /** REDUCER - START (STEP-2)*/
    const initialState = {
        numOfCakes: 10
    }

    const myAppreducer = (state = initialState, action) => {
        switch (action.type) {
            case CAKE_ORDERED:
                return {
                    ...state,
                    numOfCakes: state.numOfCakes <= 0 ? 0 : state.numOfCakes - 1,
                }
            default:
                return state
        }
    }
    /** REDUCER - END*/

    /** STORE - START (STEP-4)*/

    // Its holding the Appliction state
    const store = createAppStore(myAppreducer)

    console.log(`initial state :: `, store.getState())


    const unsubscribe = store.subscribe(() => console.log(`updated the state::: `, store.getState()))

    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())
    store.dispatch(orderCake_Action())


    unsubscribe()

    /** STORE - END*/
```


#  Bind Action Creators

-   STEP-1:
`const bindActionCreators = redux.bindActionCreators;`

-   STEP-2:
```javascript
    const actions = bindActionCreators({ orderCake_Action, resetCake_Action }, store.dispatch)

    actions.orderCake_Action()
    actions.orderCake_Action()
    actions.orderCake_Action()
    actions.orderCake_Action()
    actions.resetCake_Action(10)
```

# Combine Reducers

```javascript
    /** Combine Reducer */
    const combineReducers = redux.combineReducers;

    const rootReducer = combineReducers({
        cakeReduce: cakeReducer,
        iceCreamReduce: iceCreamReducer
    })
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
```

# Middleware

-   Used to extend REDUX with custom functinality
-   Provides a third-party extension point between dispatching an `action`, and the moment it reaches the `reducer`
-   Use middleware of logging, crash reporting, performing async task etc..

```javascript
    const applyMiddleWare = redux.applyMiddleware
    const reduxLogger = require('redux-logger')
    const logger = reduxLogger.createLogger()

    const store = createAppStore(rootReducer, applyMiddleWare(logger))

    const unsubscribe = store.subscribe(() => { }) // Removing log statement because we are using REDUX-Logger

```


# Async Actions
-   Async API calls to fetch data from an end point and use that data in your application.

```javascript
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
```


#   Redux Toolkit Intro

### Redux (Old)
*   Redux requires too much boilerplate code
    *   Actions
    *   Action Object
    *   Action Creator
    *   Switch statement in a reducer
*   A lot of other packages have to be installed to work with `REDUX`   
    *   Redux-thunk
    *   Immer
    *   Redux-devtools

### Redux Toolkit
*   Redux toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.
    *   Abstract over the setup process
    *   Handle the most common use cases
    *   Include some useful utilities

-   STEP - 1: Import `createSlice` from `@reduxjs/toolkit`
```javascript
    const createSlice = require('@reduxjs/toolkit').createSlice;
```

-   STEP - 2: create `initialState`
```javascript
    const initialState = {
        numOfCakes: 10
    }
```

-   STEP - 3: create `createSlice` function (this is same as our Reducer function with Switch statement)
```javascript
   const cakeSlice = createSlice({
        name: 'cake_Slice',
        initialState: initialState,
        reducers: {
            /** 1.  Instead of writing switch case, use functions directly
             *  2.  Not required to define any action creators like const CAKE_ORDERED = 'CKAE_ORDERED' const CAKE_RESET = 'CAKE_RESET'.
             *      Redux-Toolkit directly cosider function names as action creators like ORDERED,RESETSTOCK
             */
            ORDERED: (state, action) => {
                state.numOfCakes -= action.payload
            },
            RESETSTOCK: (state, action) => {
                state.numOfCakes += action.payload
            }
        }
    })
```
-   STEP - 4: Export  `reduce` & `actions` from `createSlice` function
```javascript
   module.exports = cakeSlice.reducer
    /** This will takes care of Action Creators, Action Object, Reducer Swith statement and Handling mutable udpates in the state */
    module.exports.cakeActions = cakeSlice.actions 
```

-   STEP - 5: In `store.js` import `configureStore` & `redux-logger` from `@reduxjs/toolkit`
```javascript
    const configureStore = require('@reduxjs/toolkit').configureStore
    const reducLogger = require('redux-logger')

    const logger = reducLogger.createLogger()
```
-   STEP - 5: Import  `reducer` from `cakeSlice` (in STEP - 4:`module.exports = cakeSlice.reducer`)
```javascript
    const cakeReducer = require('../features/cake/cakeSlice')
```
-   STEP - 5: Now configure store using `configureStore` & Export the `store`
    -   No need to use `combineReducer` because `configureStore` will take care under hood
```javascript
    const store = configureStore({
        reducer: {
            cakeReduce: cakeReducer
        },
         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    })
    module.exports = store;
```

-   STEP - 6: Import `store` & `cakeActions` in `index.js`
```javascript
    const store = require('./app/store')
    const cakeAction = require('./features/cake/cakeSlice').cakeActions
```
-   STEP - 7: `Subscribe` the store
```javascript
    const unsubscribe = store.subscribe(() => { })
```
-   STEP - 8: `dispatch` the actions using cakeActions
```javascript
    store.dispatch(cakeAction.ORDERED(2))
    store.dispatch(cakeAction.ORDERED(2))
    store.dispatch(cakeAction.ORDERED(2))
    store.dispatch(cakeAction.RESETSTOCK(20))

    unsubscribe()
```

-   OUTPUT::
```javascript
    Initial State {
        cakeReduce: { numOfCakes: 10 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action cake_Slice/ORDERED @ 06:00:50.213
    prev state {
        cakeReduce: { numOfCakes: 10 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action     { type: 'cake_Slice/ORDERED', payload: 2 }
    next state {
        cakeReduce: { numOfCakes: 8 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action cake_Slice/ORDERED @ 06:00:50.217
    prev state {
        cakeReduce: { numOfCakes: 8 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action     { type: 'cake_Slice/ORDERED', payload: 2 }
    next state {
        cakeReduce: { numOfCakes: 6 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action cake_Slice/ORDERED @ 06:00:50.221
    prev state {
        cakeReduce: { numOfCakes: 6 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action     { type: 'cake_Slice/ORDERED', payload: 2 }
    next state {
        cakeReduce: { numOfCakes: 4 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action cake_Slice/RESETSTOCK @ 06:00:50.224
    prev state {
        cakeReduce: { numOfCakes: 4 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
    action     { type: 'cake_Slice/RESETSTOCK', payload: 20 }
    next state {
        cakeReduce: { numOfCakes: 24 },
        iceCreamReduce: { numOfIceCreams: 10 }
    }
```

#   Extra Reducers

```javascript
    const icecreamSlice = createSlice({
        name: 'iceCream_Slice',
        initialState: initialState,
        reducers: {
            /** 1.  Instead of writing switch case, use functions directly
             *  2.  Not required to define any action creators like const CAKE_ORDERED = 'CKAE_ORDERED' const CAKE_RESET = 'CAKE_RESET'.
             *      Redux-Toolkit directly cosider function names as action creators like ORDERED,RESETSTOCK
             */
            ORDERED: (state, action) => {
                state.numOfIceCreams -= action.payload
            },
            RESETSTOCK: (state, action) => {
                state.numOfIceCreams += action.payload
            }
        },
        // extraReducers: {
        //     ['cake_Slice/ORDERED']: (state, action) => {
        //         state.numOfIceCreams -= action.payload
        //     }
        // },
        extraReducers: (builder) => { // Recommended Approach
            builder.addCase(cakeActions.ORDERED, (state, action) => {
                state.numOfIceCreams -= action.payload
            })
        }
    })
```

#   Async Thunks


```javascript
    const createSlice = require('@reduxjs/toolkit').createSlice
    const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
    const axios = require('axios')

    const initialState = {
        loading: false,
        users: [],
        error: ''
    }

    /** createAsyncThunk will generate pending, fulfilled & rejected promise action types */
    const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data.map((user) => user.name)
            )
    })


    const userSlice = createSlice({
        name: 'user_Slice',
        initialState: initialState,
        extraReducers: (builder) => {
            // fetchUsers.pending :: is same as REQUEST action type before calling an API
            builder.addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = ''
            })
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action?.error?.message
            })
        }
    })

    module.exports = userSlice.reducer
    module.exports.fetchUsers = fetchUsers

```
-   index.js
```javascript
    const fetchUsers = require('./features/users/usersSlice').fetchUsers
    store.dispatch(fetchUsers())
```