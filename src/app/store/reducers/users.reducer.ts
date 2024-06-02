import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../../models/userModel';
import {
    loadingUsers,
    loadedUsersError,
    loadedUsersSuccess
} from '../actions';

export interface UsersState {
    users: UserModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export const usersReducer = createReducer(
    initialState,
    on(loadingUsers, (state) => ({loading: true, loaded: false, users: [], error: null})),
    on(loadedUsersSuccess, (state, props) => ({loading: false, loaded: true, error: null, users: [...props.users]})),
    on(loadedUsersError, (state, props) => ({
        loading: false,
        loaded: false,
        users: [...state.users],
        error: {
            url: props.payload.url,
            name: props.payload.name,
            massage: props.payload.message
        }
    }))
);