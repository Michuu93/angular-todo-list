import {async, TestBed} from '@angular/core/testing';
import {TaskComponent} from './task.component';
import {AppModule} from '../app.module';
import {HeaderComponent} from '../header/header.component';
import {TaskService} from './task.service';

describe('Component: Task', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  it('should create the tasks', async(() => {
    const fixture = TestBed.createComponent(TaskComponent);
    const task = fixture.debugElement.componentInstance;
    expect(task).toBeTruthy();
  }));

  it('should create the task service', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const taskSercive = fixture.debugElement.injector.get(TaskService);
    expect(taskSercive).toBeTruthy();
  }));
});
