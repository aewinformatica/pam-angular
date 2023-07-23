import { NgModule, Component } from '@angular/core';
import { UsersSearchComponent } from './users-search/users-search.component';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: UsersSearchComponent},
  {path: "new", component: UsersRegisterComponent }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UsersRoutingModule{}
