import {TodoItem} from './model/task.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TaskService {
  tasksUpdated = new Subject<Array<TodoItem>>();
  private tasksList: Array<TodoItem>;

  constructor() {
    this.tasksList = <Array<TodoItem>> JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(task: TodoItem) {
    this.tasksList.push(task);
    this.saveTasksToLocalStorage();
  }

  deleteTask(item: TodoItem) {
    this.tasksList.splice(this.tasksList.indexOf(item), 1);
    this.saveTasksToLocalStorage();
  }

  deleteAllTasks() {
    this.tasksList = [];
    this.saveTasksToLocalStorage();
  }

  getAllTasks() {
    return this.tasksList.slice();
  }

  setTasks(itemsList: Array<TodoItem>) {
    this.tasksList = itemsList;
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
    this.tasksUpdated.next(this.tasksList.slice());
  }
}
