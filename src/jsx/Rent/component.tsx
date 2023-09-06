import {useState} from 'react';
import { TextField, Card } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'swiper/css'
import '../../Styles/Rent/component.css';

axios.defaults


type searchType = {
    handleClickFunction: Function
}

type brandType  = {
    handleBrandChange: React.Dispatch<React.SetStateAction<string>>
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
const brandData  = useQuery({
    queryKey : ["brands"],
    queryFn : async function(){
        return axios.get("/brands",{
            withCredentials:true,
        })
        .then(function(response){ return response})
        .catch(function(error){console.log(error)})
    }
});
const confirmNature = [brandData?.data];
console.log(isLandscape);


    return <div id='brandsContainer'>
        <div id='brandsSwiperContainer'>
            <Swiper spaceBetween={10} slidesPerView={isLandscape? 8 : 4} id='slideR' >
                <SwiperSlide><AllBrands  handleClick = {handleBrandChange} /></SwiperSlide>
                {brandData.isError && <div>an error occured</div>}
                {brandData.isFetched && confirmNature.map(brandImage => <SwiperSlide key={brandImage?.data.name} ><Abrand image = {brandImage?.data.imageUrl} handleClick = {handleBrandChange} /></SwiperSlide>)}
            </Swiper>
        </div>
    </div>
}

function Abrand({image,handleClick}:any):JSX.Element{
    return <div id = 'abrandDiv' onClick={function(){handleClick(`${image.name}`);
    }} >
        <img src={image.img} />
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

export function Cars():JSX.Element{
    const data = useQuery({
        queryKey:["carData"],
        queryFn : async function(){
                    return axios.get("/cars/all",{
                        withCredentials:true
                    })
        }
    })
    const convertedData = [data.data]
    return <div id='carsContainer'>
                <h3  style={{color:"black"}} >AVAILABLE CARS</h3>
                <div id='listOfCars'>{convertedData.map((single)=><div key={single?.data.model} id='keyDivs' ><Car car = {single?.data} brand = {single?.data.brand}  /></div>)}</div>
    </div>
}

function Car({car,brand}:any):JSX.Element{
    return <div id='Acar'>
                <Card className='aCarCard' >
                    <div id='firstDiv'>
                        <img src={car.image} /> 
                    <div id='textDiv'>
                            <h3>{car.model}</h3>
                            <p>{car.year}</p>
                        </div>
                    </div>
                    <div id='secondDiv' >
                    <span id='priceSpan'>
                        <p id='price' >{car.price}</p><p >/day</p>
                    </span>
                    <Link to={`/rent/${brand}?model=${car.model}`}><span id='detailsSpan'>
                       DETAILS
                    </span></Link>
                    </div>
                </Card>
    </div>
}