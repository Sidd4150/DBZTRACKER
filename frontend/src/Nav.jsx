import { NavLink } from "react-router-dom";
import icon from '/public/DragonBall-Tracker-LOGO.png';
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="p-4 bg-black/30 backdrop-blur-md text-white flex justify-between items-center sticky top-0 z-[100] border-b border-white/10 shadow-lg">
            <NavLink to="/">
                <div className="font-bold shrink-0 transition-transform hover:scale-105 active:scale-95">
                    <img src={icon} alt="IconDBZ tracker" className="w-32 md:w-40 h-auto filter drop-shadow-[0_0_8px_rgba(251,146,60,0.3)]" />
                </div>
            </NavLink>
            {/* Mobile Hamburger Button */}
            <button
                className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
            </button>

            {/* Main Nav Links */}
            <ul className={`
                ${isMobileMenuOpen ? "flex scale-100 opacity-100" : "hidden md:flex scale-95 md:scale-100 opacity-0 md:opacity-100"} 
                flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto 
                bg-black/90 md:bg-transparent p-6 md:p-0 gap-y-4 md:gap-x-8 items-start md:items-center shadow-2xl md:shadow-none z-[60]
                transition-all duration-300 origin-top
            `}>

                <li
                    className="relative w-full md:w-auto"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <button
                        className="flex items-center hover:text-orange-400 w-full text-left py-2 md:py-0 transition-colors font-medium tracking-wide"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(!isOpen);
                        }}
                    >
                        DragonBall Trackers
                        <span className={`ml-1 text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    <ul className={`
                        ${isOpen ? "block opacity-100 translate-y-0" : "hidden md:block opacity-0 translate-y-2 pointer-events-none"} 
                        md:absolute left-0 w-full md:w-56 bg-black/80 backdrop-blur-2xl md:border border-white/10 
                        rounded-xl md:shadow-2xl py-3 z-[110] transition-all duration-300
                    `}>
                        <li>
                            <NavLink
                                to="/super-return"
                                className="block px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-orange-500/20 transition-all font-medium"
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
                                    `block px-5 py-2.5 text-sm transition-all font-medium ${isActive ? "text-orange-400 bg-orange-500/10" : "text-white/70 hover:text-white hover:bg-orange-500/20"}`
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
                        className={({ isActive }) => `font-medium tracking-wide transition-colors ${isActive ? "text-orange-400" : "hover:text-orange-400"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Guess Game
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/timeline"
                        className={({ isActive }) => `font-medium tracking-wide transition-colors ${isActive ? "text-orange-400" : "hover:text-orange-400"}`}
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