import React from 'react'
import {
  SiReact, SiKotlin, SiGithub, SiJavascript, SiTypescript, SiMongodb,
  SiMysql, SiPostgresql, SiSpringboot, SiAdobeillustrator, SiAdobexd
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function MyServices() {
  
      
  return (
    <div className="flex flex-col items-center justify-center w-full px-3 mb-4 mt-[40px]">
    <div className="w-full max-w-lg">
      <div className='text-2xl font-bold font-body mb-6'>
        My Skills
      </div>
      {/* Tech Skills */}
     
      <div className="flex flex-wrap gap-4 mb-6">
        {/* React */}
        <span className="inline-flex items-center  text-cyan-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiReact className="mr-1" />React</span>
        {/* Kotlin */}
        <span className="inline-flex items-center bg-gradient-to-br  text-purple-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiKotlin className="mr-1" />Kotlin</span>
        {/* GitHub */}
        <span className="inline-flex items-center  text-gray-800 font-body font-medium px-3 py-1 rounded-full text-sm"><SiGithub className="mr-1" />GitHub</span>
        {/* JavaScript */}
        <span className="inline-flex items-center  text-yellow-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiJavascript className="mr-1" />JavaScript</span>
        {/* TypeScript */}
        <span className="inline-flex items-center  text-blue-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiTypescript className="mr-1" />TypeScript</span>
        {/* MongoDB */}
        <span className="inline-flex items-center  text-green-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiMongodb className="mr-1" />MongoDB</span>
        {/* MySQL */}
        <span className="inline-flex items-center  text-cyan-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiMysql className="mr-1" />MySQL</span>
        {/* PostgreSQL */}
        <span className="inline-flex items-center  text-blue-900 font-body font-medium px-3 py-1 rounded-full text-sm"><SiPostgresql className="mr-1" />PostgreSQL</span>
        {/* Spring Boot */}
        <span className="inline-flex items-center  text-green-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiSpringboot className="mr-1" />Spring Boot</span>
        {/* Java */}
        <span className="inline-flex items-center  text-orange-700 font-body font-medium px-3 py-1 rounded-full text-sm"><FaJava className="mr-1" />Java</span>
     
        {/* Illustrator */}
        <span className="inline-flex items-center  text-orange-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiAdobeillustrator className="mr-1" />Illustrator</span>
        {/* Adobe XD */}
        <span className="inline-flex items-center  text-pink-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiAdobexd className="mr-1" />Adobe XD</span>
        {/* Illustrator again (if needed) */}
        <span className="inline-flex items-center  text-orange-700 font-body font-medium px-3 py-1 rounded-full text-sm"><SiAdobeillustrator className="mr-1" />Illustrator</span>
    </div>
  </div>
  </div>
  )
}
