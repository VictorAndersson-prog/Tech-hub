import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Question } from "../Question";
import { useParams } from "react-router-dom";
export default function QuestionPage() {
    const { id } = useParams();
    const {
        data: questions,
        isLoading,
        isError,
    } = useQuery<Question[]>({
        queryKey: ["questions", id],
        queryFn: () =>
            fetch("http://localhost:3000/questions/" + id).then((data) =>
                data.json()
            ),
    });
    return <div></div>;
}
