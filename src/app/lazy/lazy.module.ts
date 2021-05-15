import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyprofileComponent } from './myprofile/myprofile.component';


@NgModule({
  declarations: [
    LoginComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    ReactiveFormsModule
  ]
})
export class LazyModule { }
