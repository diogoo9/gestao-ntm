import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //http://127.0.0.1:8000/api/users
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://127.0.0.1:8000/api/users').toPromise();
  }

  saveUser(usuario){
    return this.http.post('http://127.0.0.1:8000/api/users',usuario).toPromise();
  }

  valideUser(){

  }
}
