export enum Status {
  inserito = "Inserito",
  inElaborazione = "In elaborazione",
  completato = "Completato",
}

export class ToDo {
  id: string;
  title: string;
  description: string;
  status: Status;
  expires: string;

  constructor(
    id: string,
    title: string,
    description: string,
    status: Status,
    expires: string
  ) {
    this.id = id;
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
  setStatus(newStatus: Status): void {
    this.status = newStatus;
  }
  setExpires(newDate: string): void {
    this.expires = newDate;
  }
}
