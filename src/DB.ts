declare var process;
declare function require(name: string);

import * as mysql from "mysql";
let config = require("./../../configs/db.json");

export function createConnection(): mysql.IConnection {
  let defaultEnv = config["defaultEnv"];
  if (process.env.ENV && config[process.env.ENV])
    defaultEnv = process.env.ENV;
  return mysql.createConnection(config[defaultEnv]);
}
