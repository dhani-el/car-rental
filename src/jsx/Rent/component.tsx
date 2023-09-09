import {useState} from 'react';
import { TextField, Card } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import 'swiper/css'
import '../../Styles/Rent/component.css';

Axios.defaults


type searchType = {
    handleClickFunction: Function
}

type brandType  = {
    handleBrandChange: React.Dispatch<React.SetStateAction<string>>
}

type brand  = {
    _id: string,
    brand:string,
    name: string,
    image: string,
    year: number,
    price: string,
    __v: number
}
export function SearchComponent():JSX.Element{
    const [openSearchBar, setOpenSearchBar] = useState(false);

    function handleToggleSearchBar():void{
        console.log("toggle clicked", openSearchBar);
        
        setOpenSearchBar((initial)=> !initial)
    }
    return   <div id="searchComponentContainer" >
                <Card id = "searchComponentCard"  >
                   {!openSearchBar && <div id="searchComponentTextContainer" onClick={()=>{setOpenSearchBar(true)}} ><span id="searchComponentTextH2" >Choose</span><p id="searchComponentTextP"> a Car</p></div>}
                    {!openSearchBar && <Search onClick = {handleToggleSearchBar} /> }
                    {openSearchBar && <SearchBar handleClickFunction = {handleToggleSearchBar}/>}
                </Card>
            </div>
}

function SearchBar({handleClickFunction}:searchType):JSX.Element{
    return <div id="searchBar">
                <TextField placeholder='Car brand' /> 
                <Close onClick = {()=>handleClickFunction()} />
    </div>
}

export function Brands({handleBrandChange}:brandType):JSX.Element{
const isLandscape = useMediaQuery({query:'(orientation:landscape)'});
    const {data} = useQuery({
        queryKey:["brandsQuery"],
        queryFn: ()=> Axios.get("/data/api/brands").then(function(response){return response})
    })
console.log(isLandscape);
console.log('confirm the brand data below');
console.log(data?.data);


    return <div id='brandsContainer'>
        <div id='brandsSwiperContainer'>
            <Swiper spaceBetween={10} slidesPerView={isLandscape? 8 : 4} id='slideR' >
                <SwiperSlide><AllBrands  handleClick = {()=>handleBrandChange('all')} /></SwiperSlide>
               {data?.data.map((brandImage:{name:string,logo:string}) => <SwiperSlide key={brandImage?.name} ><Abrand image = {brandImage?.logo} handleClick = {()=>handleBrandChange(brandImage?.name)} /></SwiperSlide>)}
            </Swiper>
        </div>
    </div>
}

function Abrand({image,handleClick}:any):JSX.Element{
    return <div id = 'abrandDiv' onClick={function(){handleClick(`${image.name}`);
    }} >
        <img src={image} />
    </div>
}

type allBrand = {
    handleClick:Function
}
function AllBrands({handleClick}:allBrand){
    return <div id ="allBrandsComponent" onClick={function(){   handleClick("All")  }}>
        <p>ALL</p>
    </div>
}

export function Cars({brand}:any):JSX.Element{
    const {data} = useQuery({
        queryKey:["carData"],
        queryFn : ()=>  Axios.get(`data/api/cars/${brand}`, { withCredentials:true})
                        .then(function(result){ return result})
    });

    return <div id='carsContainer'>
                <h3  style={{color:"black"}} >AVAILABLE CARS</h3>
                {(data?.data.length > 0) ? <div id='listOfCars'>{data?.data.map((single:brand)=><div key={single?._id} id='keyDivs' ><Car car = {single} /></div>)}</div>
                                 : <NoCars brand = {brand} />}
    </div>
}

function Car({car}:any):JSX.Element{
    return <div id='Acar'>
                <Card className='aCarCard' >
                    <div id='firstDiv'>
                        <img src={car.image} /> 
                    <div id='textDiv'>
                            <h3>{car.name}</h3>
                            <p>{car.year}</p>
                        </div>
                    </div>
                    <div id='secondDiv' >
                    <span id='priceSpan'>
                        <p id='price' >{car.price}</p><p >/day</p>
                    </span>
                    <Link to={`/rent/${car.brand}?model=${car.name}`}><span id='detailsSpan'>
                       DETAILS
                    </span></Link>
                    </div>
                </Card>
    </div>
}


function NoCars({brand}:any){
    return <div id='noCarsDiv'>

              {brand === "all" ? <h2>{`No cars available currently`} </h2> :<h2>{`No ${brand} cars available currently`} </h2>}
            </div>
}