declare function require(name: string);

import * as mysql from "mysql";
let config = require("./../../configs/db.json");

export function createConnection(): mysql.IConnection {
  return mysql.createConnection(config[config["defaultEnv"]]);
}
