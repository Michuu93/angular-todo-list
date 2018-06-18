import {Priority} from '../enum/priority.enum';

export class TodoItem {
  private title: string;
  private priority: Priority;

  constructor(priority: Priority, title: string) {
    this.priority = priority;
    this.title = title || '';
  }

  getPriority(): Priority {
    return this.priority;
  }

  getTitle(): string {
    return this.title;
  }
}
