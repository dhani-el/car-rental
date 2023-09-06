import {  createSlice } from "@reduxjs/toolkit"

  export const Slice = createSlice({
    name: 'Opizza',
    initialState:{value: 74},
    reducers:{
        incremented: state => {state.value +=1},
    },

});
export default Slice.reducer
export const {incremented} = Slice.actions
