import {Priority} from '../enum/priority.enum';

export class TodoItem {
  title: string;
  priority: Priority;

  constructor(priority: Priority, title: string) {
    this.priority = priority;
    this.title = title || '';
  }
}
