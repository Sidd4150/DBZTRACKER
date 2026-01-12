
import { NavLink } from "react-router-dom";

function Nav() {
    return (

        <nav className="p-4 bg-slate-200 text-black flex justify-between items-center">
            {/* This is your Title/Logo */}
            <div className="font-bold">DBS Tracker</div>

            {/* Adding 'flex' here makes the <li> items sit side-by-side */}
            <ul className="flex gap-x-6">
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-300"}>
                        Days since DBS ended
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/timeline" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-300"}>
                        Timeline
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

}
export default Nav;