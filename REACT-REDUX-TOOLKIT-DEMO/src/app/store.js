import { configureStore } from '@reduxjs/toolkit'
// import { reducLogger } from 'redux-logger'


// const logger = reducLogger.createLogger()

import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/users/usersSlice';

const store = configureStore({
    reducer: {
        cakeReduce: cakeReducer,
        iceCreamReduce: iceCreamReducer,
        userReduce: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

export default store;