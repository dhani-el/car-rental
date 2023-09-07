import {useQuery} from "@tanstack/react-query";
import axios from "axios"
import { Search } from "@mui/icons-material";
import { CarImage,CarDescription, CarPrice } from "./component";
import {useSearchParams} from 'react-router-dom';

const location ={
    address:"5,Mufutau Shobola, Ogba Lagos,Nigeria",
    meters:'50'
}

const features = [
    {
        Icon:Search,
        featureValue:'auto contact ',
        optFeature:null
    },
    {
        Icon:Search,
        featureValue:'auto contact',
        optFeature:null
    },
    {
        Icon:Search,
        featureValue:'auto contact ',
        optFeature:null
    },
    {
        Icon:Search,
        featureValue:'auto contact ',
        optFeature:null
    },
]

export default function SingleCar():JSX.Element{
    const searchParams = useSearchParams()[0];
    const model = searchParams.get('model');
    const {data} = useQuery({
        queryKey:["singleData"],
        queryFn: async function(){
            return axios.get(`/car/${model}`);
        }
    })
    
    return <div id="singleCarContainer">
            <CarImage image={data?.data.image} logo={data?.data.logo} title={data?.data.model} year={data?.data.year}/>
            <CarDescription  carFeatures={features} location={location}/>
            <CarPrice price="N120k"/>
    </div>
}