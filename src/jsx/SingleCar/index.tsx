import { Search } from "@mui/icons-material";
import { CarImage,CarDescription, CarPrice } from "./component";
import image from '/imageOne.png';
import lambo from '../../assets/carLogo/lamborghini.png'

const imageData = {
    image:image,
    logo:lambo,
    title:'Lamborghini',
    year:'2020'  
}

const location ={
    address:"5,Mufutau Shobola, Ogba Lagos,Nigeria",
    meters:'50'
}

const features = [
    {
        Icon:Search,
        featureValue:'auto contact ',
        optFeature:null
    },
    {
        Icon:Search,
        featureValue:'auto contact',
        optFeature:null
    },
    {
        Icon:Search,
        featureValue:'auto contact ',
        optFeature:null
    },
    {
        Icon:Search,
        featureValue:'auto contact ',
        optFeature:null
    },
]

export default function SingleCar():JSX.Element{
    
    return <div id="singleCarContainer">
            <CarImage image={imageData.image} logo={imageData.logo} title={imageData.title} year={imageData.year}/>
            <CarDescription  carFeatures={features} location={location}/>
            <CarPrice price="N120k"/>
    </div>
}