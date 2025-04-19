import  { useState } from 'react';

export default function Navbar() {
  const [enabled, setEnabled] = useState(false);

  return (
    <nav className="w-full mt-5 text-white sm:mt-14 bg-background border-1">
      <div className="mx-auto w-full max-w-[700px] px-4 flex items-center justify-between">

        {/* Icon Button */}
        <button className="text-white hover:text-[#DEEF1F] transition-colors duration-200">
          {/* <Icon icon="arrow-down-right" size={30} /> */}
        </button>

        {/* Logo (Image) */}
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        {/* Custom Switch */}
        <div
          onClick={() => setEnabled(!enabled)}
          className={`w-16 h-9 flex items-center rounded-full px-[3px] cursor-pointer transition-colors duration-300 relative ${
            enabled ? 'bg-[#DEEF1F]' : 'bg-[#282828]'
          }`}
        >
          <div
            className={`w-7 h-7 rounded-full bg-black transition-transform duration-300 transform ${
              enabled ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
