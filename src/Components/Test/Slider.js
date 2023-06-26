import React, {useState} from 'react'
import "./Slider.scss"
import imgSlide1 from "../../assets/images/02.jpg"
import imgSlide2 from "../../assets/images/big2.jpg"
import imgSlide3 from "../../assets/images/big3.jpg"

function Slider() {
    const imageList = [imgSlide1, imgSlide2, imgSlide3]
    const [activeIndex, setActiveIndex] = useState(0)


    function updateIndex(newIndex) {
        const last = (imageList.length-1)*4
        if(newIndex<0){
            setActiveIndex(last)
        }else if(newIndex>last) {
            setActiveIndex(0)
        } else {
            setActiveIndex(newIndex)
        }
        
    }
  return (
    <div className="sliderSection">
        <div className="slider">
            <div 
            className="inner"
            style={{ transform: `translate(-${activeIndex * 25}%)`}}
            >
            
               {
                imageList.map((image) => {
                    return (
                        <div className="carousel-slide">
                        <img src={image}/>
                        </div>
                    )
                })
               }

                

        </div>

           
        </div>
             <div className="buttons">
                <button className="btn btn-primary" onClick={
                    ()=> updateIndex(activeIndex-1)
                }>
                    Left
                </button>

                <button className="btn btn-primary" onClick={
                    () => updateIndex(activeIndex+1)
                }>
                    Right
                </button>
            </div>
    </div>
  )
}

export default Slider