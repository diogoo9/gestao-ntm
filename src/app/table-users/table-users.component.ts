import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})

export class TableUsersComponent implements OnInit {

  users:any = [];
  constructor(private UserService: UsersService) { }

  ngOnInit() {
    this.UserService.getAllUsers().then((data)=>{
      this.users = data;
      console.log(data);
    });
  }

}
