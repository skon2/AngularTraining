import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Important
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    UsersComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,          // ✅ Add here
    ReactiveFormsModule,  
    UsersRoutingModule
  ]
})
export class UsersModule { }
