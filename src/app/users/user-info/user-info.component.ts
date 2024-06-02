import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/userModel';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { loadingUser } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit, OnDestroy {

  user: UserModel | null = null;
  error: any;
  loading: boolean = false;

  routerSub!: Subscription;
  userStoreSub!: Subscription;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ){

  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.userStoreSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routerSub = this.router.params.subscribe((params) => {
      this.store.dispatch(loadingUser({id: params['id']}));
    });

    this.userStoreSub = this.store.select('user').subscribe((state) => {
      this.user = state.user;
      this.loading = state.loading;
      this.error = state.error;
    });
  }
}
