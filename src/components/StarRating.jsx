import React, { useState } from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import './star.css'
function StarRating({ratingValue}) {
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)
  return (
        <div className='bg-slate-200 min-h-screen'>
            <div className='flex flex-col align-middle justify-center items-center mx-auto p-6 max-w-md bg-white'>
            <div className='flex gap-1 py-12 px-6'>
                    {/* <FaStar className='text-yellow-500' value={ratingValue} />
                    <FaStarHalfAlt  className='text-yellow-500 ' value={ratingValue}/> */}
                    {[...Array(5)].map((star,index)=>{
                        const ratingV= index+1;
                        return (
                            <label>
                                <input 
                                    type="radio" 
                                    name='rating'
                                    value={ratingV} 
                                    className="hover:bg-yellow-500"
                                    onChange={(e)=>setRating(e.target.value)} 
                                    onMouseEnter={(e)=>setHover(e.target.value)} 
                                    onMouseMove={(e)=>setHover(null)}
                                    id={`star-${star}`}
                                />
                                <FaStar  className={`${ratingV <=(hover || rating)?'text-yellow-500':'text-gray-100'} star `}/>
                            </label>
                        )
                    })}
                </div>
                {rating && <div className='font-semibold'>The Rating is : {rating}</div>}
            </div>
        </div>
  )
}
export default StarRating