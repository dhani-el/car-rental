import { SearchComponent, Brands,Cars} from "./component"
// import { useSearchParams, useParams } from "react-router-dom"
import { ListOfCars, notActualCar,notActualCar1 } from "../../utils/data"
export default function Rent():JSX.Element{
        // const [searchParms, setSearchParma] = useSearchParams();
        // const {brand} = useParams()
        // console.log(searchParms.get('model'),brand);
        
    return <div>
                <SearchComponent/>
                <Brands brands={ListOfCars}/>
                <Cars ListOfCars={[notActualCar,notActualCar1]} />
        </div>
}