import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { RegistarComponent } from './registar/registar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
    //component:RegistarComponent
  },
  {
    path:'users',
    component:TableUsersComponent
  },
  {
    path:'registrar',
    component:RegistarComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'validar',
    component:ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
