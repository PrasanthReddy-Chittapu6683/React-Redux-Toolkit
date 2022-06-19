import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}

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

export default cakeSlice.reducer

/** This will takes care of Action Creators, Action Object, Reducer Swith statement and Handling mutable udpates in the state */
export const { ORDERED, RESETSTOCK } = cakeSlice.actions 