import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateRequired } from '../shared/validators/required.validator';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[ValidateRequired]),
      'password':new FormControl(null,[ValidateRequired])
    });
  }

  login(){
    let form = this.loginForm.getRawValue();
    this.loginService.login(form).then((data)=>{
      
      if(data[0]){
        sessionStorage.setItem('email',data[0].email);
        this.route.navigateByUrl('validar');
      }else{
        alert("dados inválidos");
      }
    })
  }

}
