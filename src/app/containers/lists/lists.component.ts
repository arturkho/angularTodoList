import {Component, Input, OnInit} from '@angular/core';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
 lists: any;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listService.getLists().subscribe(lists => {
        this.lists = lists;
      }
    );
  }
  removeCurrentList(listId, index) {
    this.lists.splice(index, 1);
  }
  createList(listName) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    // const list = {listName: listName, listId: id};
    // this.lists.unshift(list);
  }
}
