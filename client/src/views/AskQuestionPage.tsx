import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AskQuestionPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    async function sendQuestion() {
        const response = await fetch("http://localhost:3000/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: title, description: description }),
        });
        setTitle("");
        setDescription("");
        const data = await response.json();
        navigate("/questions/" + data._id);
        console.log(data);
    }
    return (
        <>
            <h2 className="text-3xl mb-4">Ask a question on TechHub</h2>
            <label htmlFor="title">Title</label>
            <textarea
                id="title"
                className="bg-gray-100 p-1 w-full min-h-[50px]"
                placeholder="This is a title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            ></textarea>
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                className="bg-gray-100 p-1 w-full min-h-[200px]"
                placeholder="This is a description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button
                onClick={() => sendQuestion()}
                className="bg-orange-500 ml-auto hover:bg-orange-600 text-white rounded-md p-[10px] text-[13px]"
            >
                Ask question
            </button>
        </>
    );
}
