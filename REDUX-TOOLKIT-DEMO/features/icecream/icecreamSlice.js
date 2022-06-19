const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice')
const initialState = {
    numOfIceCreams: 10
}

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

module.exports = icecreamSlice.reducer

/** This will takes care of Action Creators, Action Object, Reducer Swith statement and Handling mutable udpates in the state */
module.exports.icecreamActions = icecreamSlice.actions 
