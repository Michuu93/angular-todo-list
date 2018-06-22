import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TodoItem} from './model/task.model';
import {Priority} from './enum/priority.enum';
import {MatButtonToggleGroup} from '@angular/material';
import {TaskService} from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  itemsList: Array<TodoItem>;
  @ViewChild(MatButtonToggleGroup) prioritySelect: MatButtonToggleGroup;
  @ViewChild('titleInput', {read: ElementRef}) titleInput: ElementRef;
  Priority = Priority;
  hoveredIndex: string;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.itemsList = this.taskService.itemsList;
    this.taskService.itemsUpdated.subscribe(
      () => this.itemsList = this.taskService.itemsList
    );
  }

  onAddItem() {
    this.taskService.addItem(new TodoItem(this.prioritySelect.value, this.titleInput.nativeElement.value));
    this.titleInput.nativeElement.value = '';
  }

  onDeleteItem(item: TodoItem) {
    if (confirm('Are you sure to delete \"' + item.title + '\" ?')) {
      this.taskService.deleteItem(item);
    }
  }

  onDrop() {
    this.taskService.onDrop();
  }
}
