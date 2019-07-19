import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() listId: number;
  tasks: any;
  @Input() addTaskFormIsOpen: number;

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.getTasksByListId(this.listId).subscribe(
      tasks => this.tasks = tasks
    );
  }

  openAddTaskForm(listId) {
    this.addTaskFormIsOpen = listId;
  }

  updateTask(newTask, index) {
    this.tasks.splice(index, 1, newTask);
  }

  createTask(taskName) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    // const task = {taskName: taskName, taskId: id, isDone: false};
    // this.tasks.unshift(task);
    this.addTaskFormIsOpen = null;
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  closeForm(value) {
    console.log(value);
    this.addTaskFormIsOpen = value;
  }
}
