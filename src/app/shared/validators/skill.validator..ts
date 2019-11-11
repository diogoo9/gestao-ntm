import { FormControl } from '@angular/forms';

export class ValidSkill {
  static valid(control: FormControl) {
    if(!control.value){
      return null
    }
    if (control.value >= 3) {
      return null;
    }

    return {
      validate: false,
      message: 'Escolha 3 competências'
    };
  }

}
