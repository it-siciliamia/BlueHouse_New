const cors = require("cors");
const express = require("express");

const app = express();
require("dotenv").config();

app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(",") || "*" }));
app.use(express.json());

const beds24Api = require("./api/beds24Api");
app.use("/api", beds24Api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Backend API running on http://localhost:${port}`));
