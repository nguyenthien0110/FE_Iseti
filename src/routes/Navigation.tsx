import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";
import { UserPage } from "../components/UserPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
