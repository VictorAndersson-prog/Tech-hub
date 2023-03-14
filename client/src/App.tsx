import React from "react";
import Navbar from "./components/Navbar";
import QuestionCard from "./components/QuestionCard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route
                    path="/questions/:id"
                    element={<div>Hej från en fråga</div>}
                />
            </Routes>
        </div>
    );
}
