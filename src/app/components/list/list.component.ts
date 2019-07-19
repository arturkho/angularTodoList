import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  openRemoveModal: string;
  @Input() list: any;
  @Output() listId = new EventEmitter();
  @Output() navigateToList = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  openModal(listId) {
    this.openRemoveModal = listId;
  }

  closeModal(listId) {
    if (this.openRemoveModal === listId) {
      this.openRemoveModal = '';
    }
  }

  removeList(listId) {
    this.listId.emit(listId);
  }

  navigate(listId) {
    this.navigateToList.emit(listId);
  }
}
