import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-500 w-64 min-h-screen p-4">
            <div className="text-white text-2xl text-center font-bold mb-6">2Ti</div>
            <div className="space-y-4">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `text-white block px-4 py-2 rounded-md text-lg font-medium ${isActive ? "bg-blue-700" : "hover:bg-blue-500"}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-white block px-4 py-2 rounded-md text-lg font-medium ${isActive ? "bg-blue-700" : "hover:bg-blue-500"}`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        `text-white block px-4 py-2 rounded-md text-lg font-medium ${isActive ? "bg-blue-700" : "hover:bg-blue-500"}`
                    }
                >
                    Users
                </NavLink>
            </div>
        </nav>
    );
};
