import HeroSection from "./HeroSection";
import FooterSection from "./FooterSection";
import heroBg from './assets/service/services.jpg'
import ImgSlider from './ImgSlider';
import './style/services.css';

import { PlanServices, FoodServices, PhotographyServices, BrideEntryServices, EtcServices } from "./ServiceList";

function Services() {
  
    return (
      <>
      <HeroSection bgImg={heroBg} text={"Our Service At Your Service"}></HeroSection>
      <div id="services">
        <h1>Explore Our Services</h1>
        <ImgSlider serviceTitle={"Plans"} servicesData={PlanServices}></ImgSlider>
        <ImgSlider serviceTitle={"Food"} servicesData={FoodServices}></ImgSlider>
        <ImgSlider serviceTitle={"Photography"} servicesData={PhotographyServices}></ImgSlider>
        <ImgSlider serviceTitle={"Bride Entry"} servicesData={BrideEntryServices}></ImgSlider>
        <ImgSlider serviceTitle={"Etc"} servicesData={EtcServices}></ImgSlider>
      </div>
      <FooterSection></FooterSection>
      </>
    )
  }
  
  export default Services
  