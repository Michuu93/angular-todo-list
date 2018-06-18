import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoItem} from './model/task.model';
import {Priority} from './enum/priority.enum';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  itemsList: Array<TodoItem> = [
    new TodoItem(Priority.low, 'item1'),
    new TodoItem(Priority.high, 'item2'),
    new TodoItem(Priority.normal, 'item3'),
    new TodoItem(Priority.normal, 'item4')
  ];
  Priority = Priority;

  constructor() {
  }

  ngOnInit() {
  }

  deleteItem(item: TodoItem) {
    if (confirm('Are you sure to delete \"' + item.getTitle() + '\" ?')) {
      this.itemsList.splice(this.itemsList.indexOf(item), 1);
    }
  }

  addItem(priority: Priority, title: string) {
    this.itemsList.push(new TodoItem(priority, title));
  }
}
