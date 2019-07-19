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
    this.listService.removeList(listId).subscribe();
    this.lists.splice(index, 1);
  }

  createList(listName) {
    const id = Math.floor(Math.random() * 10000);
    const list = {listName, id};
    this.listService.createList(list).subscribe(l => {
      console.log(l);
      this.lists.push(l);
    });
  }
}
