import "./PartnerLogo.css"
import slack from "../images/slack.png"
import prudential from "../images/prudential.png"
import microsoft from "../images/microsoft.png"
import zoover from "../images/zoover.png"



export const PartnerLogo = () =>{
    return(
        <div id="partnerDiv">
            <div><img className="partnerLogo" src={slack} alt="" /></div>
            <div><img className="partnerLogo" src={prudential} alt="" /></div>
            <div><img className="partnerLogo" src={microsoft} alt="" /></div>
            <div><img className="partnerLogo" src={zoover} alt="" /></div>
        </div>
    )
}