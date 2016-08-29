/// <reference path="../typings/index.d.ts" />
"use strict";
const Todo = require("./../src/Todo");
const chai_1 = require("chai");
describe("Todo", () => {
    let todos = [];
    it("Should be able to create a new todo", (done) => {
        Todo.Create({
            title: "New Title",
            completed: false,
            order: 0
        }).then((todo) => {
            chai_1.expect(todo).to.be.not.null;
            chai_1.expect(todo.title).to.equal("New Title");
            chai_1.expect(todo.completed).to.equal(false);
            chai_1.expect(todo.order).to.equal(0);
            chai_1.expect(typeof todo.id).to.equal("number");
            todos.push(todo);
            done();
        }).catch(done);
    });
    it("Should be able to get a todo", (done) => {
        let todo1;
        Todo.Create({
            title: "New title",
            completed: true,
            order: 1
        }).then((todo) => {
            chai_1.expect(todo).to.be.not.null;
            chai_1.expect(typeof todo.id).to.equal("number");
            todo1 = todo;
            todos.push(todo);
            return Todo.Get(todo.id);
        }).then((todo) => {
            chai_1.expect(todo).to.be.not.null;
            chai_1.expect(todo.id).to.equal(todo1.id);
            chai_1.expect(todo.completed).to.equal(true);
            chai_1.expect(todo.order).to.equal(1);
            done();
        }).catch(done);
    });
    it("Should be able to delete a todo", (done) => {
        let todo1;
        Todo.Create({
            title: "New title",
            completed: true,
            order: 2
        }).then((todo) => {
            chai_1.expect(todo).to.be.not.null;
            chai_1.expect(typeof todo.id).to.equal("number");
            todo1 = todo;
            return Todo.Remove(todo.id);
        }).then((res) => {
            chai_1.expect(res).to.equal(true);
            return Todo.Get(todo1.id);
        }).then((todo) => {
            chai_1.expect(todo).to.be.null;
            done();
        }).catch(done);
    });
    it("Should be able to update a todo", (done) => {
        Todo.Create({
            title: "New todo",
            completed: false,
            order: 3
        }).then((todo) => {
            chai_1.expect(todo).to.be.not.null;
            chai_1.expect(typeof todo.id).to.equal("number");
            todos.push(todo);
            todo.title = "Updated todo";
            todo.order = 4;
            todo.completed = true;
            return Todo.Update(todo);
        }).then((todo) => {
            chai_1.expect(todo).to.be.not.null;
            chai_1.expect(todo.title).to.equal("Updated todo");
            chai_1.expect(todo.order).to.equal(4);
            chai_1.expect(todo.completed).to.equal(true);
            done();
        }).catch(done);
    });
    afterEach((done) => {
        Promise.all(todos.map((todo) => Todo.Remove(todo.id))).then(() => done(), done);
    });
});

//# sourceMappingURL=Todo.js.map
