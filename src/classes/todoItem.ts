export class TodoItem {
  private title: string;
  private position: number;
  private color: string;

  constructor(position: number, title: string, color: string) {
    this.position = position;
    this.title = title || '';
    this.color = color || 'green';
  }

  getPosition(): number {
    return this.position;
  }

  getTitle(): string {
    return this.title;
  }

  getColor(): string {
    return this.color;
  }


}
