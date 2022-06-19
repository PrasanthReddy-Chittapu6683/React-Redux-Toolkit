const redux = require('redux')
const produce = require('Immer').produce;

const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'
const GET_STREET_DETAILS = 'GET_STREET_DETAILS'
const updateStreet = street => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const getStreetDetails = () => {
    return {
        type: GET_STREET_DETAILS
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        case GET_STREET_DETAILS:
            return state.address.street

        default: {
            return state
        }
    }
}


const store = redux.createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})
store.dispatch(updateStreet('Phase 2 RR Nagar'))
store.dispatch(getStreetDetails());