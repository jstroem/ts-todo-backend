import {createConnection } from "./DB";
import * as modelHelper from "./modelHelper";
import * as mysql from "mysql";

const table = "todos";

export interface Model {
  id: number;
  title: string;
  order: number;
  completed: boolean;
}

export function Get(id: number): Promise<Model> {
  return modelHelper.Get<Model>(table, id);
}

export function Create(params: Object): Promise<Model> {
  return modelHelper.Create<Model>(table, params);
}

export function Remove(id: number): Promise<boolean> {
  return modelHelper.Remove(table, id);
}

export function Update(todo: Model): Promise<Model> {
  return modelHelper.Update<Model>(table, todo);
}
