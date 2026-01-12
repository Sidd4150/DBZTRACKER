import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="p-4 bg-slate-200 text-black flex justify-between items-center relative">
            <div className="font-bold">DBS Tracker</div>

            <ul className="flex gap-x-6 items-center">

                {/* 1. Add 'group' to the parent <li> */}
                <li className="relative group py-2">
                    <button className="flex items-center hover:text-blue-500 cursor-default">
                        DragonBall Trackers
                        <span className="ml-1 text-xs">▼</span>
                    </button>

                    {/* 2. Submenu: Starts as 'hidden', becomes 'block' when group is hovered */}
                    <ul className="absolute left-0 hidden group-hover:block w-48 bg-white border border-slate-200 rounded-md shadow-xl py-2 z-50 transition-all">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-sm ${isActive ? "text-blue-600 bg-slate-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`
                                }
                            >
                                Days since DBS ended
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/super-return"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                                Days until DBS anime returns
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink
                        to="/timeline"
                        className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-300"}
                    >
                        Timeline
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;