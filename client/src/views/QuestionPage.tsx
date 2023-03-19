import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Question } from "../Question";
import { useParams } from "react-router-dom";
import moment from "moment";
export default function QuestionPage() {
    const { id } = useParams();
    const {
        data: question,
        isLoading,
        isError,
    } = useQuery<Question>({
        queryKey: ["questions", id],
        queryFn: () =>
            fetch("http://localhost:3000/questions/" + id).then((data) =>
                data.json()
            ),
    });
    if (isLoading)
        return (
            <div className="flex justify-center py-10">
                <div className="w-6 h-6 border-4 rounded-full border-t-orange-500 animate-spin"></div>
            </div>
        );

    if (isError) return <div>oops, something went wrong.</div>;
    return (
        <div className="py-10">
            <div className="border-b pb-4 m-4">
                <h2 className="text-2xl text-gray-700">{question.title}</h2>
                <p className="text-sm text-gray-600">
                    Asked:{" "}
                    <span className="text-gray-800">
                        {moment(question.createdAt).startOf("hour").fromNow()}
                    </span>
                </p>
            </div>
            <p className="">{question.description}</p>
        </div>
    );
}
