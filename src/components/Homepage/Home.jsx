import { BusinessCard } from "../BusinessCard/BusinessCard"
import { ContactUs } from "../ContactUs/ContactUs"
import { Navbar } from "../Navbar/Navbar"
import { PartnerLogo } from "../PartnerLogo/PartnerLogo"
import { Services } from "../Services/Services"


export const Home = () =>{
    return(
        <div>
            <Navbar/>
            <BusinessCard/>
            <PartnerLogo/>
            <Services/>
            <ContactUs/>
        </div>
    )
}