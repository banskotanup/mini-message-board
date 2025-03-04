require("dotenv").config();
const { Pool } = require("pg");
module.exports = new Pool({
    host: "localhost",
    user: "sysadmin",
    database: "minimessageboard",
    password: "Stdy4drm",
    port: "5432",
});