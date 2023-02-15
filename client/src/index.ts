// To-Do List App

import "bootstrap";
import "./assets/scss/styles.scss";
import { ToDoList } from "./ts/ToDoList";
import { Status } from "./ts/ToDo";
import { Modal } from "bootstrap";

// On mount

export const toDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
  toDoList.getAllTasks();
});

// Add Task Event Listener

const addModal = new Modal("#addtask", {
  keyboard: false,
  backdrop: "static",
  focus: true,
});

const addTaskButton = document.querySelector("#new-task-button");
const addTaskForm: HTMLFormElement = document.querySelector("#add-task-form");

addTaskButton.addEventListener("click", () => {
  addModal.show();
});

addTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(addTaskForm);
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as Status;
  const expires = formData.get("expires") as string;
  toDoList.newTask(title, description, status, expires);
  addModal.hide();
};
