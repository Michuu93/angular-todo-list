import {async, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {TaskService} from '../task/task.service';
import {MatIconModule, MatToolbarModule} from '@angular/material';

describe('Component: Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule, MatToolbarModule]
    }).compileComponents();
  }));

  it('should create the header', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  }));

  it('should create the task service', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const taskSercive = fixture.debugElement.injector.get(TaskService);
    expect(taskSercive).toBeTruthy();
  }));
});
