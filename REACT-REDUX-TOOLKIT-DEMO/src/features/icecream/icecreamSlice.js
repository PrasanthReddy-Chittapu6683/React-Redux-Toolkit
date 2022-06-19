import { createSlice } from '@reduxjs/toolkit'
import { ORDERED as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numOfIceCreams: 20
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
        builder.addCase(cakeOrdered, (state, action) => {
            state.numOfIceCreams -= action.payload
        })
    }
})

export default icecreamSlice.reducer

/** This will takes care of Action Creators, Action Object, Reducer Swith statement and Handling mutable udpates in the state */
export const { ORDERED, RESETSTOCK } = icecreamSlice.actions 
