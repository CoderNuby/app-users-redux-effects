import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent,
    UserInfoComponent
  ]
})
export class UsersModule { }
