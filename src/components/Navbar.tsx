// import  { useState } from 'react';
// import { ChartNoAxesGantt } from 'lucide-react';

// export default function Navbar() {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <nav className="w-full mt-10 text-white sm:mt-14 bg-background border-1">
//       <div className="mx-auto w-full max-w-[700px] px-4 flex items-center justify-between">

//         {/* Icon Button */}
//         {/* Icon Button */}
// <button className="transition-colors duration-200">
//   <ChartNoAxesGantt
//     size={35}
//     className="text-[#282828] hover:text-[#DEEF1F] transition-colors duration-200"
//   />
// </button>

//         {/* Logo (Image) */}
//         <div>
//           <img
//             src="/kzr.png"
//             alt="Logo"
//             width={70}
//             height={70}
//           />
//         </div>

//         {/* Custom Switch */}
//         <div
//           onClick={() => setEnabled(!enabled)}
//           className={`w-16 h-9 flex items-center rounded-full px-[3px] cursor-pointer transition-colors duration-300 relative ${
//             enabled ? 'bg-[#DEEF1F]' : 'bg-[#282828]'
//           }`}
//         >
//           <div
//             className={`w-7 h-7 rounded-full bg-black transition-transform duration-300 transform ${
//               enabled ? 'translate-x-7' : 'translate-x-0'
//             }`}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }

// Updated Navbar.tsx
import React from 'react';
import { GanttChartSquare, Sun, Moon } from 'lucide-react';
import { useTheme } from '../components/Context/ThemeContext';
import { ChartNoAxesGantt } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <nav className="w-full px-4 mt-12 text-theme-text sm:mt-14 border-1">
      <div className="mx-auto w-full max-w-[700px] px-4 flex items-center justify-between">
        {/* Icon Button */}
        <button className="transition-colors duration-200 text-theme-gray hover:text-theme-primary">
        <ChartNoAxesGantt
     size={35}
     
   />

        </button>

        {/* Logo (Image) */}
        <div className=""> 
        <img
            src="/kzr.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        {/* Custom Switch */}
        <div
          onClick={toggleTheme}
          className={`w-16 h-9 flex items-center rounded-full px-[3px] cursor-pointer transition-colors duration-300 relative ${
            isDark ? 'bg-[#DEEF1F]' : 'bg-[#4169E1]'
          }`}
        >
          <div className="absolute flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-between w-10">
              <Sun size={14} className={`text-black transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`} />
              <Moon size={14} className={`text-white transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </div>
          <div
            className={`w-7 h-7 rounded-full bg-theme-bg-opposite z-10 transition-transform duration-300 transform ${
              isDark ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
