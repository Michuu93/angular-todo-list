import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TodoItem} from './model/task.model';
import {Priority} from './enum/priority.enum';
import {MatButtonToggleGroup} from '@angular/material';
import {TaskService} from './task.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnDestroy {
  @ViewChild(MatButtonToggleGroup) prioritySelect: MatButtonToggleGroup;
  @ViewChild('titleInput', {read: ElementRef}) titleInput: ElementRef;
  Priority = Priority;
  hoveredIndex: string;
  private itemsList: Array<TodoItem>;
  private subscription: Subscription;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.itemsList = this.taskService.getItems();
    this.subscription = this.taskService.itemsUpdated.subscribe(
      () => this.itemsList = this.taskService.getItems()
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
    this.taskService.setItems(this.itemsList);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
