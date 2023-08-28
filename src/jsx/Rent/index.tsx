import { SearchComponent, Brands,Cars} from "./component"
import { ListOfCars, notActualCar,notActualCar1 } from "../../utils/data"
export default function Rent():JSX.Element{
        
    return <div id="rentContainer">
                <SearchComponent/>
                <Brands brands={ListOfCars}/>
                <Cars ListOfCars={[notActualCar,notActualCar1]} />
        </div>
}