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
  @Output() newTask = new EventEmitter<{ taskName?: string, id?: number, isDone?: boolean }>();
  changeTask: number;

  constructor() {}

  ngOnInit() {
  }

  onChange(taskId) {
    this.changeTask = taskId;
  }

  acceptChanges(id: any) {
    if (this.newTaskName && this.newTaskName !== '' && this.newTaskName.match(/^\s+$/) === null) {
      this.task = {taskName: this.newTaskName, id: this.task.id, isDone: this.task.isDone, listId: this.task.listId};
      this.newTask.emit(this.task);
      this.changeTask = null;
    }
  }

  update(isDone) {
    if (isBoolean(isDone) && isDone !== this.task.isDone) {
      this.task = {taskName: this.task.taskName, id: this.task.id, isDone, listId: this.task.listId};
      this.newTask.emit(this.task);
    }
  }
}
