import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  openRemoveModal: string;
  @Input() list: any;

  constructor(private ar: ActivatedRoute, private listService: ListService) {}

  ngOnInit() {
    this.ar.params.subscribe(id => console.log('list', id));
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
    // this.listId.emit(listId);
  }
}
