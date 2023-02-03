import { BusinessCard } from "../BusinessCard/BusinessCard"
import { Navbar } from "../Navbar/Navbar"
import { PartnerLogo } from "../PartnerLogo/PartnerLogo"


export const Home = () =>{
    return(
        <div>
            <Navbar/>
            <BusinessCard/>
            <PartnerLogo/>
        </div>
    )
}