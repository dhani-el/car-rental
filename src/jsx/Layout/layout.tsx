import { Outlet } from "react-router-dom"
import { Header,Footer } from "./component"


export default function Layout():JSX.Element{
    return <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
}