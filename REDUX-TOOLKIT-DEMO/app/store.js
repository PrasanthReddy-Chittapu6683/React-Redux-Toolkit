const configureStore = require('@reduxjs/toolkit').configureStore
const reducLogger = require('redux-logger')

const logger = reducLogger.createLogger()

const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/users/usersSlice')

const store = configureStore({
    reducer: {
        cakeReduce: cakeReducer,
        iceCreamReduce: iceCreamReducer,
        userReduce: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

module.exports = store;