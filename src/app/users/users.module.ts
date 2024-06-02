import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    UserListComponent,
    UserInfoComponent
  ]
})
export class UsersModule { }
