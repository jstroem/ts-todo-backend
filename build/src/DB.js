"use strict";
const mysql = require("mysql");
let config = require("./../../configs/db.json");
function createConnection() {
    let defaultEnv = config["defaultEnv"];
    if (process.env.ENV && config[process.env.ENV])
        defaultEnv = process.env.ENV;
    return mysql.createConnection(config[defaultEnv]);
}
exports.createConnection = createConnection;

//# sourceMappingURL=DB.js.map
