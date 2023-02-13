import axios from "axios";
import { ToDo, Status } from "./ToDo";
import { addNewToDo } from "./addNewToDo";

// To-Do List wrapper
const todoContainer = document.querySelector("#todo-list");

// No To-Do Placeholder

const noToDo = document.createElement("div");
noToDo.innerHTML = `<p><span class="fw-bold fs-5">Nessun task inserito</span>.<br>Clicca 'Nuovo Task' per aggiungerne uno.</p>`;
noToDo.className =
  "d-flex flex-row text-center justify-content-center align-items-start";

// Axios client
const api = axios.create({
  baseURL: process.env.API_PATH,
  timeout: 5000,
});
export class ToDoList {
  tasks: ToDo[] | [];

  constructor() {
    this.tasks = [];
  }

  // render tasks on the UI
  renderTasks() {
    todoContainer.innerHTML = "";
    this.tasks.length
      ? this.tasks.forEach((task) => addNewToDo(task))
      : todoContainer.appendChild(noToDo);
  }

  // fetch all data
  async getAllTasks() {
    const fetch = await api.get("/");
    this.tasks = fetch.data;
    this.renderTasks();
  }

  // add a new task
  async newTask(
    title: string,
    description: string,
    status: Status,
    expires: string
  ) {
    const add = await api.post("/", {
      title: title,
      description: description,
      status: status,
      expires: expires,
    });
    window.location.reload();
  }

  // delete a task
  async deleteTask(id: string) {
    const deleteTask = await api.delete(`/${id}`);
    window.location.reload();
  }

  // update a task
  async updateTask(
    id: string,
    title: string,
    description: string,
    status: Status,
    expires: string
  ) {
    const updateTask = await api.patch(`/${id}`, {
      title: title,
      description: description,
      status: status,
      expires: expires,
    });
    window.location.reload();
  }
}