import Database from "better-sqlite3";
import fs from 'fs';
import path from 'path';


// Ottieni il percorso del database
const dbPath = path.join(process.env.DB_PATH, 'todo.db');

// Crea la cartella se non esiste
const dir = path.dirname(dbPath);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const db = new Database(dbPath,{ verbose: console.log });
db.pragma("journal_mode = WAL");

// create to-do table if not exist
const toDo = db
  .prepare(
    "CREATE TABLE IF NOT EXISTS to_do(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'Inserito', expires TEXT NOT NULL)"
  )
  .run();

export default db;
