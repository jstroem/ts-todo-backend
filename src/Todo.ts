import {createConnection } from "./DB";
import * as ModelHelper from "./ModelHelper";
import * as mysql from "mysql";

const table = "todos";

export interface Model {
  id: number;
  title: string;
  order: number;
  completed: boolean;
}

export function Get(id: number): Promise<Model> {
  return ModelHelper.Get<Model>(table, id);
}

export function Create(params: Object): Promise<Model> {
  return ModelHelper.Create<Model>(table, params);
}

export function Remove(id: number): Promise<boolean> {
  return ModelHelper.Remove(table, id);
}

export function Update(todo: Model): Promise<Model> {
  return ModelHelper.Update<Model>(table, todo);
}
