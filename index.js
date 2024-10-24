require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 8081 || process.env.PORT;

app.use(express.json());
app.use("/api", require("./routes/index"));

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
