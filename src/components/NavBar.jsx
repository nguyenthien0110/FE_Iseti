import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="text-white text-center text-3xl w-52 bg-gray-800 mr-5">
            <nav>
                <div className="h-28 mt-4 mx-auto flex items-center justify-center">
                    <span className="text-white text-5xl">TiTi</span>
                </div>
                <ul className="my-5">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users"
                            className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
