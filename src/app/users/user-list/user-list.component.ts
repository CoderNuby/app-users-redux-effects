import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: UserModel[] = [];
  currentPage: number = 0;
  recordsPerPage: number = 6;
  totalUsers: number = 0;

  constructor(private userService: UserService){
  }

  ngOnInit(): void{
    this.getUsersCurrentPage();
    this.userService.getUserSize().subscribe(userLen => {
      this.totalUsers = userLen;
    });
  }

  changePage(currentPage: number){
    this.currentPage = currentPage + 1;
    this.getUsersCurrentPage();
  }

  getUsersCurrentPage(){
    this.userService.getUsers(this.currentPage, this.recordsPerPage).subscribe((users) => {
      this.users = users;
    });
  }
}
