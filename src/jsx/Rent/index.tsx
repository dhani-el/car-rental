import { SearchComponent, Brands,Cars} from "./component"
import audi from '../../assets/carLogo/audi.png';
import maserati from '../../assets/carLogo/maserati.png';
import porsche1 from '../../assets/carLogo/porsche1.png';
import nissan from '../../assets/carLogo/nissan.png';
import miniCooper from '../../assets/carLogo/miniCooper.png';
import mercedesBenz1 from '../../assets/carLogo/mercedesBenz1.png';
import mcLaren from '../../assets/carLogo/mcLaren.png';
import lexus from '../../assets/carLogo/lexus.png';
import lamborghini from '../../assets/carLogo/lamborghini.png';
import jaguar from '../../assets/carLogo/jaguar.png';
import gmc from '../../assets/carLogo/gmc.png';
import ford from '../../assets/carLogo/ford.png';
import ferrari from '../../assets/carLogo/ferrari.png';
import dodge from '../../assets/carLogo/dodge.png';
import chevrolet from '../../assets/carLogo/chevrolet.png';
import cadillac from '../../assets/carLogo/cadillac.png';
import bugatti from '../../assets/carLogo/bugatti.png';
import bently from '../../assets/carLogo/bently.png';
import astonMartin from '../../assets/carLogo/astonMartin.png';

import FirstCar from '/imageOne.png'

const ListOfCars = [{img:audi,name:"Audi"},{img:astonMartin,name:"Aston Martin"},{img:bently,name:"Bently"},{img:bugatti,name:"Bugatti"},{img:cadillac,name:"Cadillac"},
{img:chevrolet,name:"Chevrolet"},{img:dodge,name:"Dodge"},{img:porsche1,name:"Porsche"},{img:ford,name:"Ford"},{img:gmc,name:"Gmc"},
{img:jaguar,name:"Jaguar"},{img:lamborghini,name:"Lamborghini"},{img:lexus,name:"Lexus"},{img:mcLaren,name:"McLaren"},{img:mercedesBenz1,name:"Mercedes Benz"},{img:miniCooper,name:"Mini Cooper"},{img:nissan,name:"Nissan"},{img:ferrari,name:"Ferrari"},{img:maserati,name:"Maserati"}]

const notActualCar = {
        image:FirstCar,
        title:'Bently ariel',
        year:'2018',
        price :'N50k'
}
export default function Rent():JSX.Element{
    return <div>
                <SearchComponent/>
                <Brands brands={ListOfCars}/>
                <Cars ListOfCars={[notActualCar,notActualCar]} />
        </div>
}