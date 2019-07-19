import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  createList(listName) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    // const list = {listName: listName, listId: id};
    // this.lists.unshift(list);
  }
}
