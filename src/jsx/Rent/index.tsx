import {useState,useEffect} from 'react'
import { SearchComponent, Brands,Cars} from "./component";
import { useAppSelector } from "../../Store/store";


export default function Rent():JSX.Element{
        const [brand,setBrand] = useState('Audi');
        const Brandss = useAppSelector(state => state.CarData.Brands);
        const Carss = useAppSelector(state => state.CarData.Cars);
        useEffect(function(){
                console.log(`the current brand is :${brand}`);
                
        })
    return <div>
                <SearchComponent/>
                <Brands brands={Brandss} handleBrandChange={setBrand}/>
                <Cars ListOfCars={Carss[brand].data} />
        </div>

}