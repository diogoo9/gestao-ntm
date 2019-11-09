import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getAllSkills() {
    return this.http.get('http://127.0.0.1:8000/api/skills').toPromise();
  }

}
