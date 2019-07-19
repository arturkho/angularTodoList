import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  entityName: string;
  @Input() usage: string;
  @Output() submit = new EventEmitter();
  @Output() onClose = new EventEmitter<string>();
  isSave = false;

  constructor() {
  }

  ngOnInit() {
  }

  close(event) {
    if (event.key === 'Escape') {
      this.onClose.emit('');
    }
  }

  save() {
    if (this.entityName && this.entityName !== '' && this.entityName.match(/^\s+$/) === null) {
      this.isSave = true;
      this.submit.emit(this.entityName);
    }
  }
}
