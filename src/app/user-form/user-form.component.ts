import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateRequired } from '../shared/validators/required.validator';
import { ValidateEmail } from '../shared/validators/email.validator';
import { UsersService } from '../users.service';
import { SkillsService } from '../skills.service';
import { ValidSkill } from '../shared/validators/skill.validator.';
import { ValidatePhone } from '../shared/validators/phonel.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private registrarForm: FormGroup;
  skills: any = [];
  skillsSelected: any = [];
  changeSkill;
  constructor(private userSewrvice: UsersService, private skillService: SkillsService) {    

    
  }

  ngOnInit() {
    if(this.skillsSelected.length == 0){
      console.log(this.skillsSelected);
    }
    this.registrarForm = new FormGroup({  
      'name':new FormControl(null,[ValidateRequired]),
      'email':new FormControl(null,[ValidateRequired, ValidateEmail.valid]),
      'cpf':new FormControl(null,[ValidateRequired]),
    });

    this.skillService.getAllSkills().then((dados)=>{
      this.skills = dados;      
    })

  }

  save(){
    const user =this.registrarForm.getRawValue();
    user.skill = this.skillsSelected;
    console.log(user)
    this.userSewrvice.saveUser(user).then((res)=>{
      console.log(res);
    })
  }

  add(){
    console.log(this.registrarForm.controls);
    if(this.changeSkill == null){
      return null;
    }
    let exist = this.skillsSelected.find((skill)=>{
      return skill.id == this.changeSkill;
    })
    if(exist){
      return alert("esta competência já está adicionada");
    }
    let selected = this.skills.find((skill)=>{
      return skill.id == this.changeSkill;
    });    
    this.skillsSelected.push(selected);
    if(this.skillsSelected.length >= 3){      
      //this.registrarForm.controls['skill'].status.set = "VALID"; //= "VALID";
    }
  }

  remove(id){
    this.skillsSelected.splice((skill)=>{skill.id == id},1);
  }

  onChange(skillId) {
    this.changeSkill = skillId;
}

}
