import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="text-gray-800 text-center text-3xl w-52 bg-white mr-5 shadow-md">
            <nav>
                <div className="h-28 mt-4 mx-auto flex items-center justify-center">
                    <span className="text-gray-800 text-5xl">TiTi</span>
                </div>
                <ul className="my-5">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => (isActive ? "text-gray-500" : "text-gray-800")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "text-gray-500" : "text-gray-800")}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users"
                            className={({ isActive }) => (isActive ? "text-gray-500" : "text-gray-800")}
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
