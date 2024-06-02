import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/userModel";


export const loadingUser = createAction("[User] Loading User", props<{id: number}>());
export const loadedUserSuccess = createAction("[User] Loaded User Success", props<{user: UserModel}>());
export const loadedUserError = createAction("[User] Loaded User Error", props<{payload: any}>());