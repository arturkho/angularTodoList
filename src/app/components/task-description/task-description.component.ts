import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss']
})
export class TaskDescriptionComponent implements OnInit {
  @Input() task: any;
  isOpenForm: boolean;
  inputValue: any;
  @Output() addDescription = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.inputValue = this.task.description;
  }
  openForm() {
    this.isOpenForm = true;
  }
  onSubmit() {
    this.addDescription.emit(this.inputValue);
    this.isOpenForm = false;
  }
}
