import { useState } from 'react';
import './style/imgSlider.css';


function ImgSlider({serviceTitle, servicesData}){

    const [imgIdx, setImgIdx] = useState(0)

    const showNextImg = () => {
        setImgIdx((prev) => {
            if (prev === servicesData.length - 1) return 0
            return prev+1
        })
    }
    const showPrevImg = () => {
        setImgIdx((prev) => {
            if (prev === 0) return servicesData.length - 1
            return prev-1
        })
    }

    return(
    <div className="slider">
    <div className='slidesContainer'>
    {
        servicesData.map((prop) => {
            return <div className="slide" key={prop[1]}  style={{translate: -100*imgIdx+'%'}}>
                
                <h1>{serviceTitle}</h1>
                
                <h2>{prop[0]}</h2>
                <img src={prop[1]} alt="" />
            </div>
        })
    }
    </div>
    
    <button className="btn btn-next" onClick={showNextImg}> {'>'} </button>
    <button className="btn btn-prev" onClick={showPrevImg}> {'<'} </button>
  </div>)
}
export default ImgSlider;