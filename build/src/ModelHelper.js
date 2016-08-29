"use strict";
const DB_1 = require("./DB");
function typeCast(field, next) {
    if (field.type === "TINY" && field.length === 1) {
        return (field.string() === "1");
    }
    return next();
}
function Get(table, id) {
    return new Promise((resolve, reject) => {
        let conn = DB_1.createConnection();
        conn.connect((err) => {
            if (err)
                return reject(err);
            conn.query({
                sql: "SELECT * FROM `" + table + "` WHERE `id` = ? LIMIT 1",
                typeCast: typeCast
            }, [id], (err, res) => {
                if (err)
                    reject(err);
                else if (res && res.length === 1)
                    resolve(res[0]);
                else
                    resolve(null);
                conn.end();
            });
        });
    });
}
exports.Get = Get;
function Create(table, params) {
    if (params.hasOwnProperty("id"))
        delete params["id"];
    return new Promise((resolve, reject) => {
        let conn = DB_1.createConnection();
        conn.connect((err) => {
            if (err)
                return reject(err);
            conn.query("INSERT INTO `" + table + "` SET ?", params, (err, result) => {
                if (err)
                    reject(err);
                else if (result.insertId)
                    Get(table, result.insertId).then(resolve, reject);
                else
                    reject(null);
                conn.end();
            });
        });
    });
}
exports.Create = Create;
function Remove(table, id) {
    return new Promise((resolve, reject) => {
        let conn = DB_1.createConnection();
        conn.connect((err) => {
            if (err)
                return reject(err);
            conn.query("DELETE FROM `" + table + "` WHERE `id` = ?", [id], (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.affectedRows > 0);
                conn.end();
            });
        });
    });
}
exports.Remove = Remove;
function Update(table, o) {
    let obj = Object.assign({}, o), id = o["id"];
    delete obj["id"];
    return new Promise((resolve, reject) => {
        let conn = DB_1.createConnection();
        conn.connect((err) => {
            if (err)
                return reject(err);
            conn.query("UPDATE `" + table + "` SET ? WHERE `id` = ?", [obj, id], (err, result) => {
                if (err)
                    reject(err);
                else
                    Get(table, id).then(resolve, reject);
                conn.end();
            });
        });
    });
}
exports.Update = Update;

//# sourceMappingURL=ModelHelper.js.map
