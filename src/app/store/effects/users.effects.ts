import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
    loadingUsers,
    loadedUsersError,
    loadedUsersSuccess
} from "../actions";
import { catchError, map, of, switchMap } from "rxjs";
import { UserService } from "../../services/user.service";
import { UserModel } from "../../models/userModel";


@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ){}

    loadingUsers$ =  createEffect(() => this.actions$.pipe(
        ofType(loadingUsers),
        switchMap((action) => {
            return this.userService.getUsers(action.page, action.per_page).pipe(
                map((users: UserModel[]) => {
                    return loadedUsersSuccess({users});
                }),
                catchError((error: Error) => {
                    return of(loadedUsersError({payload: error}));
                })
            );
        })
    ));
}