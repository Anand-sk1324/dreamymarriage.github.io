
import HeroSection from "./HeroSection";
import FooterSection from "./FooterSection";
import ImgSlider from "./ImgSlider";
import Member from "./Member";
import heroBg from "./assets/hero.png";

import postWeddingPhotoshoot from './assets/post-wedding-photoshoot.avif';
import honeymoonDiscount from './assets/honeymoon.webp';

import meganathanImage from './assets/team/meganathan.jpg';
import hariniImage from './assets/team/harini.jpg';
import suganyaImage from './assets/team/suganya.jpg';

import './style/why.css'
import './style/team.css'
function Home() {
    const specialOfferData = [          
        ["post-wedding-photoshoot", postWeddingPhotoshoot],
        ["honeymoon", honeymoonDiscount]
    ]
  
    return (
        <>
        <HeroSection bgImg={heroBg} text={"Let's Plan Your Dream Wedding"}></HeroSection>

        {/* Why Session */}
        <div id="why">
        <div className="heading-container">
            <h1>
                <div>WHY</div>
                <div>DREAMY</div>
                <div>WEDDING?</div>
            </h1>
        </div>
        <div className="temp"></div>   
        <div className="text-container">
            <p>Dreamy Marriage is a fully Customizable Marriage solution for your personal needs and budget.</p>
        </div>  
        </div>   

        <ImgSlider 
            serviceTitle = "Special Offer"
            servicesData = {specialOfferData}
        >
        </ImgSlider>

        {/*Team Section*/}
        <div id="team">
        <h1>Our Teams</h1>
        <div id="member-list">
            <Member
                 memberName={"Meganathan"}
                 memberRole={"Head of Catering services"}
                 memberImage={meganathanImage}
                 memberPhone={7397421127}
                 memberEmail={"milkymega1@gmail.com"}
                 memberInstagram={"mega_marley_"}
            ></Member>
            <Member
                 memberName={"Harini"}
                 memberRole={"Leading Head"}
                 memberImage={hariniImage}
                 memberPhone={9941210594}
                 memberEmail={"harinissureshbabu185@gmail.com"}
                 memberInstagram={"suresh061016"}
            ></Member>
            <Member
                 memberName={"Suganya"}
                 memberRole={"Head of Decoration services"}
                 memberImage={suganyaImage}
                 memberPhone={7305044716}
                 memberEmail={"ssuganya5423@gmail.com"}
                 memberInstagram={"suga_nya29"}
            ></Member>
        </div>
        </div>
        <FooterSection></FooterSection>
        </>
    )
  }
  
  export default Home
  