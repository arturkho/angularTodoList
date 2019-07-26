import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isBoolean} from 'util';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  newTaskName: string;
  @Input() task: any;
  @Output() newTask = new EventEmitter<{ taskName?: string, id?: number, done?: boolean }>();
  changeTask: number;

  constructor() {}

  ngOnInit() {
  }

  onChange(taskId) {
    this.changeTask = taskId;
  }

  acceptChanges(id: any) {
    if (this.newTaskName && this.newTaskName !== '' && this.newTaskName.match(/^\s+$/) === null) {
      this.task = {taskName: this.newTaskName, id: this.task.id, done: this.task.done, listId: this.task.listId};
      this.newTask.emit(this.task);
      this.changeTask = null;
    }
  }

  update(done) {
    if (isBoolean(done) && done !== this.task.done) {
      this.task = {taskName: this.task.taskName, id: this.task.id, done, listId: this.task.listId};
      this.newTask.emit(this.task);
    }
  }
}
