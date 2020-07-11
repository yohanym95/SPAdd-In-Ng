export class Todo {
  public Title: string;
  public priority: number;
  public status: string;

  constructor(title: string, priority: number, status: string) {
    this.Title = title;
    this.priority = priority;
    this.status = status;
  }
}
