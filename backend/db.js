import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "repair_marketplace",
  waitForConnections: true,
  connectionLimit: 10
});

export const poolPromise = pool;