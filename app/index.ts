import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import carRouter from "../config/carRoutes";
import knex from "knex";
import { Model } from "objection";
import userRoutes from "../config/userRoutes";

const app = express();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");
const file = fs.readFileSync("./openapi.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/users", userRoutes);

module.exports = app;
