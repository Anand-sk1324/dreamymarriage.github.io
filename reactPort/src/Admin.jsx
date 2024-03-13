import { useState, useEffect } from "react";
import axios from 'redaxios';

import './style/admin.css';
function Admin(){
    const baseUrl = process.env.BASE_URL||'http://localhost:3000/interests';
    const [interests, setInterests] = useState([])
    useEffect(()=>{
        axios.get(baseUrl).then((res) => 
            setInterests(res.data)
        )
    }, [])
    console.log(interests)

    const DEL = (interestID) => {
        let areYouSure = confirm("Are you sure to delete the record?")
        if(!areYouSure)return;
        axios.delete(baseUrl+interestID)
        location.reload()
    }
    const accept = (interestID) => {
        console.log('accept')
        let url = baseUrl+'reject/'+interestID;
        const response = axios.get(url);
    }

    const reject = (interestID) => {
        let url = baseUrl+'reject/'+interestID;
        const response = axios.get(url);
    }

    return(
    <div id="main">
        <h1>Admin</h1>
        <div id="table">
        <div id="labels">
                <div className="label">Name</div>
                <div className="label">Email</div>
                <div className="label">Operations</div>
            </div>
        <div id="entries">
        {
            interests.map((interest) => 
                <div className="entry" key={interest._id}>
                    <div className="name-data">{interest.name}</div>
                    <div className="email-data">{interest.email}</div>

                    <div>
                    <button onClick= {() => window.location.href = '/admin/'+interest._id} id="buttonDelete">View</button>
                    <button onClick= {() => accept(interest._id)} id="buttonAccept">Accept</button>
                    <button onClick= {() => DEL(interest._id)} id="buttonDelete"> Delete</button>
                    <button onClick= {() => reject(interest._id)} id="buttonReject">Reject</button>
                    </div>
                </div>
            )
        }
        </div>
        </div>
    </div>
    )
}
export default Admin;