import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  users: any = [];  
  constructor(private UserService: UsersService) { }

  ngOnInit() {
    this.UserService.getAllUsers().then((data)=>{
      this.users = data;
    });
  }

}
