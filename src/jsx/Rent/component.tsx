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
    brands : any[],
    handleBrandChange: React.Dispatch<React.SetStateAction<string>>
}

type carsType = {
    ListOfCars : any[],
    brand:string
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

export function Brands({brands,handleBrandChange}:brandType):JSX.Element{
    
    return <div id='brandsContainer'>
        <div id='brandsSwiperContainer'>
            <Swiper spaceBetween={10} slidesPerView={4} id='slideR' >
                <SwiperSlide><AllBrands  handleClick = {handleBrandChange} /></SwiperSlide>
                {brands.map(brandImage => <SwiperSlide key={brandImage.name} ><Abrand image = {brandImage} handleClick = {handleBrandChange} /></SwiperSlide>)}
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

export function Cars({ListOfCars,brand}:carsType):JSX.Element{
    return <div id='carsContainer'>
                <h3  style={{color:"black"}} >Available Cars</h3>
                <div id='listOfCars'>{ListOfCars.map((single)=><div key={single.model} id='keyDivs' ><Car car = {single} brand = {brand}  /></div>)}</div>
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
                        Details
                    </span></Link>
                    </div>
                </Card>
    </div>
}