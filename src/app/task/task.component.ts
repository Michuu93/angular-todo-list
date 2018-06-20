import {ChangeDetectionStrategy, Component, ElementRef, Output, ViewChild} from '@angular/core';
import {TodoItem} from './model/task.model';
import {Priority} from './enum/priority.enum';
import {MatButtonToggleGroup} from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Output() itemsList: Array<TodoItem>;
  @ViewChild(MatButtonToggleGroup) prioritySelect: MatButtonToggleGroup;
  @ViewChild('titleInput', {read: ElementRef}) titleInput: ElementRef;
  Priority = Priority;

  constructor() {
    this.itemsList = <Array<TodoItem>> JSON.parse(localStorage.getItem('tasks')) || [];
  }

  deleteItem(item: TodoItem) {
    if (confirm('Are you sure to delete \"' + item.title + '\" ?')) {
      this.itemsList.splice(this.itemsList.indexOf(item), 1);
      this.saveToLocalStorage();
    }
  }

  addItem() {
    this.itemsList.push(new TodoItem(this.prioritySelect.value, this.titleInput.nativeElement.value));
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.itemsList));
  }
}
