import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() users;

  constructor(private UserService: UsersService, private route: Router) { }

  ngOnInit() {
    
  }
  validar($id){
    this.UserService.valideUser($id).then(()=>{      
      this.route.navigateByUrl('validar');
    })

  }
}
