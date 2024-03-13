import axios from 'redaxios';
import { useState, useEffect } from "react";

import HeroSection from "./HeroSection";
import FooterSection from "./FooterSection";
import Options from './Options';
import { PlanServices, FoodServices, PhotographyServices, BrideEntryServices, EtcServices } from './ServiceList';

import heroBg from './assets/handshake.avif';
import InvitationImage from './assets/contact-us.png';
import './style/contact-us.css'
function ContactUs() {
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMsg, setClientMsg] = useState("")

    const [planSelections, setPlanSelections] = useState([]);
    const [foodSelections, setFoodSelections] = useState([]);
    const [photographySelections, setPhotographySelections] = useState([]);
    const [brideEntrySelections, setBrideEntrySelections] = useState([]);
    const [etcSelections, setEtcSelections] = useState([]);
    const planOptionsTitle = [];
    const foodOptionsTitle = [];
    const photographyOptionsTitle = [];
    const brideEntryOptionsTitle = [];
    const etcOptionsTitle = [];
    PlanServices.forEach((prop) => planOptionsTitle.push(prop[0]))
    FoodServices.forEach((prop) => foodOptionsTitle.push(prop[0]))
    PhotographyServices.forEach((prop) => photographyOptionsTitle.push(prop[0]))
    BrideEntryServices.forEach((prop) => brideEntryOptionsTitle.push(prop[0]))
    EtcServices.forEach((prop) => etcOptionsTitle.push(prop[0]))

    const submitAction = () => {
        event.preventDefault();
        console.log(foodSelections)
        axios.post(process.env.BASE_URL||'http://localhost:3000/interests', {
            name: clientName,
            phone: clientPhone,
            email: clientEmail,
            msg: clientMsg,
            plans: planSelections,
            foods: foodSelections,
            photography: photographySelections,
            entry: brideEntrySelections,
            etc: etcSelections
        }).then((res) => {
            if(res.status == 201)alert("Your response recorded succesfully")
        })
    }
    return ( 
        <>

        <HeroSection bgImg={heroBg} text={"We Love To Hear You"}></HeroSection>

        <div id="contact-us">
        <div className="left">
            <h1>Contact Us</h1>
            <form onSubmit={submitAction}>
            <label htmlFor="Name">Name</label>
            <input 
                type="text" 
                id="Name"
                value={clientName}
                onChange={(event) => setClientName(event.target.value)}
                required
            / >
            <label htmlFor="Phone">Phone</label>
            <input 
                type="tel" 
                id="Phone"
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                value={clientPhone}
                onChange={(event) => setClientPhone(event.target.value)}
                required
            / >
            <label htmlFor="Email">Email</label>
            <input 
                type="text" 
                id="Email"
                value={clientEmail}
                onChange={(event) => setClientEmail(event.target.value)}
                required
            / >
            
            <Options 
                optionTitle={"Plans"} 
                optionValues={planOptionsTitle} 
                optionsList={planSelections} 
                setOptionsList={setPlanSelections}
            ></Options>

            <Options 
                optionTitle={"Food"} 
                optionValues={foodOptionsTitle} 
                optionsList={foodSelections} 
                setOptionsList={setFoodSelections}
            ></Options>

            <Options 
                optionTitle={"Photography"} 
                optionValues={photographyOptionsTitle} 
                optionsList={photographySelections} 
                setOptionsList={setPhotographySelections}
            ></Options>

            <Options 
                optionTitle={"Bride Entry"} 
                optionValues={brideEntryOptionsTitle} 
                optionsList={brideEntrySelections} 
                setOptionsList={setBrideEntrySelections}
            ></Options>

            <Options 
                optionTitle={"Etc"} 
                optionValues={etcOptionsTitle} 
                optionsList={etcSelections} 
                setOptionsList={setEtcSelections}
            ></Options>

            <label htmlFor="msg">Optional Message</label>
            <textarea
                rows={5}
                cols={20}
                id="msg"
                value={clientMsg}
                onChange={(e) => setClientMsg(e.target.value)}
            ></textarea>
            <input 
                    type="submit" 
                    value="Send a Mail" 
                    id="submit"
            ></input>
            </form>
        </div>
        <div className="right">
            <img src={InvitationImage} alt="" />
        </div>
        </div>        

        <FooterSection></FooterSection>
        </>
    )
  }
  
  export default ContactUs
  