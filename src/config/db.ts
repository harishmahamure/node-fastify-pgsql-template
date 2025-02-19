import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const pgp = pgPromise({
  capSQL: true,
  query: (e) => console.log(e.query),
  error: (err, e) => {
    console.error("DB Error:", err, "Query:", e.query);
  },
});

const db = pgp({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 20,
  allowExitOnIdle: true,
});

db.connect().then(() => {
  console.log("Connected to the database");
});

export default db;
