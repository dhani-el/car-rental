import {useState, useEffect, useRef} from 'react';
// import {useState, useEffect, useRef} from 'react';
import { Button } from "@mui/material";
import {User} from 'react-feather';
import Swipe from "@mui/icons-material/Swipe";
import ViewList from '@mui/icons-material/ViewList';
import {Close} from '@mui/icons-material';
import {motion} from 'framer-motion';
import { Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, MeshReflectorMaterial, PerspectiveCamera } from '@react-three/drei';
import {LinearEncoding, RepeatWrapping, TextureLoader} from 'three';
import { useMediaQuery } from 'react-responsive';
import '../../Styles/Home/component.css';

type authProp =  {
    loggedIn:boolean
}

type userProp = {
    name:string
}

type menuProp = { isOpen : boolean}

export function Header():JSX.Element{
    return <div id = "header">
             <Logo/>
             <NavBar/>
             <Authenticator loggedIn = {false} />
             <Menu/>
        </div>
}

function Logo():JSX.Element{
    return <div id="logo">
        <h1>ROSION</h1>
    </div>
}

function NavBar():JSX.Element{
    return <div id="navBar" >
            <a href="#" className="navLinks">Shop</a>
            <a href="#" className="navLinks">Rent</a>
            <a href="#" className="navLinks">Dealer</a>
            <a href="#" className="navLinks">More</a>
    </div>
}

function Authenticator(loginProp:authProp):JSX.Element{
    return <div id="authenticator" >
        {loginProp.loggedIn ? <UserComponent name="daniel" /> : <AuthButton/> }
    </div>
}

function UserComponent(user:userProp): JSX.Element{
    return <div id="userDiv" >
        <User/>
        <p>hi, {user.name} </p>
    </div>
}

function AuthButton():JSX.Element{
    return <div id="authButtonDiv">
                <Button variant="outlined" id="loginButton">LOG IN</Button> 
                <Button variant="outlined" id="signupButton">SIGN UP</Button>
    </div>
}

function Menu():JSX.Element{
    const [isOpen,setIsOpen] = useState(false);

    return <div id="menu">
                <motion.div onClick={()=>{setIsOpen((!isOpen))}} >
                   { isOpen ? <Close id ="menuCloseIcon" className='menuIcons' /> :<ViewList id = "menuListIcon" className='menuIcons'/> }
                </motion.div>
                <MenuBody isOpen={isOpen} />
        </div>
}

function MenuBody({isOpen} : menuProp):JSX.Element{
    const menuBodyAnim = {
        initial:{
            display:'none',
            scaleX:'0%',
            scaleY:'0%',
            opacity:0,
        },
        open:{
            display:'flex',
            opacity:1,
            scaleX:'100%',
            scaleY:'100%',
        }
    }
    return <motion.div initial = "initial" animate = {isOpen?"open" : "initial"} variants={menuBodyAnim} id="menuBody">
            <a href="#" className="navLinks">Shop</a>
            <a href="#" className="navLinks">Rent</a>
            <a href="#" className="navLinks">Dealer</a>
            <a href="#" className="navLinks">More</a>
            </motion.div>
}

export function Body():JSX.Element{
    const isLandScape  = useMediaQuery({query: '(orientation:landscape)'});
    return <div id = "bodyDiv">
                <div id='abslouteContentContainer'>
                    <div id='top'>
                    {isLandScape && <AchivementText/>}
                        <LargeText/>
                        {!isLandScape && <AchivementText/>}
                        <Paragraph/>
                    </div>
                    <CallToAction/>
                </div>
                <Modelo/>
            </div>
}

function AchivementText():JSX.Element{
    return <div id='acheivementDivContainer'>
            <span className='singleAchivement'>
                <p className='number'>100+</p>
                <p>Types of Cars</p>
            </span>
            <span className='singleAchivement'>
                <p className='number'>7K+</p>
                <p>Clients Served</p>
            </span>
    </div>
}

