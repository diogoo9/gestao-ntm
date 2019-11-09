import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './shared/directives/phone-mask.directive';
import { CpfMaskDirective } from './shared/directives/cpf-mask.directive';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './shared/custom-material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { CardComponent } from './card/card.component';
import { ListaComponent } from './lista/lista.component';
import { RegistarComponent } from './registar/registar.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, 
    PhoneMaskDirective, 
    CpfMaskDirective, 
    HeaderComponent, 
    SearchComponent, 
    TableUsersComponent, 
    CardComponent, 
    ListaComponent, 
    RegistarComponent, 
    UserFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
