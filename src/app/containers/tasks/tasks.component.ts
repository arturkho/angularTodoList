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

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasksByListId(this.listId).subscribe(
      tasks => {
        this.tasks = tasks;
      }
    );
    console.log(this.tasks, 'here');
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
    const task = {taskName, isDone: false, listId: this.listId};
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
    console.log(value);
    this.addTaskFormIsOpen = value;
  }
}
