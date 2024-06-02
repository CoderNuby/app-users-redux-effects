import { ActionReducerMap } from "@ngrx/store";
import { UserState, UsersState, userReducer, usersReducer } from "./store/reducers";



export interface AppState {
    users: UsersState,
    user: UserState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: usersReducer,
    user: userReducer
}