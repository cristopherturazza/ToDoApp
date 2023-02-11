const express = require("express");
import { Express } from "express";

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app: Express = express();

require("dotenv").config();

const toDoRoute = require("./routes/ToDo");

// logger
app.use(morgan("dev"));

// body parser and query parameters
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// security middlewares
app.use(helmet());

// To-Do main route

app.use("/api/tasks", toDoRoute);

// main Path - health check
app.get("/api", (req, res) => {
  res.status(200).json({ message: "To-Do List" });
});

// error 404
app.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

// server start
app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
