import http from "http";
import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import carRouter from "./routes/cars.routes";
import { handleDashboard } from "./handlers/dashboard.handler";
import knex from "knex";
import { Model } from "objection";

const PORT = 8686;
const app = express();
const knexInstance = knex({
    client: "postgresql",
    connection: {
        database: "binar_challenge_5",
        user: "jepan",
        password: "12345",
    },
});

Model.knex(knexInstance);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/", handleDashboard);

app.use("/api/cars", carRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
