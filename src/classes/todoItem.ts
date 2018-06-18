export class TodoItem {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title || '';
    this.description = description || '';
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }
}
