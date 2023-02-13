// To-Do List App

import "bootstrap";
import "./assets/scss/styles.scss";
import { ToDoList } from "./ts/ToDoList";
import { Status } from "./ts/ToDo";

// On mount

export const toDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
  toDoList.getAllTasks();
});

// Add Task Event Listener

const addTaskForm: HTMLFormElement = document.querySelector("#add-task-form");
addTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(addTaskForm);
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as Status;
  const expires = formData.get("expires") as string;
  toDoList.newTask(title, description, status, expires);
};
