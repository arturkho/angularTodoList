import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {List} from '../intefaces/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  ROOT_URL = 'http://localhost:3000/';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getLists() {
    return this.http.get<List>(this.ROOT_URL + 'lists/');
  }
  createList(list) {
    return this.http.post(this.ROOT_URL + 'lists', list, this.options);
  }
  removeList(listId) {
    return  this.http.delete<List>(this.ROOT_URL + 'lists/' + listId);
  }
}
