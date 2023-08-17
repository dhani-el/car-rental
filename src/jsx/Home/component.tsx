import { Button } from "@mui/material";
import Person from "@mui/icons-material/Person";
import Swipe from "@mui/icons-material/Swipe";
import '../../Styles/Home/component.css'


type authProp =  {
    loggedIn:boolean
}

type userProp = {
    name:string
}

export function Header():JSX.Element{
    return <div id = "header">
             <Logo/>
             <NavBar/>
             <Authenticator loggedIn = {false} />
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
        {loginProp.loggedIn ? <User name="daniel" /> : <AuthButton/> }
    </div>
}

function User(user:userProp): JSX.Element{
    return <div id="userDiv" >
        <Person/>
        <p>hi, {user.name} </p>
    </div>
}

function AuthButton():JSX.Element{
    return <div id="authButtonDiv">
                <Button variant="outlined" >LOG IN</Button> 
                <Button variant="outlined" >SIGN UP</Button>
    </div>
}

export function Body():JSX.Element{
    return <div>
                <LargeText/>
                <AchivementText/>
                <Modelo/>
                <CallToAction/>
                <Paragraph/>
            </div>
}

function LargeText():JSX.Element{
    return <div>
        <h2>RENT PERFORMANCE CARS</h2>
    </div>
}

function AchivementText():JSX.Element{
    return <div>
        <span>
            <p>100+ CARS</p>
            <p>7K+ CLIENTS</p>
        </span>
    </div>
}

function CallToAction():JSX.Element{
    return <div>
            <Button>RENT NOW</Button>
        </div>
}

function Paragraph():JSX.Element{
    return <div>
        <p>
            we desire our customers to have a hassel free experience hence we make it easy to rent a car by providing a variety of cars, verified car owners and car rental delivery and pickup
        </p>
    </div>
}

function Modelo():JSX.Element{
    return <div>
        <canvas>
        </canvas>
        <SpinIndicator/>
    </div>
}

function SpinIndicator():JSX.Element{
    return <div>
                <Swipe/>
           </div>
}

export function Footer():JSX.Element{
    return <div>

    </div>
}