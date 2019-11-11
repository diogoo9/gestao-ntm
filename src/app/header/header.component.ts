import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title;
  valid = false;
  constructor(private route: Router) { }

  ngOnInit() {
    this.title = "diogo";
    let a = sessionStorage.getItem('email');
    if(a){
      this.valid = true;
    }
  }

  go(){
    this.route.navigateByUrl('users');
  }
  login(){
    this.route.navigateByUrl('login');
  }
  logout(){
    sessionStorage.setItem('email','')
    this.route.navigateByUrl('login');
  }
}
