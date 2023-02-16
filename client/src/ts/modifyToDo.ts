import { toDoList } from "..";
import { Modal } from "bootstrap";
import { ToDo, Status } from "./ToDo";

// value from event.target
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

// Modify Task Modal
export const modifyToDo = (toDo: ToDo) => {
  const modifyModal = new Modal("#modifytask", {
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
  const titleInput: HTMLInputElement = modifyForm.querySelector("#title");
  const titleCounter: HTMLElement = modifyForm.querySelector("#title-counter");
  const descriptionInput: HTMLInputElement =
    modifyForm.querySelector("#description");
  const descriptionCounter: HTMLElement = modifyForm.querySelector(
    "#description-counter"
  );

  title.value = toDo.title;
  titleCounter.textContent = toDo.title.length.toString();
  description.value = toDo.description;
  descriptionCounter.textContent = toDo.description.length.toString();
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
    modifyModal.hide();
  });

  // Input Counter Alert

  titleInput.addEventListener(
    "input",
    (e: HTMLElementEvent<HTMLButtonElement>) => {
      titleCounter.textContent = e.target.value.length.toString();
      e.target.value.length === 100
        ? titleCounter.parentElement.classList.add("text-danger")
        : titleCounter.parentElement.classList.remove("text-danger");
    }
  );

  descriptionInput.addEventListener(
    "input",
    (e: HTMLElementEvent<HTMLButtonElement>) => {
      descriptionCounter.textContent = e.target.value.length.toString();
      e.target.value.length === 500
        ? descriptionCounter.parentElement.classList.add("text-danger")
        : descriptionCounter.parentElement.classList.remove("text-danger");
    }
  );
};
