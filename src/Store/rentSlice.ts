import {  createSlice } from "@reduxjs/toolkit";
import ListOfBrands from "../Data/brands";
import ListOfCars from "../Data/carsList";


// const location ={
//     address:"5,mufutau shobola",
//     meters:'50'
// }

// const features = [
//     {
//         Icon:Search,
//         featureValue:'auto contact ',
//         optFeature:null
//     },
//     {
//         Icon:Search,
//         featureValue:'auto contact',
//         optFeature:null
//     },
//     {
//         Icon:Search,
//         featureValue:'auto contact ',
//         optFeature:null
//     },
//     {
//         Icon:Search,
//         featureValue:'auto contact ',
//         optFeature:null
//     },
// ]


export const RentSlice = createSlice({
    name:"Rent-Data",
    initialState:{
        Brands:ListOfBrands,
        Cars:ListOfCars
    },
    reducers:{
       
    }
});
export default RentSlice.reducer;
export const {} = RentSlice.actions;