import { toDoList } from "..";
import * as bootstrap from "bootstrap";
import { ToDo, Status } from "./ToDo";

// Modify Task Modal
export const modifyToDo = (toDo: ToDo) => {
  const modifyModal = new bootstrap.Modal("#modifytask", {
    keyboard: false,
    backdrop: "static",
    focus: true,
  });
  const modifyForm: HTMLFormElement =
    document.querySelector("#modify-task-form");

  // set previous data in the form
  const title: HTMLInputElement = modifyForm.querySelector("#title");
  const description: HTMLInputElement =
    modifyForm.querySelector("#description");
  const status: HTMLInputElement = modifyForm.querySelector("#status");
  const expires: HTMLInputElement = modifyForm.querySelector("#expires");

  title.value = toDo.title;
  description.value = toDo.description;
  status.value = toDo.status;
  expires.value = toDo.expires;

  // opens the modal
  modifyModal.show();

  // modify task button
  const modifyButton = document.querySelector("#modify-task-button");
  modifyButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(modifyForm);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as Status;
    const expires = formData.get("expires") as string;
    toDoList.updateTask(toDo.id, title, description, status, expires);
  });
};
