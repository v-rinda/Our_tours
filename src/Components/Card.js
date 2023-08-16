import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
const Card = (props) => {
    let review=props.review;
    console.log(review);
  return (
    <div className='flex flex-col  md:relative'> 

       <div className='absolute top-[-7rem] z-[10] mx-auto' > 
          <img 
           className = 'aspect-square rounded-full w-[140px] h-[140px] z-[50]'
           src={review.image} alt="image1"></img>

           <div className='w-[140px]  h-[140px] bg-violet-500 rounded-full absolute top-[-2px] z-[-10] left-[5px]'></div>
       </div>
       <div className='text-center mt-7'>
            <p className='tracking-wide font-bold text-2xl capitalize'>{review.name}</p>
            <div className='text-violet-300 text-lg'>
              {review.price}
            </div>
       </div>
       <div className='text-violet-400 mx-auto mt-5'>
         <FaQuoteLeft />
       </div>
    
          <div className='text-center mt-4 text-slate-500'>
              {review.text}
          </div>
         
         
         
      

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight />
        </div>

        
    </div>
  )
}

export default Card
