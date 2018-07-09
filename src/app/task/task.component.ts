import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class TaskComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatButtonToggleGroup) prioritySelect: MatButtonToggleGroup;
  @ViewChild('taskDescriptionInput', {read: ElementRef}) titleInput: ElementRef;
  tasksList: Array<TodoItem>;
  private tasksUpdatedSubscription: Subscription;
  Priority = Priority;
  hoveredIndex: string;

  constructor(private taskService: TaskService, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnInit() {
    this.tasksList = this.taskService.getAllTasks();
    this.tasksUpdatedSubscription = this.taskService.tasksUpdated.subscribe(
      () => this.tasksList = this.taskService.getAllTasks()
    );
  }

  onAddTask() {
    const title = this.titleInput.nativeElement.value;
    if (title) {
      this.taskService.addTask(new TodoItem(this.prioritySelect.value, title));
      this.titleInput.nativeElement.value = '';
    }
  }

  onDeleteTask(item: TodoItem) {
    if (confirm('Are you sure to delete \"' + item.title + '\" ?')) {
      this.taskService.deleteTask(item);
    }
  }

  onDropTask() {
    this.taskService.setTasks(this.tasksList);
  }

  ngOnDestroy(): void {
    this.tasksUpdatedSubscription.unsubscribe();
  }
}
