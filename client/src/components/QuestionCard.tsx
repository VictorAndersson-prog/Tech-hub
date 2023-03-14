import React from "react";
import { Link } from "react-router-dom";
type Props = {};

export default function QuestionCard({}: Props) {
    return (
        <div className="p-4 border-b border-b-gray-400">
            <Link to={"/questions/123"} className="">
                <h2 className="text-lg text-sky-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, inventore?
                </h2>
                <p className="text-sm flex items-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae adipisci reiciendis consequuntur modi voluptatum
                    quia id eos omnis, ipsum magnam!
                </p>
            </Link>
        </div>
    );
}
