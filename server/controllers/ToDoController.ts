import { Request, Response } from "express";
import db from "../database/database";

// Get all the To-Do's
const getAllToDo = async (req: Request, res: Response) => {
  try {
    const stmt = await db.prepare("SELECT * from to_do").all();
    res.status(200).json(stmt);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

// Add a new To-Do
const addToDo = async (req: Request, res: Response) => {
  const { title, description, expires } = req.body;

  try {
    const stmt = db
      .prepare("INSERT INTO to_do(title, description, expires) VALUES(?,?,?)")
      .run([title, description, expires]);
    res.status(201).json(stmt);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

// Modify To-Do Data/Status by ID
const updateToDo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, expires } = req.body;
  try {
    if (title) {
      const stmt = db
        .prepare("UPDATE to_do SET title = ? WHERE id = ?")
        .run([title, id]);
    }
    if (description) {
      const stmt = db
        .prepare("UPDATE to_do SET description = ? WHERE id = ?")
        .run([description, id]);
    }
    if (status) {
      const stmt = db
        .prepare("UPDATE to_do SET status = ? WHERE id = ?")
        .run([status, id]);
    }
    if (expires) {
      const stmt = db
        .prepare("UPDATE to_do SET expires = ? WHERE id = ?")
        .run([expires, id]);
    }
    res.status(200).json({ message: "updated!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

// Remove a To-Do by ID
const removeToDo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const stmt = db.prepare("DELETE FROM to_do WHERE ID = ?").run([id]);
    res.status(200).json(stmt);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

module.exports = {
  getAllToDo,
  addToDo,
  updateToDo,
  removeToDo,
};
