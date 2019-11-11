import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //http://127.0.0.1:8000/api/users
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://127.0.0.1:8000/api/users').toPromise();
  }

  saveUser(user){    
    let res;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':'application/json' }) };
    const body = JSON.stringify(user);
    try {
      res = this.http.post('http://127.0.0.1:8000/api/users',body,options).toPromise();
    } catch (error) {
      return error;
    }
    return res;
    
  }

  valideUser($id){
    return this.http.put(`http://127.0.0.1:8000/api/users/${$id}`,{status:1},{
    }).toPromise();
   }
}
