"use strict";
const mysql = require("mysql");
let config = require("./../../configs/db.json");
function createConnection() {
    return mysql.createConnection(config[config["defaultEnv"]]);
}
exports.createConnection = createConnection;

//# sourceMappingURL=DB.js.map
