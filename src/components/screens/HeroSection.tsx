import React from 'react'
import SplitTexts from '../items/SplitTexts'

export default function HeroSection() {
  return (
    
      <SplitTexts
  text="Hello, Tailwind!"
  className="text-2xl font-semibold text-center text-black"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  threshold={0.2}
  rootMargin="-50px"
/>
    
  )
}
