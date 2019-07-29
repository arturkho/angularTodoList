import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../intefaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  ROOT_URL = 'http://localhost:8080/';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getTasksByListId(listId) {
    return this.http.get<Task[]>(this.ROOT_URL + 'tasks/' + listId);
  }

  createTask(task) {
    return this.http.post(this.ROOT_URL + 'tasks', task, this.options);
  }

  removeTask(taskId) {
    return this.http.delete<Task>(this.ROOT_URL + 'tasks/' + taskId);
  }
  updateTask(task) {
    return this.http.put<Task>(this.ROOT_URL + 'tasks/' + task.id , task);
  }
}
