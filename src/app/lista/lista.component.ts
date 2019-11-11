import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  users: any = [];  
  constructor(private UserService: UsersService, private route: Router) { }

  ngOnInit() {
    let validate = localStorage.getItem('email');
    if(!validate){
      this.route.navigateByUrl('login');
    }

    this.UserService.getAllUsers().then((data)=>{
      this.users = data;
    });
  }

}
