// To-Do List App - Trueblue Interview Test

import "bootstrap";
import "./assets/scss/styles.scss";
import { ToDoList } from "./ts/ToDoList";
import { Status } from "./ts/ToDo";
import * as bootstrap from "bootstrap";

// On mount

export const toDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
  toDoList.getAllTasks();
});

// Main Event Listeners

const addTaskForm: HTMLFormElement = document.querySelector("#add-task-form");
addTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(addTaskForm);
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as Status;
  const date = formData.get("expires") as string;
  const expires = new Date(date).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  toDoList.newTask(title, description, status, expires);
  window.location.reload();
};
