import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../classes/todoItem';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  itemsList: Array<TodoItem> = [
    new TodoItem(0, 'item1', '#3f51b5'),
    new TodoItem(1, 'item2', '#d9534f'),
    new TodoItem(2, 'item3', '#f0ad4e'),
    new TodoItem(3, 'item4', '#5cb85c')
  ];


  constructor() {
  }

  ngOnInit() {
  }

  deleteItem(item: TodoItem) {
    if (confirm('Are you sure to delete \"' + item.getTitle() + '\" ?')) {
      this.itemsList.splice(this.itemsList.indexOf(item), 1);
    }
  }
}
