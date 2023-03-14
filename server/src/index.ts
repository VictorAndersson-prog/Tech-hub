import express from "express";
import mongoose from "mongoose";
const app = express();

app.get("/", (req, res) => {
    res.send("hej");
});

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Questions = mongoose.model("questions", questionSchema);
app.get("/questions", async (req, res) => {
    const questions = await Questions.find();
    res.send(questions);
});

app.listen(3000);
