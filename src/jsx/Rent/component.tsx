import {useState} from 'react';
import { TextField, Card } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import '../../Styles/Rent/component.css';


type searchType = {
    handleClickFunction: Function
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
        <TextField /> 
        <Close onClick = {()=>handleClickFunction()} />
    </div>
}

type brandType  = {
    brands : any[]
}

export function Brands({brands}:brandType):JSX.Element{
    return <div>
        <h1>Brands</h1>
        <div>
            <Swiper spaceBetween={10} slidesPerView={4} >
                {brands.map(brandImage => <SwiperSlide><Abrand image = {brandImage} /></SwiperSlide>)}
            </Swiper>
        </div>
    </div>
}

function Abrand({image}:any):JSX.Element{
    return <div>
        <img src={image} />
    </div>
}

// audi tesla lamborghini ferari porsche toyota lexus pagani mazda  rolls royce range rover land rover  ford nissan vokswagen chevrollette