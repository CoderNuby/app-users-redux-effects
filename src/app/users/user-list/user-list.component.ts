import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: UserModel[] = [];

  constructor(private userService: UserService){
    this.userService.getUsers(1).subscribe((users) => {
      this.users = users;
    });
  }
}
