// create a new row element in the task list
import { ToDo, Status } from "./ToDo";
import { modifyToDo } from "./modifyToDo";
import { toDoList } from "..";

// To-Do List wrapper
const todoContainer = document.querySelector("#todo-list");

// Create new To-Do Element filled with task data
export const addNewToDo = (toDo: ToDo) => {
  const row = document.createElement("li");

  // IT date format
  const expiresIT = new Date(toDo.expires).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Create Component
  row.className = "to-do-element rounded-3 mb-3 bg-light";
  row.setAttribute("id", toDo.id);
  row.innerHTML = `<div class="d-flex flex-column">
  <div class="d-flex flex-row justify-content-between align-items-center pointer p-3 to-do-head">
    <div class="fw-semibold ${
      toDo.status === "Completato" ? "erased" : null
    }">${toDo.title}</div>
  <div class="d-flex align-items-start">
    <div class="badge text-bg-${
      toDo.status === Status.inserito
        ? "info"
        : toDo.status === Status.inElaborazione
        ? "warning"
        : toDo.status === Status.completato
        ? "success"
        : "info"
    } rounded-pill d-flex align-items-center mx-3">${toDo.status}</div>
    <div class="fw-lighter ${
      toDo.status != "Completato" ? "text-danger" : null
    } ">${expiresIT}
    </div></div></div>
  <div class="d-flex flex-row justify-content-between border-top mt-2 p-3 pt-1 to-do-body visually-hidden">
  <p class="fw-light mb-0 mt-3">
  ${toDo.description}
  </p>
  <div class="d-flex align-items-end mt-2">
  <div class="modify btn shadow-sm py-1 px-2 me-2 btn-outline-primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</div>
  <div class="delete btn shadow-sm py-1 px-2  btn-outline-danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
</div>
  </div>
  </div>
  </div>`;

  // Row Events

  const headRow = row.querySelector(".to-do-head");
  const bodyRow = row.querySelector(".to-do-body");
  const deleteButton = row.querySelector(".delete");
  const modifyButton = row.querySelector(".modify");

  // Show/Hidden Body
  headRow.addEventListener("click", () => {
    bodyRow.classList.toggle("visually-hidden");
  });

  // Remove To-Do
  deleteButton.addEventListener("click", () => {
    toDoList.deleteTask(toDo.id);
  });

  // Modify To-Do
  modifyButton.addEventListener("click", () => {
    const toModify = toDoList.tasks.find((task: ToDo) => task.id === toDo.id);
    modifyToDo(toModify);
  });

  // Append to the To-Do List
  todoContainer.appendChild(row);
};
