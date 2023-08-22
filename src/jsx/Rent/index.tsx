import { SearchComponent, Brands } from "./component"
import carLogo from '/carLogo/audi.png';



export default function Rent():JSX.Element{
    return <div>
                <SearchComponent/>
                <Brands brands={[carLogo,]}/>
        </div>
}