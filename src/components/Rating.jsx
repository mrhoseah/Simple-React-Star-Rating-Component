import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
const getStars=(value)=>{
    const stars =[];
    //convert the value to string, plit the whole value from part 
    const [wholeValue,partValue]= parseFloat(value).toString().split(".");
    //for whole numbers
    for(let i=0; i<wholeValue;i++){
        stars.push(<FaStar className='text-yellow-500' />)
    }
    //for valus with decimal points .5
    if(partValue){
        stars.push(<FaStarHalfAlt className='text-yellow-500'/>)
    }
    //if no rating, populate with gray stars
    for(let i=wholeValue; i<(partValue ? 4:5);i++){
        stars.push(<FaStar className='w-4 h-4 text-gray-100' />)
    }
    console.log(stars)
    return stars;
    
}
function Rating({value}) {
  return (
    <div className='flex gap-1'>
        {getStars(value).map((val)=>(
           <div> {val}</div>
        ))}
    </div>
  )
}

export default Rating