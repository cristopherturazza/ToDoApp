import { v4 as uuidv4 } from "uuid";

export class ToDo {
  id: string;
  title: string;
  description: string;
  status: string;
  expires: Date;

  constructor(
    title: string,
    description: string,
    status: string,
    expires: Date
  ) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.status = status;
    this.expires = expires;
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }
  setDescription(newDescription: string): void {
    this.description = newDescription;
  }
  setStatus(newStatus: string): void {
    this.status = newStatus;
  }
  setExpires(newDate: Date): void {
    this.expires = newDate;
  }
}
