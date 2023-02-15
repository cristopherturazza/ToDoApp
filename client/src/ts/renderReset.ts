// To-Do List wrapper
export const renderReset = () => {
  const todoContainer = document.querySelector("#todo-list");
  const addForm: HTMLFormElement = document.querySelector("#add-task-form");
  const title: HTMLInputElement = addForm.querySelector("#title");
  const description: HTMLInputElement = addForm.querySelector("#description");
  const status: HTMLInputElement = addForm.querySelector("#status");
  const expires: HTMLInputElement = addForm.querySelector("#expires");

  todoContainer.innerHTML = "";
  title.value = "";
  description.value = "";
  status.value = "Inserito";
  expires.value = "";
};
