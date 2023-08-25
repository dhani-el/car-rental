import {useState} from 'react'
import { SearchComponent, Brands,Cars} from "./component";
import { ListOfCars, notActualCar,notActualCar1 } from "../../utils/data"
import { useAppSelector } from "../../Store/store";


export default function Rent():JSX.Element{
        const [brand,setBrand] = useState('audi');
        const Brandss = useAppSelector(state => state.CarData.Brands);
        const Carss = useAppSelector(state => state.CarData.Cars);
    return <div>
                <SearchComponent/>
                <Brands brands={Brandss}/>
                <Cars ListOfCars={Carss.(`${brand}`).data} />
        </div>

}