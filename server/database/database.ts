import Database from "better-sqlite3";
const db = new Database("./database/todo.db", { verbose: console.log });
db.pragma("journal_mode = WAL");

// create to-do table if not exist
const toDo = db
  .prepare(
    "CREATE TABLE IF NOT EXISTS to_do(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'Inserito', expires TEXT NOT NULL)"
  )
  .run();

export default db;
