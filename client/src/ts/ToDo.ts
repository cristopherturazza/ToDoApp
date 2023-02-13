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
}
