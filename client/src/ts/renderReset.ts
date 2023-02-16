// To-Do List wrapper
export const renderReset = () => {
  const todoContainer = document.querySelector("#todo-list");
  const addForm: HTMLFormElement = document.querySelector("#add-task-form");
  const title: HTMLInputElement = addForm.querySelector("#title");
  const description: HTMLInputElement = addForm.querySelector("#description");
  const status: HTMLInputElement = addForm.querySelector("#status");
  const expires: HTMLInputElement = addForm.querySelector("#expires");
  const titleCounter: HTMLElement = addForm.querySelector("#title-counter");
  const descriptionCounter: HTMLElement = addForm.querySelector(
    "#description-counter"
  );

  todoContainer.innerHTML = "";
  title.value = "";
  description.value = "";
  status.value = "Inserito";
  expires.value = "";
  titleCounter.textContent = "0";
  descriptionCounter.textContent = "0";
};
