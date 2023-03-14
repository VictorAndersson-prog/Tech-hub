import React from "react";
import { Link } from "react-router-dom";
import { Question } from "../Question";

type Props = {
    question: Question;
};
export default function QuestionCard({ question }: Props) {
    return (
        <div className="p-4 border-b border-b-gray-400">
            <Link to={"/questions/" + question._id} className="">
                <h2 className="text-lg text-sky-500">{question.title}</h2>
                <p className="text-sm flex items-center">
                    {question.description}
                </p>
            </Link>
        </div>
    );
}
