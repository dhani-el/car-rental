import {useState,useEffect} from 'react'
import { SearchComponent, Brands,Cars} from "./component";

export default function Rent():JSX.Element{
        const [brand,setBrand] = useState('all');
        useEffect(function(){
                console.log(`the current brand is :${brand}`);
                
        })
    return <div id='rentContainer'>
                <SearchComponent/>
                <Brands  handleBrandChange={setBrand}/>
                <Cars brand = {brand} />
        </div>

}