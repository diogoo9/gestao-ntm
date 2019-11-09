import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatOptionModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule, MatBadgeModule,
    MatCardModule    

  ],
  exports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule, MatBadgeModule,MatCardModule
  ],
})
export class CustomMaterialModule { }
