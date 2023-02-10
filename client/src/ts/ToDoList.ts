import { UUIDComponents } from "./../../node_modules/uri-js/dist/esnext/schemes/urn-uuid.d";
import { ToDo } from "./ToDo";

export class ToDoList {
  tasks: ToDo[] | [];

  constructor() {
    this.tasks = [];
  }

  getAllTasks() {
    //fetch data from api
  }

  newTask() {
    // post new data to api
  }

  deleteTask(id: string) {
    // delete task by id
  }

  updateTask(id: string) {
    // update task by id
  }
}
