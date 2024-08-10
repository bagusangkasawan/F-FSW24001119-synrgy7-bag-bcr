import http from "http";
const app = require("../app");
const PORT = process.env.PORT || 8686;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
