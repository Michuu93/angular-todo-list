import {Component} from '@angular/core';
import {TaskService} from '../task/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private taskService: TaskService) {
  }

  onDeleteAllTasks() {
    if (confirm('Are you sure to delete all tasks?')) {
      this.taskService.deleteAllTasks();
    }
  }
}
