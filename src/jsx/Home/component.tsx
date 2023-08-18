import {useState} from 'react';
import { Button } from "@mui/material";
import {User} from 'react-feather';
import Swipe from "@mui/icons-material/Swipe";
import ViewList from '@mui/icons-material/ViewList';
import {Close} from '@mui/icons-material';
import {motion} from 'framer-motion';
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