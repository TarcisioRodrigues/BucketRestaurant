import express from "express";
import "reflect-metadata";
import cors from "cors";
import "./routes";
import "../src/database";
import { routes } from "./routes";
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log("🔥Server is running "));
