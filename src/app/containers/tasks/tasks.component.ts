import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  // tslint:disable-next-line:variable-name
  _listId: number;
  tasks: any;
  @Input() addTaskFormIsOpen: number;

  constructor(private taskService: TaskService) {
  }

  @Input()
  set listId(listId: number) {
    this._listId = listId;
    this.taskService.getTasksByListId(this._listId).subscribe(
      tasks => {
        this.tasks = tasks;
      }
    );
  }

  openAddTaskForm(listId) {
    this.addTaskFormIsOpen = listId;
  }

  updateTask(newTask, index) {
    this.taskService.updateTask(newTask).subscribe(t => {
      this.tasks.splice(index, 1, t);
    });
  }

  createTask(taskName) {
    const task = {taskName, done: false, listId: this._listId};
    this.taskService.createTask(task).subscribe(t => {
      this.tasks.push(t);
    });
    this.addTaskFormIsOpen = null;
  }

  removeTask(taskId, index) {
    this.tasks.splice(index, 1);
    this.taskService.removeTask(taskId).subscribe();
  }

  closeForm(value) {
    this.addTaskFormIsOpen = value;
  }
}
