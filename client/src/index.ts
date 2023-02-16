// To-Do List App

import "bootstrap";
import "./assets/scss/styles.scss";
import { ToDoList } from "./ts/ToDoList";
import { Status } from "./ts/ToDo";
import { Modal } from "bootstrap";

// value from event.target
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

// Create toDoList instance
export const toDoList = new ToDoList();

// On Mount
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

// Input Counter Alert

const titleInput: HTMLInputElement = addTaskForm.querySelector("#title");
titleInput.addEventListener(
  "input",
  (e: HTMLElementEvent<HTMLButtonElement>) => {
    const titleCounter: HTMLElement =
      addTaskForm.querySelector("#title-counter");
    titleCounter.textContent = e.target.value.length.toString();
    e.target.value.length === 100
      ? titleCounter.parentElement.classList.add("text-danger")
      : titleCounter.parentElement.classList.remove("text-danger");
  }
);
const descriptionInput: HTMLInputElement =
  addTaskForm.querySelector("#description");
descriptionInput.addEventListener(
  "input",
  (e: HTMLElementEvent<HTMLButtonElement>) => {
    const descriptionCounter: HTMLElement = addTaskForm.querySelector(
      "#description-counter"
    );
    descriptionCounter.textContent = e.target.value.length.toString();
    e.target.value.length === 500
      ? descriptionCounter.parentElement.classList.add("text-danger")
      : descriptionCounter.parentElement.classList.remove("text-danger");
  }
);

// Add Task Submit

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
