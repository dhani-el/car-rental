import { useEffect, useRef, useLayoutEffect} from 'react';
import { Button } from "@mui/material";
import Swipe from "@mui/icons-material/Swipe";
import { Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, MeshReflectorMaterial, PerspectiveCamera } from '@react-three/drei';
import {LinearEncoding, RepeatWrapping, TextureLoader} from 'three';
import { motion, Variants} from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import SplashImage from "/one.png";
import '../../Styles/Home/component.css';

type bodyArgType = {
    removeSplash: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Body({removeSplash}:bodyArgType):JSX.Element{
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
                <Modelo removeSplash={removeSplash}/>
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
           <Link to='/rent' > <Button variant='contained' id='callToActionButton' ><p>RENT NOW</p></Button></Link>
        </div>
}

function Modelo({removeSplash}:bodyArgType):JSX.Element{
    const spinIndicatorRef  = useRef<HTMLDivElement>(null);

    function removeSpinIndicator():void{
        if(spinIndicatorRef.current !== null ){
            spinIndicatorRef.current.style.display =  "none"
            return
        }
    }
    return <div id='model'onTouchMove={removeSpinIndicator} onMouseDown={removeSpinIndicator} >
        <Canvas shadows >
            <ambientLight intensity = {1} color={"white"} />
            <directionalLight intensity={1}  position={[0,5,0]} />
            <spotLight color={"white"} angle={0.15} distance={8} intensity={40} penumbra={10} position={[0,3,0]} />
            <HomeCarModel removeSplash={removeSplash}  />
            <Ground/>
        </Canvas>
        <div id='spinIndicator' ref={spinIndicatorRef} >
                <Swipe/>
           </div>
    </div>
}

function HomeCarModel({removeSplash}:bodyArgType):JSX.Element{
    const isLandScape  = useMediaQuery({query: '(orientation:landscape)'});
    const scale  = isLandScape ? ([0.005,0.005,0.005]) : ([0.0020,0.0020,0.0020]);
    const position  = isLandScape ? ([0,0.68,0.5]) : ([1,0.68,1.4]);
    const Scene = useLoader(GLTFLoader,'/lambo.glb');

    useLayoutEffect(function(){
        removeSplash(false)
    },[])
    return <>
                <OrbitControls target={[0,0.35,0]}  maxPolarAngle={1.45} enablePan = {false} enableZoom = {false} />
                <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
                <color args={[0,0,0]} attach= 'background' />
                <mesh receiveShadow = {true} castShadow={true} > 
                    <primitive castShadow object={Scene.scene} rotation = {[0,2,0]} scale = {scale} position = {position}  receiveShadow = {true}  />
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
                <planeGeometry args={[15,15]} />
                <MeshReflectorMaterial 
                envMapIntensity={0}
                normalMap={normal}
                // normalScale = {[0.15,0.15]}
                roughnessMap={roughness}
                dithering = {true}
                color={[0.015,0.015,0.015]}
                roughness={1}
                blur={[1000,400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.04}
                minDepthThreshold={0.9}
                // debug = {0}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                reflectorOffset={0.2}/>
            </mesh>
}

export function SplashScreen():JSX.Element{
    const anim : Variants = {
        animate:{
            scaleX:1.2,
            scaleY:1.2,
            transition:{
                duration:1,
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    }
    return <div id='splashHighestDiv'>
                <motion.div id='imageContainer' animate = {"animate"} variants ={anim}>
                    <img src={SplashImage} id='image' />
                </motion.div>
        </div>
}
