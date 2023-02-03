import "./ContactUs.css"
import check from "../images/checkmark.png"
import lady from "../images/lady.png"

export const ContactUs = () =>{
    return(
        <div id="ContactDiv">
            <div id="imgDiv">
               <div>
                  <img src={lady} alt="" />
               </div>                
            </div>
            <div id="choseDiv">
                <div>
                    <p id="servicesText">WHY CHOOSE US</p>
                    <p id="ChooseText">Take on any Challenges of the Digital world</p>
                    <p className="contactText"><img className="check" src={check} alt="" />   Corporate Financial Advisory</p>
                    <p className="contactText"><img className="check" src={check} alt="" />   Development of Financial Models</p>
                    <p className="contactText"><img className="check" src={check} alt="" />   Deal Structring</p>
                    <div id="emailBtn">
                        <div><input id="input" type="text" placeholder="Enter your email ID"/></div>
                        <div><button className="getBtn">Get Started</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}