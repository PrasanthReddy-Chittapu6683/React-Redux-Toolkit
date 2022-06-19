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