import {useState} from 'react'
import Body, { SplashScreen } from "./component";
import '../../Styles/Home/index.css'

export default function Home():JSX.Element{
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    return <div>
               {showSplashScreen && <SplashScreen/>}
               {<Body removeSplash={setShowSplashScreen}/>} 
               
            </div>
}
