import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/userModel";


export const loadingUsers = createAction("[Users] Loading Users");
export const loadingUsersSuccess = createAction("[Users] Loading Users Success", props<{users: UserModel[]}>());
export const loadingUsersError = createAction("[Users] Loading Users Success", props<{payload: any}>());