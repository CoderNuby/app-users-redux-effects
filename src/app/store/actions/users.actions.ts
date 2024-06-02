import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/userModel";


export const loadingUsers = createAction("[Users] Loading Users", props<{page: number, per_page: number}>());
export const loadedUsersSuccess = createAction("[Users] Loaded Users Success", props<{users: UserModel[]}>());
export const loadedUsersError = createAction("[Users] Loaded Users Error", props<{payload: any}>());