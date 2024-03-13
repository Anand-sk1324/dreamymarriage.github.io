import logo from './assets/logo.png';
import { Link } from'react-router-dom';
function FooterSection(){
    const goCall = () => {
        window.open('tel:+919941210594')
    }
    const goMall = () => {
        window.open('mailTo:dreamyweddy@gmail.com')
    }
    return(
        <div id="footer-wrapper">
        <footer>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            
            <div id="links">
                <h4>Links</h4>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/contact-us">Contact Us</a>
            </div>
    
            <div className="contacts">
                <h4>Contact Us</h4>
                <button className="contact" onClick={goCall}>+91 9941210594</button>
                <button className="contact" onClick={goMall}>dreamyweddy@gmail.com</button>
            </div>
        </footer>
    </div>
    )
}
export default FooterSection;