import { Swiper, SwiperSlide } from 'swiper/react';
import { Place,Streetview } from '@mui/icons-material';
import '../../Styles/SingleCar/component.css'

type carImage={
    image:any,
    logo:any,
    title:string,
    year:string   
}

export function CarImage({image,logo,title,year}:carImage):JSX.Element{
    return <div id="carImageDiv">
                <img src={image} />
                <CarImageText logo={logo} title={title} year={year} />
            </div>
}

type carText = {
    logo:any,
    title:string,
    year:string
}

type features = {
    features:feature[]
}

function CarImageText({logo,title,year}:carText):JSX.Element{
    return <span id='carImageTextSpan'>
                <img src = {logo} id="carLogo"/>
                <span id="cartitleNyearSpan">
                    <h2 id="carTitle">{title}</h2>
                    <p id="carYear">{year}</p>
                </span>
            </span>
}

type carDescriptionType = {
    carFeatures : feature[],
    location:carLocationType,
}

export function CarDescription({carFeatures,location}:carDescriptionType):JSX.Element{
    return <div id="descriptiveDiv">
                <CarSpecification features={carFeatures} />
                <CarLocation meters={location.meters} address={location.address}  />
            </div>
}

 function CarSpecification({features}:features):JSX.Element{
    return <div id='carSpecificationDiv'>
             <h2>SPECIFICATION</h2>
             <Features features={features}/>
            </div>
}
function Features({features}:features):JSX.Element{
    return <div id="featuresDiv">
                <Swiper spaceBetween={10} slidesPerView={2.4} id='swipeRR'>
                    {features.map(function(feature){
                        return <SwiperSlide id='SwipeRslide'>
                            <Feature Icon={feature.Icon} featureValue={feature.featureValue} optFeature={(feature.optFeature?feature.optFeature:null)} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
}
type feature = {
    Icon:any,
    featureValue:string,
    optFeature?:string | null
}
function Feature({Icon,featureValue,optFeature}:feature){
    return <div id='singleFeature'>
                <Icon id ="icon" />
                <span id='featureValueSpan'>
                    <p id='text'>{featureValue}{optFeature && <span>{optFeature}</span>}</p>
                    
                </span>
            </div>
}

type carLocationType = {
    meters:string,
    address:string,
}
function CarLocation({meters,address}:carLocationType):JSX.Element{
    return <div id='carLocationDiv' >
                <div id="locatinHeaderDiv">
                    <p id='locationText'>Location</p> 
                    <span id='leftOfLocation'> <Streetview/> <p id='meters'>{meters}m</p></span>
                </div>
                <div id="actualLocationComponent"> 
                    <Place id ="placeIcon" />
                    <p>{address}</p>
                </div>
    </div>
}
type priceType = {
    price:string
}
export function CarPrice({price}:priceType):JSX.Element{
    return  <div id='priceComponent'>
                <div id='pricePDiv'><p>{price}</p><p>/day</p></div>
                <span>Book now</span>
            </div>
}