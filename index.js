const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require('lodash');
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.get("/outfit", (req, res) => {
    const tops = ["Black", "White", "Orange", "Navy"];
    const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
    const shoes = ["White", "Grey", "Black", "Red"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    });
});

app.post("/comment",async (req, res) => {
    const id = uuid();
    const content = req.body.content;

    if (!content) {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/comments", { recursive: true});

    res.sendStatus(201);
});
app.listen(3000, () => console.log("API Server s running..."));