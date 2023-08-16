import React from 'react'
import Card from './Card';
import {useState} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Tours = (props) => {
    
  let {reviews}=props;
    const [index,setIndex]=useState(0);
     function leftHandler(){
       if(index===0)
       {
          setIndex(reviews.length-1);
       }
       else
       {
        setIndex(index-1);
       }
     }
     function rightHandler(){
      if(index===reviews.length-1)
      {
         setIndex(0);
      }
      else
      {
       setIndex(index+1);
      }
     }
     function randomHandler(){
        var ans=Math.floor(Math.random() * reviews.length);
        setIndex(ans);
     }
  return (
     
    <div  className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
       
       <Card  review={reviews[index]}/>
       
       <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto'>
            <button
             className='cursor-pointer hover:text-violet-500'
             onClick={leftHandler}>
              <IoIosArrowBack /> 
            </button>
            <button
             className='cursor-pointer hover:text-violet-500'
             onClick={rightHandler}>
             <IoIosArrowForward />
            </button>
        </div>
        <div className='mt-6'>
            <button
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-white text-lg'
             onClick={randomHandler}>
                Surprise Me
            </button>
        </div>
       
    </div>
  )
}

export default Tours
