// To-Do List App - Trueblue Interview Test

import "./assets/scss/styles.scss";
import { addNewToDo } from "./ts/addNewToDo";
import { ToDo } from "./ts/ToDo";

// task di prova per sviluppo
let today = new Date();
let task = new ToDo(
  "Testare nuova funzione",
  "Test preliminare prima del rilascio di Maggio",
  "Inserito",
  today
);
addNewToDo(task);

// Main Event Listeners

// TODO : event on DOMContentLoaded to fetch from API

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => addNewToDo(task));
