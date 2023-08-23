import {useState} from 'react';
import { TextField, Card } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css'
import '../../Styles/Rent/component.css';


type searchType = {
    handleClickFunction: Function
}

type brandType  = {
    brands : any[]
}

type carsType = {
    ListOfCars : any[]
}

export function SearchComponent():JSX.Element{
    const [openSearchBar, setOpenSearchBar] = useState(false);

    function handleToggleSearchBar():void{
        console.log("toggle clicked", openSearchBar);
        
        setOpenSearchBar((initial)=> !initial)
    }
    return   <div id="searchComponentContainer">
                <Card id = "searchComponentCard">
                   {!openSearchBar && <div id="searchComponentTextContainer"><span id="searchComponentTextH2" >Choose</span><p id="searchComponentTextP"> a Car</p></div>}
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

export function Brands({brands}:brandType):JSX.Element{
    return <div id='brandsContainer'>
        <h2>Brands</h2>
        <div id='brandsSwiperContainer'>
            <Swiper spaceBetween={10} slidesPerView={4} id='slideR' >
                {brands.map(brandImage => <SwiperSlide key={brandImage.name} ><Abrand image = {brandImage} /></SwiperSlide>)}
            </Swiper>
        </div>
    </div>
}

function Abrand({image}:any):JSX.Element{
    return <div id = 'abrandDiv' onClick={function(){console.log(`${image.name}`);
    }} >
        <img src={image.img} />
    </div>
}

export function Cars({ListOfCars}:carsType):JSX.Element{
    return <div id='carsContainer'>
                <h3  style={{color:"black"}} >Available Cars</h3>
                <div id='listOfCars'>{ListOfCars.map(  (single)    =>  <Car car = {single} />)}</div>

    </div>
}
// .image,title,year,price

function Car({car}:any):JSX.Element{
    return <div id='Acar'>
                <Card className='aCarCard' >
                    <div id='firstDiv'>
                        <img src={car.image} /> 
                    <div id='textDiv'>
                            <h3>{car.title}</h3>
                            <p>{car.year}</p>
                        </div>
                    </div>
                    <div id='secondDiv' >
                    <span id='priceSpan'>
                        <p id='price' >{car.price}</p><p >/day</p>
                    </span>
                    <span id='detailsSpan'>
                        <Link to='/'>Details</Link>
                    </span>
                    </div>
                </Card>
    </div>
}