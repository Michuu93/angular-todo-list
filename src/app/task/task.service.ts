import {TodoItem} from './model/task.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TaskService {
  private itemsList: Array<TodoItem>;
  itemsUpdated = new Subject<Array<TodoItem>>();

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

  getItems() {
    return this.itemsList.slice();
  }

  setItems(itemsList: Array<TodoItem>) {
    this.itemsList = itemsList;
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.itemsList));
    this.itemsUpdated.next(this.itemsList.slice());
  }
}
