import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors({ origin: "*" }));
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
    // await Questions.insertMany([
    //     { title: "första inlägget", description: "nånting" },
    // ]);
    // await Questions.insertMany([
    //     { title: "andra inlägget", description: "något annat" },
    // ]);
    const questions = await Questions.find();
    res.send(questions);
});

app.listen(3000, () => {
    mongoose.connect(
        "mongodb+srv://user:admin@cluster0.sttbdxj.mongodb.net/Techhub?retryWrites=true&w=majority"
    );
});
