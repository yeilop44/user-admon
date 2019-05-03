import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser: User;
  users: User[];

  urlApi = 'https://back-mpolitical.herokuapp.com/user';

  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUsers() {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.get(this.urlApi, httpOptions);
  }

  postUser(User: User) {
    return this.http.post(`${this.urlApi}/signup`, User);
  }
}
