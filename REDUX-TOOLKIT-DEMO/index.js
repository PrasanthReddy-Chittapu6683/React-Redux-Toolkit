const store = require('./app/store')
const cakeAction = require('./features/cake/cakeSlice').cakeActions
const iceCreamAction = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/users/usersSlice').fetchUsers

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => { })

store.dispatch(cakeAction.ORDERED(2))
store.dispatch(cakeAction.ORDERED(2))
store.dispatch(cakeAction.ORDERED(2))
store.dispatch(cakeAction.RESETSTOCK(20))


store.dispatch(iceCreamAction.ORDERED(1))
store.dispatch(iceCreamAction.ORDERED(1))
store.dispatch(iceCreamAction.ORDERED(1))
store.dispatch(iceCreamAction.RESETSTOCK(20))
unsubscribe()


// store.dispatch(fetchUsers())