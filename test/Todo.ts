/// <reference path="../typings/index.d.ts" />

import * as Todo from "./../src/Todo";
import { expect } from "chai";

describe("Todo", () => {
  let todos: Todo.Model[] = [];
  it("Should be able to create a new todo", (done) => {
    Todo.Create({
      title: "New Title",
      completed: false,
      order: 0
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.not.null;
      expect(todo.title).to.equal("New Title");
      expect(todo.completed).to.equal(false);
      expect(todo.order).to.equal(0);
      expect(typeof todo.id).to.equal("number");
      todos.push(todo);
      done();
    }).catch(done);
  });

  it("Should be able to get a todo", (done) => {
    let todo1: Todo.Model;
    Todo.Create({
      title: "New title",
      completed: true,
      order: 1
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.not.null;
      expect(typeof todo.id).to.equal("number");
      todo1 = todo;
      todos.push(todo);
      return Todo.Get(todo.id);
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.not.null;
      expect(todo.id).to.equal(todo1.id);
      expect(todo.completed).to.equal(true);
      expect(todo.order).to.equal(1);
      done();
    }).catch(done);
  });

  it("Should be able to delete a todo", (done) => {
    let todo1: Todo.Model;
    Todo.Create({
      title: "New title",
      completed: true,
      order: 2
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.not.null;
      expect(typeof todo.id).to.equal("number");
      todo1 = todo;
      return Todo.Remove(todo.id);
    }).then((res: boolean) => {
      expect(res).to.equal(true);
      return Todo.Get(todo1.id);
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.null;
      done();
    }).catch(done);
  });

  it("Should be able to update a todo", (done) => {
    Todo.Create({
      title: "New todo",
      completed: false,
      order: 3
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.not.null;
      expect(typeof todo.id).to.equal("number");
      todos.push(todo);
      todo.title = "Updated todo";
      todo.order = 4;
      todo.completed = true;
      return Todo.Update(todo);
    }).then((todo: Todo.Model) => {
      expect(todo).to.be.not.null;
      expect(todo.title).to.equal("Updated todo");
      expect(todo.order).to.equal(4);
      expect(todo.completed).to.equal(true);
      done();
    }).catch(done);
  });

  afterEach((done) => {
    Promise.all(
      todos.map((todo: Todo.Model) => Todo.Remove(todo.id))
    ).then(() => done(), done);
  });
});
