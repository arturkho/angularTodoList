import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Task} from '../../intefaces/task';
import {map, scan, switchMap} from 'rxjs/operators';

type TaskAction = (tasks: Task[]) => Task[];
const applyAction = (tasks, action) => action(tasks);

@Component({
  selector: 'app-single-tasks',
  templateUrl: './single-tasks.component.html',
  styleUrls: ['./single-tasks.component.scss']
})

export class SingleTasksComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _listId: number;
  taskId: number;
  tasks$: Observable<Task[]>;

  actions$: Subject<TaskAction> = new BehaviorSubject(tasks => tasks);

  @Input() addTaskFormIsOpen: number;

  constructor(private taskService: TaskService) {
  }

  @Input()
  set listId(listId: number) {
    this._listId = listId;
    this.tasks$ = this.taskService.getTasksByListId(this._listId);
  }

  ngOnInit() {
    this.tasks$ = this.tasks$
      .pipe(
        switchMap((lists) => {
          return this.actions$.pipe(
            scan<TaskAction, Task[]>(applyAction, lists)
          );
        }),
      );
  }

  openAddTaskForm(listId) {
    this.addTaskFormIsOpen = listId;
  }

  updateTask(newTask, index) {
    this.taskService.updateTask(newTask)
      .pipe(
        map(task => tasks => {
          tasks.findIndex((t) => t === index);
          tasks[index] = newTask;
          return tasks;
        })
      )
      .subscribe(action => {
        this.actions$.next(action);
      });
  }

  createTask(taskName) {
    const task = {taskName, done: false, listId: this._listId};
    this.taskService.createTask(task).pipe(
      map(createdTask => tasks => [...tasks, createdTask])
    ).subscribe(action => {
      this.actions$.next(action);
    });
    this.addTaskFormIsOpen = null;
  }

  removeTask(taskId, index) {
    this.taskService.removeTask(taskId).pipe(
      map(_ => tasks => {
        return tasks.slice(0, index).concat(tasks.slice(index + 1));
      })
    ).subscribe(action => {
      this.actions$.next(action);
    });
  }

  closeForm(value) {
    this.addTaskFormIsOpen = value;
  }

  addDescription(description, task, index) {
    this.taskId = null;
    const newTask = {taskName: task.taskName, listId: task.listId, id: task.id, done: task.done, description};
    this.updateTask(newTask, index);
  }

}
