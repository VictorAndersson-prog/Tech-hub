import React from "react";
import logo from "./assets/logo.png";
import Navbar from "./components/Navbar";
import QuestionCard from "./components/QuestionCard";

export default function App() {
    return (
        <div>
            <Navbar />
            <QuestionCard />
        </div>
    );
}
