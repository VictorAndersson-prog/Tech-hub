import React from "react";
import Navbar from "./components/Navbar";
import QuestionCard from "./components/QuestionCard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import QuestionPage from "./views/QuestionPage";
export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path="/questions/:id" element={<QuestionPage />} />
            </Routes>
        </div>
    );
}
