import { createConnection } from "./DB";

function typeCast(field: any, next: Function) {
  if (field.type === "TINY" && field.length === 1) {
    return (field.string() === "1");
  }
  return next();
}

export function Get<T>(table: string, id: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        let conn = createConnection();
        conn.connect((err: Error) => {
            if (err)
                return reject(err);

            conn.query({
              sql: "SELECT * FROM `" + table + "` WHERE `id` = ? LIMIT 1",
              typeCast: typeCast
            }, [id], (err: Error, res: T[]) => {
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

export function Create<T>(table: string, params: Object): Promise<T> {
    if (params.hasOwnProperty("id"))
        delete params["id"];

    return new Promise<T>((resolve, reject) => {
        let conn = createConnection();
        conn.connect((err: Error) => {
            if (err)
                return reject(err);

            conn.query("INSERT INTO `" + table + "` SET ?", params, (err: Error, result) => {
                if (err)
                    reject(err);
                else if (result.insertId)
                    Get<T>(table, result.insertId).then(resolve, reject);
                else
                    reject(null);
                conn.end();
            });
        });
    });
}

export function Remove(table: string, id: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let conn = createConnection();
    conn.connect((err: Error) => {
      if (err)
        return reject(err);

      conn.query("DELETE FROM `" + table + "` WHERE `id` = ?", [id], (err: Error, result) => {
        if (err)
          reject(err);
        else
          resolve(result.affectedRows > 0);
        conn.end();
      });
    });
  });
}

export function Update<T>(table: string, o: T): Promise<T> {
  let obj = Object.assign({}, o),
      id = o["id"];
  delete obj["id"];
  return new Promise<T>((resolve, reject) => {
    let conn = createConnection();
    conn.connect((err: Error) => {
      if (err)
        return reject(err);
      conn.query("UPDATE `" + table + "` SET ? WHERE `id` = ?", [obj, id], (err: Error, result) => {
        if (err)
          reject(err);
        else
          Get<T>(table, id).then(resolve, reject);
        conn.end();
      });
    });
  });
}
