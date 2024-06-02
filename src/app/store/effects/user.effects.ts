import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
    loadingUser,
    loadedUserError,
    loadedUserSuccess
} from "../actions";
import { catchError, map, of, switchMap } from "rxjs";
import { UserService } from "../../services/user.service";
import { UserModel } from "../../models/userModel";


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ){}

    loadingUser$ =  createEffect(() => this.actions$.pipe(
        ofType(loadingUser),
        switchMap( (action) => {
            return this.userService.getUserById(action.id).pipe(
                map((user: UserModel) => {
                    return loadedUserSuccess({user});
                }),
                catchError((error: Error) => {
                    return of(loadedUserError({payload: error}));
                })
            );
        })
    ));
}