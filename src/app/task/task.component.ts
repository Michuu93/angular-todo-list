import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TodoItem} from './model/task.model';
import {Priority} from './enum/priority.enum';
import {MatButtonToggleGroup} from '@angular/material';
import {TaskService} from './task.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    trigger('listState', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(500)]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(200px)'
        }))
      ])
    ])
  ]
})
export class TaskComponent implements OnInit, OnDestroy {
  @ViewChild(MatButtonToggleGroup) prioritySelect: MatButtonToggleGroup;
  @ViewChild('titleInput', {read: ElementRef}) titleInput: ElementRef;
  Priority = Priority;
  hoveredIndex: string;
  private itemsList: Array<TodoItem>;
  private subscription: Subscription;

  constructor(private taskService: TaskService, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnInit() {
    this.itemsList = this.taskService.getItems();
    this.subscription = this.taskService.itemsUpdated.subscribe(
      () => this.itemsList = this.taskService.getItems()
    );
  }

  onAddItem() {
    const title = this.titleInput.nativeElement.value;
    if (title) {
      this.taskService.addItem(new TodoItem(this.prioritySelect.value, title));
      this.titleInput.nativeElement.value = '';
    }
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
