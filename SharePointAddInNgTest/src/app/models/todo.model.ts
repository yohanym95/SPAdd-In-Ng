export class Todo {
  public Title: string;
  public PriorityId: number;
  public status: string;

  constructor(title: string, priority: number, status: string) {
    this.Title = title;
    this.PriorityId = priority;
    this.status = status;
  }
}