function LargeText():JSX.Element{
    return <div id = "LargeTextDiv">
        <p>RENT PERFORMANCE CARS</p>
    </div>
}

function Paragraph():JSX.Element{
    return <div id = "paragraph" >
        <p>
            we desire our customers to have a hassel free experience hence we make it easy to rent a car by providing a variety of cars, verified car owners and car rental delivery and pickup
        </p>
    </div>
}

function CallToAction():JSX.Element{
    return <div id='callToActionDiv' >
            <Button variant='contained' >RENT NOW</Button>
        </div>
}

function Modelo():JSX.Element{
    // comment the  ref line and function 
    const spinIndicatorRef = useRef(null);

    function removeSpinIndicator():void{
        if(spinIndicatorRef.current !== null ){
            spinIndicatorRef.current.style.display = "none"
            return
        }
    }
    return <div id='model' onClick={removeSpinIndicator}>
        <Canvas shadows >
            <ambientLight intensity = {1} color={"white"} />
            <directionalLight intensity={1}  position={[0,5,0]} />
            {/* <spotLight color={"white"} angle={0.15} distance={8} intensity={40} penumbra={10} position={[0,3,0]} /> */}
            <HomeCarModel  />
            <Ground/>
        </Canvas>
        {/* <div id='spinIndicator' ref={spinIndicatorRef} >
                <Swipe/>
           </div> */}
    </div>
}

function HomeCarModel():JSX.Element{
    const isLandScape  = useMediaQuery({query: '(orientation:landscape)'});
    const scale  = isLandScape ? ([0.005,0.005,0.005]) : ([0.0020,0.0020,0.0020])
    const Scene = useLoader(GLTFLoader,'/lambo.glb');
    return <>
                <OrbitControls target={[0,0.35,0]}  maxPolarAngle={1.45} enablePan = {false} enableZoom = {false} />
                <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
                <color args={[0,0,0]} attach= 'background' />
                <mesh receiveShadow = {true} castShadow={true} > 
                    <primitive castShadow object={Scene.scene} rotation = {[0,2,0]} scale = {scale} position = {[1,1,1.2]}  receiveShadow = {true} castShadow={true} />
                    {/* <primitive castShadow object={Scene.scene} rotation = {[0,2,0]} scale = {[0.005,0.005,0.005]} position = {[1,1,1.2]}  receiveShadow = {true} castShadow={true} /> */}
                </mesh>
            </>
}

function Ground():JSX.Element{
    const [normal, roughness] = useLoader(TextureLoader, ["/texture/rough.jpg","/texture/normal.jpg"]);

    useEffect(function(){
        [normal,roughness].forEach(function(map){
            map.wrapS = RepeatWrapping;
            map.wrapT = RepeatWrapping;
            map.repeat.set(5,5);
        });
        normal.encoding = LinearEncoding;
    }, [normal,roughness]);

    return <mesh rotation-x = {-Math.PI * 0.5} castShadow receiveShadow >
                <planeGeometry args={[30,30]} />
                <MeshReflectorMaterial 
                envMapIntensity={0}
                normalMap={normal}
                // normalScale = {[0.15,0.15]}
                roughnessMap={roughness}
                dithering = {true}
                color={[0.015,0.015,0.015]}
                roughness={0.7}
                blur={[1000,400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                // debug = {0}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                reflectorOffset={0.2}/>
            </mesh>
}

// function SpinIndicator():JSX.Element{
//     return <div id='spinIndicator'>
//                 <Swipe/>
//            </div>
// }

export function Footer():JSX.Element{
    return <div id='footerContainer'>
        <Logo/>
        <div id='quickLinks'>
            <a>Home</a>
            <a>Dealers</a>
            <a>Branches</a>
            <a>Rent a Car</a>
            <a>Pick Up</a>
            <a>Contact Us</a>
            <a>Careers</a>
            <a>Credits</a>
        </div>
        <div id='boilerPlateContent' >

        </div>
    </div>
}