export enum Status {
  TODO = "Todo",
  IN_PROGRESS = "In progress",
  DONE = "Done",
}

export enum Filter {
  TODO = "Todo",
  IN_PROGRESS = "In progress",
  DONE = "Done",
  ALL = "All",
}

export interface Todo {
  id: string;
  name: string;
  status: Status;
}
