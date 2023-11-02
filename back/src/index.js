const server = require("./app");
const { conn } = require("./DB_connection");
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("server raise in port " + PORT);
  });
});
