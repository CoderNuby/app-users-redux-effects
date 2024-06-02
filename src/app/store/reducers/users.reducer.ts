import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../../models/userModel';
import {
    loadingUsers,
    loadingUsersError,
    loadingUsersSuccess
} from '../actions';

export interface UsersState {
    users: UserModel[];
    loaded: boolean;
    loading: boolean;
    error: any
}

const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null

};

export const usersReducer = createReducer(
  initialState,
  on(loadingUsers, (state) => ({...state, loading: true})),
  on(loadingUsersSuccess, (state, props) => ({...state, loading: false, loaded: true, users: [...props.users]})),
  on(loadingUsersError, (state, props) => ({...state, loading: false, loaded: false, error: props.payload})),
);