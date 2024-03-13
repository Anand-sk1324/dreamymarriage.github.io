import phoneImg from './assets/contact/phone.svg';
import emailImg from './assets/contact/email-outline.svg';
import instagramImg from './assets/contact/instagram.svg';

function Member({memberName, memberRole, memberImage, memberPhone, memberEmail, memberInstagram}){
    const gotoCall = () => {
        window.open(`tel:+91${memberPhone}`);
    }
    const gotoEmail = () => {
        window.open(`mailto:${memberEmail}`);
    }
    const gotoInstagram = () => {
        window.open(`https://www.instagram.com/${memberInstagram}/`)
    }
    return (
        <div className="member">
                <div className="member-image">
                    <img src={memberImage} alt="" />
                </div>
                <h2 className="member-name">{memberName}</h2>
                <h4 className="member-role">{memberRole}</h4>
                <div className="contacts">
                    <button className="contact" onClick={gotoCall}>
                        <img src={phoneImg}alt="" />
                    </button>
                    <button className="contact" onClick={gotoEmail}>
                        <img src={emailImg} alt="" />
                    </button>
                    <button className="contact" onClick={gotoInstagram}>
                        <img src={instagramImg} alt="" />
                    </button>
                </div>
        </div>
    )
}
export default Member;