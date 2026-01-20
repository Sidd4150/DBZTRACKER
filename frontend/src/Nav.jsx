import { NavLink } from "react-router-dom";
import icon from '/public/DragonBall-Tracker-LOGO.png';
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="p-4 bg-white text-black flex justify-between items-center relative border-b border-slate-100">
            <div className="font-bold shrink-0">
                <img src={icon} alt="IconDBZ tracker" className="w-32 md:w-40 h-auto" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Main Nav Links */}
            <ul className={`
                ${isMobileMenuOpen ? "flex" : "hidden"} 
                md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto 
                bg-white md:bg-transparent p-4 md:p-0 gap-y-4 md:gap-x-6 items-start md:items-center shadow-lg md:shadow-none z-[60]
            `}>

                <li
                    className="relative w-full md:w-auto"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <button
                        className="flex items-center hover:text-blue-500 w-full text-left py-2 md:py-0"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevents conflicts
                            setIsOpen(!isOpen);
                        }}
                    >
                        DragonBall Trackers
                        <span className={`ml-1 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    <ul className={`
                        ${isOpen ? "block" : "hidden"} 
                        md:absolute left-0 w-full md:w-48 bg-white md:border border-slate-200 
                        rounded-md md:shadow-xl py-2 z-[70] transition-all
                    `}>
                        <li>
                            <NavLink
                                to="/super-return"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                onClick={() => { setIsOpen(false); setIsMobileMenuOpen(false); }}
                            >
                                Days until DBS returns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-sm ${isActive ? "text-blue-600 bg-slate-50" : "text-gray-700 hover:bg-blue-50"}`
                                }
                                onClick={() => { setIsOpen(false); setIsMobileMenuOpen(false); }}
                            >
                                Days since DBS ended
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink
                        to="/game"
                        className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-orange-400"}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Guess the Character
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/timeline"
                        className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Timeline
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;