import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss']
})
export class TaskDescriptionComponent implements OnInit {
  @Input() task: any;
  @Output() openDescriptionForm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  openForm(id) {
    this.openDescriptionForm.emit(id);
  }
}
