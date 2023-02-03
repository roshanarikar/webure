import  "./Navbar.css"

export const Navbar = () =>{
    return(
        <div id="NavDiv">
            <div id="logo"><p>Webure Technologies</p></div>
            <div id="SmallNavDiv">
                <div><p>About</p></div>
                <div><p>Services</p></div>
                <div><p>Careers</p></div>
                <div><p>ROI Stories</p></div>
                <div><p>Blog</p></div>
                <div><p>Contact Us</p></div>
                <div><button id="talkBtn">Let's talk</button></div>
            </div>
        </div>
    )
}