import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersSearchComponent,UsersRegisterComponent,UsersGridComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[UsersSearchComponent, UsersRegisterComponent]
})
export class UsersModule { }
