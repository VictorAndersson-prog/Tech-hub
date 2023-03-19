import React from "react";
import Navbar from "./components/Navbar";
import QuestionCard from "./components/QuestionCard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import QuestionPage from "./views/QuestionPage";
import AskQuestionPage from "./views/AskQuestionPage";
export default function App() {
    return (
        <div>
            <Navbar />
            <div className="maw-w-4xl mx-auto py-10">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/questions/:id" element={<QuestionPage />} />
                    <Route path="/ask-question" element={<AskQuestionPage />} />
                </Routes>
            </div>
        </div>
    );
}
