"use strict";
const modelHelper = require("./modelHelper");
const table = "todos";
function Get(id) {
    return modelHelper.Get(table, id);
}
exports.Get = Get;
function Create(params) {
    return modelHelper.Create(table, params);
}
exports.Create = Create;
function Remove(id) {
    return modelHelper.Remove(table, id);
}
exports.Remove = Remove;
function Update(todo) {
    return modelHelper.Update(table, todo);
}
exports.Update = Update;

//# sourceMappingURL=Todo.js.map
