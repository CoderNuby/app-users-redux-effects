import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../../models/userModel';
import {
    loadedUserSuccess,
    loadedUserError,
    loadingUser
} from '../actions';

export interface UserState {
    user: UserModel | null;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export const userReducer = createReducer(
    initialState,
    on(loadingUser, (state) => ({loading: true, user: null, loaded: false, error: null})),
    on(loadedUserSuccess, (state, props) => ({loading: false, user: {...props.user}, loaded: true, error: null})),
    on(loadedUserError, (state, props) => ({
        loading: false,
        user: {...state.user! },
        loaded: true,
        error: {
            url: props.payload.url,
            name: props.payload.name,
            massage: props.payload.message
        }
    }))
);