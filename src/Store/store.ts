import { configureStore} from "@reduxjs/toolkit";
import {Slice}  from "./slice";
import { AuthSlice } from "./authReducer";
import { RentSlice } from "./rentSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const Store  = configureStore({
    reducer: {
        pizza : Slice.reducer,
        Authentication: AuthSlice.reducer,
        CarData: RentSlice.reducer
    }
})

export const useAppDispatch:()=>typeof Store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector;