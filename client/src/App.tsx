import React from "react";
import Navbar from "./components/Navbar";
import QuestionCard from "./components/QuestionCard";
import { Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="max-w-4xl mx-auto">
                            <QuestionCard />
                            <QuestionCard />
                            <QuestionCard />
                        </div>
                    }
                />
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
