import {TodoItem} from './model/task.model';
import {EventEmitter} from '@angular/core';

export class TaskService {
  itemsList: Array<TodoItem>;
  itemsUpdated = new EventEmitter<>();

  constructor() {
    this.itemsList = <Array<TodoItem>> JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addItem(task: TodoItem) {
    this.itemsList.push(task);
    this.saveToLocalStorage();
  }

  deleteItem(item: TodoItem) {
    this.itemsList.splice(this.itemsList.indexOf(item), 1);
    this.saveToLocalStorage();
  }

  deleteAll() {
    this.itemsList = [];
    this.saveToLocalStorage();
  }

  onDrop() {
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.itemsList));
  }
}
