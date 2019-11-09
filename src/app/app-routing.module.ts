import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { RegistarComponent } from './registar/registar.component';


const routes: Routes = [
  {
    path:'',
    //component:ListaComponent
    component:RegistarComponent
  },
  {
    path:'users',
    component:TableUsersComponent
  },
  {
    path:'registrar',
    component:RegistarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
