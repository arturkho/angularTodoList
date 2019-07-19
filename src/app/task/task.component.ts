import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isBoolean} from 'util';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  newTaskName: string;
  @Input() task: any;
  @Output() newTask = new EventEmitter<{ taskName?: string, taskId?: string, isDone?: boolean }>();
  changeTask: string;

  constructor() {}

  ngOnInit() {
  }

  onChange(taskId) {
    this.changeTask = taskId;
  }

  acceptChanges(taskId) {
    if (this.newTaskName && this.newTaskName !== '' && this.newTaskName.match(/^\s+$/) === null) {
      // this.task = {taskName: this.newTaskName, id: taskId, isDone: this.task.isDone, listId: task.listId};
      this.newTask.emit(this.task);
      this.changeTask = '';
    }
  }

  update(isDone) {
    if (isBoolean(isDone) && isDone !== this.task.isDone) {
      // this.task = {taskName: this.task.taskName, id: this.task.taskId, isDone: isDone, listId: task.listId};
      this.newTask.emit(this.task);
    }
  }
}
