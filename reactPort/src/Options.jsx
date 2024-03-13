import { useState } from "react"

function Options({optionTitle, optionValues, optionsList, setOptionsList}){
    return(
        <>
        <label htmlFor="">{optionTitle}</label>
            <select id=""
                onChange={
                    (e) => {
                        if(!optionsList.includes(e.target.value))
                        setOptionsList((prev) => [...prev, (e.target.value)])
                    }
                }
                value={"--select--"}
            >
            <option value="">--select--</option>
            {
                optionValues.map((val) => 
                    <option value={val} key={val}>{val}</option>
                )
            }
            </select>
            {optionsList.map((option) => 
                <button key={option} onClick={ () =>
                    setOptionsList(prev => prev.filter(el => el !== option ))
                }>{option}</button>
            )}
        </>
    )
}
export default Options