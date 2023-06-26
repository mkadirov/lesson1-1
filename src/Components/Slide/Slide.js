import React, { useEffect} from 'react'
import "./Slide.scss"





function Slide(props) {
   
   const list = props.cards
   const index = props.index
   const setIndex = props.setIndex

   useEffect(() => {
      const lastIndex = list.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, list]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);

  return (
   <section className="section">
      <div className='section-center'>
       {
      list.map((card, slideIndex)=> {

         let position = "nextSlide";

         if(slideIndex === index) {
            position = "activeSlide"
         }
         if(slideIndex == index-1 || (index === 0 && slideIndex === 2)) {
            position = 'lastSlide'
         }


         return (
            <article className={position} >

            <div className="img-box">
            <img src={card.img} alt="" />
            </div>
         
          <div className="info-box">
         
           <div className="left">
         
           <div>
              <button className={`btn btn-${card.btnType}`}>
                  <span className='dot'></span>
                  {card.btn}
              </button>
            </div>
         
            <div className="large-text">
              <h1 className="underline-hover">
                 {card.title}
              </h1>
            </div>
         
            <div>
              <p className='small-text'>
                 No visited raising gravity outward subject my cottage Mr be. 
                 Hold do at tore in park feet near my case. 
              </p>
            </div>
         
            <div className='left-bottom'>
               <div className='avatar-rounded'>
                  <img src={card.avatar}/>
               </div>
         
               <div className='d-flex align-items-center'>
                  <span>by <span className='underline-hover'>{card.userName}</span></span>
                  <span className="period me-2 ms-2"></span>
                  <span>{card.date}</span>
                  <span className="period me-2 ms-2"></span>
                  <span>{card.time} min read</span>
               </div>
            </div>
         
           </div>
         
           <div className="right">
           </div>
         
         
          </div>
            </article>
         )
      })
    }
   </div>
   </section>
  )
}

export default Slide