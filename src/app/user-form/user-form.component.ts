import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateRequired } from '../shared/validators/required.validator';
import { ValidateEmail } from '../shared/validators/email.validator';
import { UsersService } from '../users.service';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private registrarForm: FormGroup;
  skills: any = [];

  constructor(private userSewrvice: UsersService, private skillService: SkillsService) { 
    this.registrarForm = new FormGroup({  
      'name':new FormControl(null,[ValidateRequired]),
      'email':new FormControl(null,[ValidateRequired, ValidateEmail.valid]),
      'cpf':new FormControl(null,[ValidateRequired]),
      'skill':new FormControl(null,[ValidateRequired])
    });

    
  }

  ngOnInit() {
    this.registrarForm.patchValue({
      name:'Diogo'
    });

    this.skillService.getAllSkills().then((dados)=>{
      this.skills = dados;
      
    })

  }

  save(){
    const user =this.registrarForm.getRawValue();
    this.userSewrvice.saveUser(user).then((res)=>{
      console.log(res);
    })
  }

}
