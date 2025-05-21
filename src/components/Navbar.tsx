import { Home, X, Instagram, FileText, ChevronRight } from 'lucide-react';

export default function Navbar() {
  // common button classes for icons
  const iconBtnBase =
    "flex items-center justify-center w-10 h-10 rounded-[12px] " +
    "transition-all duration-300 ease-in-out transform";

  return (
    <nav className="fixed z-50 transform -translate-x-1/2 top-8 left-1/2">
  <div className="flex items-center bg-white/50 backdrop-blur-md border border-gray-200 rounded-[18px] h-16 px-4">
        {/* Home */}
        <button className={`${iconBtnBase} hover:bg-gray-100 hover:scale-125`}>
          <Home size={20} className="text-black" />
        </button>

        {/* Divider */}
        <div className="w-px h-10 mx-3 bg-gray-200" />

        {/* Middle icons */}
        <div className="flex items-center space-x-3">
          <button className={`${iconBtnBase} hover:bg-gray-100 hover:scale-125`}>
            <X size={20} className="text-black" />
          </button>
          <button className={`${iconBtnBase} hover:bg-gray-100 hover:scale-125`}>
            <Instagram size={20} className="text-black" />
          </button>
          <button className={`${iconBtnBase} hover:bg-gray-100 hover:scale-125`}>
            <FileText size={20} className="text-black" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-10 mx-3 bg-gray-200" />

        {/* Book a Call */}
        <button
          className="group relative flex items-center h-12 bg-black text-white text-sm font-medium rounded-[14px] px-3 ml-2 transition-all duration-300 ease-in-out hover:pr-8 hover:bg-gray-800"
        >
          <span>Book a Call</span>
          <ChevronRight
            size={16}
            className="absolute transition-all duration-300 ease-in-out translate-x-2 -translate-y-1/2 opacity-0 right-3 top-1/2 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </button>
      </div>
    </nav>
  );
}
