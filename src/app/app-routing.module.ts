import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserInfoComponent } from './users/user-info/user-info.component';

const routes: Routes = [
  { path: 'home', component: UserListComponent },
  { path: 'user/:id', component: UserInfoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
