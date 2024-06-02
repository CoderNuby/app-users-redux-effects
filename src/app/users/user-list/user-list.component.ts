import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/userModel';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { loadingUsers } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy {

  users: UserModel[] = [];
  currentPage: number = 0;
  recordsPerPage: number = 6;
  totalUsers: number = 0;

  loading: boolean = false;
  error: any;

  usersStoreSub!: Subscription;

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ){
  }

  ngOnDestroy(): void {
    this.usersStoreSub.unsubscribe();
  }

  ngOnInit(): void{
    this.userService.getUsersSize().subscribe(userLen => {
      this.totalUsers = userLen;
    });

    this.getUsersCurrentPage();
    this.usersStoreSub = this.store.select('users').subscribe((state) => {
      this.users = state.users;
      this.loading = state.loading;
      this.error = state.error;
    });
  }

  changePage(currentPage: number){
    this.currentPage = currentPage + 1;
    this.getUsersCurrentPage();
  }

  getUsersCurrentPage(){
    this.store.dispatch(loadingUsers({page: this.currentPage, per_page: this.recordsPerPage}));
  }
}
