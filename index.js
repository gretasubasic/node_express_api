import express from "express";
import bodyParser from "body-parser";

import useRoutes from "./routes/users.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", useRoutes);

app.get("/", (req, res) => {
    console.log("test");

    res.send("hello from the test page");

});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
