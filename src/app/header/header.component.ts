import {Component} from '@angular/core';
import {TaskService} from '../task/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private taskService: TaskService) {
  }

  onDeleteAll() {
    if (confirm('Are you sure to all tasks?')) {
      this.taskService.deleteAll();
      this.taskService.itemsUpdated.emit();
    }
  }
}
