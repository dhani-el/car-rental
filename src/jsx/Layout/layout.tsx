import { Outlet } from "react-router-dom"
import { Header,Footer } from "./component"
import '../../Styles/Layout/index.css'


export default function Layout():JSX.Element{
    return <div id="layoutWrapper">
    <div id="headerWrapper">
        <Header/>
    </div>
    <div id="outletWrapper">
        <Outlet/>
    </div>
    <div id="footerWrapper">
        <Footer/>
    </div>
    </div>
}