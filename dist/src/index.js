"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cars_routes_1 = __importDefault(require("./routes/cars.routes"));
const dashboard_handler_1 = require("./handlers/dashboard.handler");
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const PORT = 8686;
const app = (0, express_1.default)();
const knexInstance = (0, knex_1.default)({
    client: "postgresql",
    connection: {
        database: "binar_challenge_5",
        user: "jepan",
        password: "12345",
    },
});
objection_1.Model.knex(knexInstance);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/api/", dashboard_handler_1.handleDashboard);
app.use("/api/cars", cars_routes_1.default);
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map