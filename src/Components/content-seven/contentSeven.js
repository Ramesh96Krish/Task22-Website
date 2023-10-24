import "./contentSeven.css"
import Fb from "../../Assets/fb-icon.png"
import Twitter from "../../Assets/twitter.png"
import Insta from "../../Assets/insta-icon.png"
import Copyright from "../../Assets/copyright-icon.png"

const LastSection = ()=>{
    return(
        <div className="last-container">
            <div className="copyright-container">
                <div>
                    <ul className="about-list">
                        <li className="li-none"><a href="!#">About</a></li>
                        <li>.</li>
                        <li><a href="!#">Contact</a></li>
                        <li>.</li>
                        <li><a href="!#">Terms of Use</a></li>
                        <li>.</li>
                        <li><a href="!#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="copyright-line">
                    <p className="copyright-txt"><img className="copyright-img" src={Copyright} alt="copyright" /> Your Website 2023. All Rights Reserved.</p>
                </div>
            </div>
            <div className="social-icons">
                <a href="!#"><img className="social-icon" src={Fb} alt="icon"/></a>
                <a href="!#"><img className="social-icon" src={Twitter} alt="icon"/></a>
                <a href="!#"><img className="social-icon" src={Insta} alt="icon"/></a>
            </div>
        </div>
    )
}

export default LastSection;