import React from 'react'
import ScrollReveals from './items/ScrollReveals'
import HeadingSection from './HeadingSection';

export default function AboutScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-3 mb-4 mt-[80px]">
      <div className="w-full max-w-lg">
      
      {/* /about  heading text*/}
      <div className='text-2xl font-bold font-body'>
        About
      </div>


<ScrollReveals
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  lorem ipsum lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cupiditate accusantium, velit, asperiores vel ab rem magni sit totam iure, magnam earum. Deleniti, itaque minus rerum quam beatae modi temporibus.
  Dolorem laborum ducimus mollitia rerum ullam asperiores veritatis sapiente assumenda ipsum minima beatae, ad placeat cupiditate alias reprehenderit, corrupti praesentium perspiciatis fugiat. Eaque omnis esse nulla fuga ad ipsum porro!
 
 
</ScrollReveals>

    
      </div>
    </div>
  )
}
