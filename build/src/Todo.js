"use strict";
const ModelHelper = require("./ModelHelper");
const table = "todos";
function Get(id) {
    return ModelHelper.Get(table, id);
}
exports.Get = Get;
function Create(params) {
    return ModelHelper.Create(table, params);
}
exports.Create = Create;
function Remove(id) {
    return ModelHelper.Remove(table, id);
}
exports.Remove = Remove;
function Update(todo) {
    return ModelHelper.Update(table, todo);
}
exports.Update = Update;

//# sourceMappingURL=Todo.js.map
