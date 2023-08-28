import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:"Auth",
    initialState:{
        isUserLoggedIn:false,
        username:'',
    },
    reducers:{
        setUserLoggedin(state,action:PayloadAction<{isUserLoggedIn:boolean,username:string}>){
            console.log('inside reducer');
            console.log(action);
            state.isUserLoggedIn = action.payload.isUserLoggedIn ;
            state.username = action.payload.username ;
        }
    }
});

export default AuthSlice.reducer;
export const {setUserLoggedin} = AuthSlice.actions;