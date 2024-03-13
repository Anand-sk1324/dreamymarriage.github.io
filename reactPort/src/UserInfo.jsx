import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'redaxios';
function UserInfo(){
    const {id} = useParams();
    const [userData, setUserData] = useState([]);
    const baseUrl = process.env.BASE_URL||'http://localhost:3000/interests';
    useEffect(()=>{
        axios.get(baseUrl+id).then((res) => 
            setUserData(res.data)
        )
    }, [])
    console.log(userData.foods)

    return (
        <>
            <h1>User Information</h1>

            <h2>Name: </h2>
            <h3>{userData.name}</h3>
            
            <h2>Phone: </h2>
            <h3>{userData.phone}</h3>
            
            <h2>Email: </h2>
            <h3>{userData.email}</h3>
            
            <h2>Optional message: </h2>
            <h3>{userData.msg || "None"}</h3>

            <h2>Selected Plans: </h2>
            {userData.plans?.map((el) => 
                <h3 key={el}>{el}</h3>
            )} 

            <h2>Selected Foods: </h2>
            {userData.foods?.map((el) => 
                <h3 key={el}>{el}</h3>
            )} 

            <h2>Selected PhotoGraphy: </h2>
            {userData.photography?.map((el) => 
                <h3 key={el}>{el}</h3>
            )} 

            <h2>Selected Bride Entry: </h2>
            {userData.entry?.map((el) => 
                <h3 key={el}>{el}</h3>
            )}

            <h2>Selected Etc: </h2>
            {userData.etc?.map((el) => 
                <h3 key={el}>{el}</h3>
            )} 

            

        </>
    )
}
export default UserInfo;