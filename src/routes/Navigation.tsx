import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="about" element={<h1>About Page</h1>} />
                <Route path="users" element={<h1>Users Page</h1>} />
                <Route path="home" element={<HomePage />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};
