import {useState} from 'react';
import { Button } from "@mui/material";
import {User} from 'react-feather';
import ViewList from '@mui/icons-material/ViewList';
import {Close} from '@mui/icons-material';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Store/store';
import '../../Styles/Layout/component.css';
import LogoImage from '/one.png';


type authProp =  {
    loggedIn:boolean,
    username:string
}

type userProp = {
    name:string
}

type menuProp = { isOpen : boolean}


export function Header():JSX.Element{
    const loginData = useAppSelector(state => state.Authentication);
    console.log(loginData.isUserLoggedIn);
    
    return <div id = "header">
             <Logo/>
             <NavBar/>
             <Authenticator loggedIn = {loginData.isUserLoggedIn} username={loginData.username} />
             <Menu/>
        </div>
}

function Logo():JSX.Element{
    return <div id="logo">
        <img src={LogoImage} alt='lunder rentals logo' />
    </div>
}

function NavBar():JSX.Element{
    return <div id="navBar" >
            <Link to="/shop"  className="navLinks" > Shop</Link>
            <Link to="/rent" className="navLinks"  >Rent</Link>
            <Link to="/dealers"  className="navLinks" >Dealers</Link>
            <Link to="/more"  className="navLinks" >More</Link>
    </div>
}

function Authenticator({loggedIn,username}:authProp):JSX.Element{
    return <div id="authenticator" >
        {loggedIn ? <UserComponent name={username} /> : <AuthButton/> }
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
                <Link to='/auth'><Button variant="outlined" id="loginButton">LOG IN</Button> </Link>
                <Link to='/auth'><Button variant="outlined" id="signupButton">SIGN UP</Button> </Link>
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
            <Link to="/shop"  className="navLinks" > Shop</Link>
            <Link to="/rent" className="navLinks"  >Rent</Link>
            <Link to="/dealers"  className="navLinks" >Dealers</Link>
            <Link to="/more"  className="navLinks" >More</Link>
            </motion.div>
}

export function Footer():JSX.Element{
    return <div id='footerContainer'>
        <Logo/>
        <div id='quickLinks'>
            <Link to='/'>Home</Link>
            <Link to='/dealers'>Dealers</Link>
            <Link to='/branches' >Branches</Link>
            <Link to='/rent' >Rent a Car</Link>
            <Link to='/delivery' >Pick Up</Link>
            <Link to='/contact' >Contact Us</Link>
            <Link to='/careers' >Careers</Link>
            <Link to='/credit' >Credits</Link>
        </div>
        <div id='boilerPlateContent' >

        </div>
    </div>
}